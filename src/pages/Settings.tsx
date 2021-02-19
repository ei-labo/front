import React, { useState } from 'react';
import Markdown from "../components/Markdown";
import privacy from "../md/privacy.md"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Backup, Profile, ProfileManager } from '../AppContext';
import { useAPI } from '../api';
import { useSnackbar } from 'notistack';

export interface Props {
  profileManager: ProfileManager;
}

export default function Settings({profileManager}: Props) {
  const [newID, setNewID] = useState('');
  const api = useAPI();
  const { enqueueSnackbar } = useSnackbar();
  const [addingNewUser, setAddingNewUser] = useState(false);

  const onSubmitNewID = async (_: React.MouseEvent<HTMLButtonElement>) => {
    const eiID = `EI${newID}`;
    if (profileManager.profiles.some(profile => profile.backup.id === eiID)) {
      enqueueSnackbar("You have already registered that ID", {
        variant: 'error',
      });
      return;
    }
    try {
      setAddingNewUser(true);
      const resp = await api.post<Backup>('/users/', {
        id: eiID
      });
      const profile: Profile = {
        backup: resp.data,
        public: false,
      };
      profileManager.setProfiles(profileManager.profiles.concat(profile));
      profileManager.setProfile(profile);
      setNewID('');
    } catch (_) { 
    } finally {
      setAddingNewUser(false);
    }
  };

  return (<div>
    <Typography variant="h4" gutterBottom> Settings </Typography>
    <Typography variant="h5" gutterBottom> Accounts </Typography>
    <FormControl fullWidth>
      <Grid container spacing={3} justify="flex-start" alignItems="flex-end">
        <Grid item>
            <InputLabel htmlFor="my-input">Your Egg, Inc. ID</InputLabel>
            <Input
              fullWidth
              value={newID}
              onChange={event => setNewID(event.target.value.replaceAll(/[^0-9]/g, "").substr(0, 16))}
              id="standard-adornment-weight"
              startAdornment={<InputAdornment position="end">EI</InputAdornment>}
              aria-describedby="standard-weight-helper-text"
              inputProps={{ 'aria-label': 'weight' }}
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
      <FormHelperText id="standard-weight-helper-text">Your ID is displayed in the settings screen.</FormHelperText>
    </FormControl>
    <Markdown>{privacy}</Markdown>
    </div>);
 }
