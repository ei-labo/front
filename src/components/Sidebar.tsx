import React, {useMemo} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Link, {LinkProps} from '@material-ui/core/Link';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

import BuildIcon from '@material-ui/icons/Build';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import UnarchiveIcon from '@material-ui/icons/Unarchive';
import ListAltIcon from '@material-ui/icons/ListAlt';
import GitHubIcon from '@material-ui/icons/GitHub';

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
  })
);
export interface Props {
  sidebarOpened: boolean;
  setSidebarOpened: (sidebarOpened: boolean) => void;
}

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
  disabled?: boolean;
}

function ListItemLink(props: ListItemLinkProps) {
  const {icon, primary, to, disabled} = props;

  const renderLink = useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink} disabled={disabled}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

function ListItemExternalLink(props: ListItemLinkProps) {
  const {icon, primary, to, disabled} = props;

  return (
    <li>
      <ListItem
        button
        disabled={disabled}
        component={({children, ...props}) => (
          <Link href={to} color="textPrimary" {...(props as LinkProps)}>
            {children}
          </Link>
        )}
      >
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
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
    props.setSidebarOpened(false);
  };

  return (
    <Drawer
      anchor="left"
      open={props.sidebarOpened}
      onClose={() => props.setSidebarOpened(false)}
    >
      <div
        className={classes.list}
        role="presentation"
        onClick={closeDrawer}
        onKeyDown={closeDrawer}
      >
        <div className={classes.toolbar}>
          <Link
            component={RouterLink}
            to="/"
            className={classes.title}
            variant="h6"
            color="inherit"
          >
            Egg, Inc. Laboratory
          </Link>
          {process.env.REACT_APP_VERSION
            ? `v${process.env.REACT_APP_VERSION}`
            : null}
        </div>
        <Divider />
        <List>
          <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
          <ListItemLink
            to="/dashboard"
            primary="Dashboard"
            icon={<DashboardIcon />}
            disabled
          />
        </List>
        <Divider />
        <List subheader={<ListSubheader>Experimental Features</ListSubheader>}>
          <ListItemLink
            to="/conribute_data"
            primary="Data Contribution"
            icon={<UnarchiveIcon />}
          />
        </List>
        <Divider />
        <List>
          <ListItemLink
            to="/settings"
            primary="Settings"
            icon={<BuildIcon />}
          />
          <ListItemLink
            to="/update_log"
            primary="Update Log"
            icon={<ListAltIcon />}
          />
          <ListItemExternalLink
            to="https://github.com/ei-labo/front/issues"
            primary="Issue Report"
            icon={<GitHubIcon />}
          />
        </List>
      </div>
    </Drawer>
  );
}
