import React, {useState, useContext, useEffect} from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import {useAPI} from '../api';
import createPersistedState from 'use-persisted-state';
import AppContext from '../AppContext';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Link as RouterLink} from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import dataContributionMD from '../md/data_contribution.md';
import dataContributionThanksMD from '../md/data_contribution_thanks.md';
import Markdown from '../components/Markdown';

const submissionInterval = 24 * 60 * 60 * 1000;
const useCooldownState = createPersistedState('data_contribution.cooldown');
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  })
);

const sharedItems = [
  {
    name: 'Hashed mission identifier',
    key: 'mission',
  },
  {
    name: 'Spaceship type, duration type, and capacity of your missions',
    key: 'mission',
  },
  {
    name: 'Launch time of your missions',
    key: 'mission',
  },
  {
    name: 'Artifacts type, level, and rarity of your mission rewards',
    key: 'mission',
  },
  {
    name: 'Your user name and unique identifier',
    key: 'credit',
  },
];

export default function DataContribution() {
  const api = useAPI();
  const {game} = useContext(AppContext);
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [anonymous, setAnonymous] = useState(true);
  const [cooldown, setCooldown] = useCooldownState({});
  const classes = useStyles();

  useEffect(() => {
    const interval = Date.now() - (game.id in cooldown ? cooldown[game.id] : 0);
    if (game.id === '') {
      setActiveStep(0);
    } else if (activeStep === 0) {
      setActiveStep(1);
    } else if (interval < submissionInterval) {
      setActiveStep(3);
    }
  }, [game.id, activeStep, cooldown]);

  const submit = async () => {
    setLoading(true);
    try {
      await api.post('/community_data/', {
        id: game.id,
        credit_me: !anonymous,
      });
      setActiveStep(3);
      const newCooldown = Object.assign({}, cooldown);
      newCooldown[game.id] = Date.now();
      setCooldown(newCooldown);
    } catch (e) {
      console.log(e);
      return;
    } finally {
      setLoading(false);
    }
  };
  const keys = ['mission'];
  if (!anonymous) keys.push('credit');

  return (
    <>
      <Markdown>{dataContributionMD}</Markdown>
      <Paper>
        This form is under maintainance.
        {false && (
          <>
            <Stepper orientation="vertical" activeStep={activeStep}>
              <Step>
                <StepLabel>Select Account</StepLabel>
                <StepContent>
                  <Typography>
                    First, you need to submit your ID from the setting screen
                    and switch to your account.
                  </Typography>
                  <div>
                    <Button disabled className={classes.button}>
                      Back
                    </Button>
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="secondary"
                      component={RouterLink}
                      to="/settings"
                    >
                      Open Settings
                    </Button>
                  </div>
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Choose Privacy Preference</StepLabel>
                <StepContent>
                  <Typography>
                    We never store your ID in our server, however, you have an
                    option to make your data credited. If you enable this
                    option, data is tied with your user name "{game.name}" and a
                    unique identifier generated from your ID. In the future,
                    this option will be required if you use planned features
                    such as past mission rewards statistics. You can stay
                    anonymous if not interested. You cannot change this option
                    after submission.
                  </Typography>
                  <FormControl required component="fieldset">
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={!anonymous}
                            onChange={() => setAnonymous(!anonymous)}
                            name="credit me"
                          />
                        }
                        label="Enable Personalization"
                      />
                    </FormGroup>
                  </FormControl>
                  <div>
                    <Button className={classes.button} disabled>
                      Back
                    </Button>
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="secondary"
                      onClick={() => setActiveStep(2)}
                    >
                      Next
                    </Button>
                  </div>
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Upload</StepLabel>
                <StepContent>
                  <Typography>
                    The following information will be saved, are you sure you
                    want to continue?
                  </Typography>
                  <ul>
                    {sharedItems
                      .filter(item => keys.includes(item.key))
                      .map(item => (
                        <li key={item.name}>{item.name}</li>
                      ))}
                  </ul>
                  <div>
                    <Button
                      className={classes.button}
                      onClick={() => setActiveStep(1)}
                    >
                      Back
                    </Button>
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="secondary"
                      onClick={submit}
                      endIcon={<SendIcon />}
                      disabled={loading}
                    >
                      Upload
                    </Button>
                  </div>
                </StepContent>
              </Step>
            </Stepper>
            {activeStep === 3 && (
              <Paper square elevation={0} className={classes.resetContainer}>
                <Markdown>{dataContributionThanksMD}</Markdown>
              </Paper>
            )}
          </>
        )}
      </Paper>
    </>
  );
}
