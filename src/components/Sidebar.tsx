import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Link from '@material-ui/core/Link';

import BuildIcon from '@material-ui/icons/Build';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExploreIcon from '@material-ui/icons/Explore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  list: {
    width: 250,
  },
  title: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(0.5),
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing(3),
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
}));
export interface Props {
    sidebarOpened: boolean,
    setSidebarOpened: (sidebarOpened: boolean) => void,
}

export default function Sidebar(props: Props) {
  const classes = useStyles();

  const closeDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    props.setSidebarOpened(false)
  };

  return (
    <Drawer anchor="left" open={props.sidebarOpened} onClose={() => props.setSidebarOpened(false)}>
      <div
      className={classes.list}
      role="presentation"
      onClick={closeDrawer}
      onKeyDown={closeDrawer}
      >
        <div className={classes.toolbar}>
          <Link className={classes.title} href="/" variant="h6" color="inherit">
            Egg, Inc. Laboratory
          </Link>
          {process.env.REACT_APP_VERSION ? `v${process.env.REACT_APP_VERSION}`: null}
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Top" />
          </ListItem>
          {/*
          <ListItem button disabled>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          */}
        </List>
        <Divider />
        <List subheader={<ListSubheader>Experimental Features</ListSubheader>}>
          <ListItem button>
            <ListItemIcon><ExploreIcon /></ListItemIcon>
            <ListItemText primary="Mission Data Collection" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><BuildIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}
