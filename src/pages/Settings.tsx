import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Markdown from '../components/Markdown';
import privacy from '../md/privacy.md';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import {Profile, ProfileManager} from '../AppContext';
import {useAPI} from '../api';
import {useSnackbar} from 'notistack';
import Spacer from '../components/Spacer';

const useStyles = makeStyles(theme => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export interface Props {
  profileManager: ProfileManager;
}

export default function Settings({profileManager}: Props) {
  const [newID, setNewID] = useState('');
  const api = useAPI();
  const {enqueueSnackbar} = useSnackbar();
  const [addingNewUser, setAddingNewUser] = useState(false);
  const classes = useStyles();

  const onSubmitNewID = async () => {
    const eiID = `EI${newID}`;
    if (profileManager.profiles.some(profile => profile.backup.id === eiID)) {
      enqueueSnackbar('You have already registered that ID', {
        variant: 'error',
      });
      return;
    }
    try {
      setAddingNewUser(true);
      const resp = await api.post('/users/', {id: eiID});
      const profile: Profile = {backup: resp.data};
      profileManager.setProfiles(profileManager.profiles.concat(profile));
      profileManager.setProfile(profile);
      setNewID('');
    } catch {
      // continue regardless of error
    } finally {
      setAddingNewUser(false);
    }
  };
  const deleteAccount = (id: string) => {
    profileManager.setProfiles(
      profileManager.profiles.filter(profile => profile.backup.id !== id)
    );
  };
  const toggleAccount = (id: string) => {
    if (profileManager.profile.backup.id === id) {
      profileManager.setProfile(profileManager.profiles[0]);
    } else {
      profileManager.setProfile(
        profileManager.profiles.find(profile => profile.backup.id === id)
      );
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Typography variant="h5" gutterBottom>
        Accounts
      </Typography>
      {profileManager.profiles
        .filter(profile => profile.backup.id !== '')
        .map(profile => (
          <React.Fragment key={profile.backup.id}>
            <Typography variant="h6" gutterBottom>
              {profile.backup.name || profile.backup.id}
            </Typography>
            <Grid container>
              <Grid item xs={3}>
                <Typography gutterBottom>ID</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography gutterBottom>{profile.backup.id}</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={3}>
                <Typography gutterBottom>PE</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography gutterBottom>{profile.backup.pe}</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={3}>
                <Typography gutterBottom>Contracts</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography gutterBottom>
                  {profile.backup.contract_archive.length}
                </Typography>
              </Grid>
            </Grid>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => toggleAccount(profile.backup.id)}
              >
                {profile.backup.id === profileManager.profile.backup.id
                  ? 'Deselect'
                  : 'Select'}
              </Button>
              <Button
                disabled={
                  profile.backup.id === profileManager.profile.backup.id
                }
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={() => deleteAccount(profile.backup.id)}
              >
                Delete
              </Button>
            </div>
          </React.Fragment>
        ))}
      <Typography variant="h6" gutterBottom>
        New account
      </Typography>
      <FormControl fullWidth>
        <Grid container spacing={3} justify="flex-start" alignItems="flex-end">
          <Grid item>
            <InputLabel htmlFor="my-input">Your Egg, Inc. ID</InputLabel>
            <Input
              fullWidth
              value={newID}
              onChange={event =>
                setNewID(
                  event.target.value.replace(/[^0-9]/g, '').substr(0, 16)
                )
              }
              id="standard-adornment-weight"
              startAdornment={
                <InputAdornment position="end">EI</InputAdornment>
              }
              aria-describedby="standard-weight-helper-text"
              inputProps={{'aria-label': 'weight'}}
            />
          </Grid>
          <Grid item>
            <Button
              disabled={newID.length < 16 || addingNewUser}
              onClick={onSubmitNewID}
              variant="contained"
              color="secondary"
              startIcon={<AddCircleIcon />}
            >
              Add
            </Button>
          </Grid>
        </Grid>
        <FormHelperText id="standard-weight-helper-text">
          Your ID is displayed in the settings screen.
        </FormHelperText>
      </FormControl>
      <Spacer size={50}></Spacer>
      <Markdown>{privacy}</Markdown>
    </div>
  );
}
