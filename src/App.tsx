import React, {useState, StrictMode, useMemo} from 'react';
import createPersistedState from 'use-persisted-state';
import {SnackbarProvider} from 'notistack';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ThemeProvider, makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppContext, {
  Profile,
  defaultProfile,
  ProfileManager,
  AppContextValue,
} from './AppContext';
import {getLightTheme, getDarkTheme} from './themes';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import Settings from './pages/Settings';
import Home from './pages/Home';
import UpdateLog from './pages/UpdateLog';
import Dashboard from './pages/Dashboard';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const useThemeState = createPersistedState('theme');
const useProfileState = createPersistedState('profile');
const useProfilesState = createPersistedState('profiles');

function AppRoutes(props: {profileManager: ProfileManager}) {
  return (
    <Switch>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/settings">
        <Settings profileManager={props.profileManager} />
      </Route>
      <Route path="/update_log">
        <UpdateLog />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

function App() {
  const classes = useStyles();
  const [darkThemeEnabled, setDarkThemeEnabled] = useThemeState(false);
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [profile, setProfile] = useProfileState<Profile>(defaultProfile);
  const [profiles, setProfiles] = useProfilesState<Profile[]>([defaultProfile]);
  const profileManager: ProfileManager = {
    profile,
    setProfile,
    profiles,
    setProfiles,
  };
  const context = useMemo(() => new AppContextValue(profile), [profile]);

  return (
    <div className={classes.root}>
      <StrictMode>
        <ThemeProvider
          theme={darkThemeEnabled ? getDarkTheme() : getLightTheme()}
        >
          <SnackbarProvider maxSnack={3}>
            <BrowserRouter>
              <CssBaseline />
              <AppContext.Provider value={context}>
                <Navbar
                  profileManager={profileManager}
                  darkThemeEnabled={darkThemeEnabled}
                  setDarkThemeEnabled={setDarkThemeEnabled}
                  setSidebarOpened={setSidebarOpened}
                />
                <Sidebar
                  sidebarOpened={sidebarOpened}
                  setSidebarOpened={setSidebarOpened}
                />
                <Container
                  component="main"
                  maxWidth="md"
                  className={classes.main}
                >
                  <AppRoutes profileManager={profileManager} />
                </Container>
                <Footer />
              </AppContext.Provider>
            </BrowserRouter>
          </SnackbarProvider>
        </ThemeProvider>
      </StrictMode>
    </div>
  );
}

export default App;
