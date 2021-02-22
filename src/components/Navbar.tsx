import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';
import { Link as RouterLink  } from 'react-router-dom';

import Brightness4Icon from '@material-ui/icons/Brightness4';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import BuildIcon from '@material-ui/icons/Build';
import { ProfileManager } from '../AppContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 170,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'inline-flex',
      },
    },
  }),
);

export interface Props {
  darkThemeEnabled: boolean,
  setDarkThemeEnabled: (darkThemeEnabled: boolean) => void,
  setSidebarOpened: (sidebarOpened: boolean) => void,
  profileManager: ProfileManager,
}

export default function Navbar(props: Props) {
  const classes = useStyles();

  const switchProfile = (id: string) => {
    for (let profile of props.profileManager.profiles) {
      if (profile.backup.id !== id) continue;
      props.profileManager.setProfile(profile);
      break;
    }
  };

  return (<AppBar position="static">
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton}
        color="inherit" aria-label="menu"
        onClick={() => props.setSidebarOpened(true)}>
        <MenuIcon />
      </IconButton>
      <div className={classes.title} />
      <FormControl className={classes.formControl}>
        <Select
          displayEmpty
          value={props.profileManager.profile.backup.id}
          inputProps={{ 'aria-label': 'Without label' }}
          onChange={event => switchProfile(event.target.value as string)}
        >
          {props.profileManager.profiles.map(profile => 
            <MenuItem key={profile.backup.id} value={profile.backup.id}>{profile.backup.name}</MenuItem>
          )}
        </Select>
      </FormControl>
      <Tooltip title="Settings">
        <IconButton component={RouterLink} to="/settings"
          color="inherit" aria-label="settings">
          <BuildIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Dark Theme">
        <IconButton color="inherit" aria-label="toggle dark theme" onClick={() => props.setDarkThemeEnabled(!props.darkThemeEnabled)}>
          {props.darkThemeEnabled ? <Brightness4Icon /> : <BrightnessHighIcon />}
        </IconButton>
      </Tooltip>
    </Toolbar>
  </AppBar>);
}
