import {createMuiTheme} from '@material-ui/core/styles';

export const getLightTheme = () =>
  createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        light: '#b2fff7',
        main: '#80ccc4',
        dark: '#4f9b94',
      },
      secondary: {
        light: '#a78172',
        main: '#775447',
        dark: '#4a2b20',
      },
    },
  });
export const getDarkTheme = () =>
  createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        light: '#8e8e8e',
        main: '#616161',
        dark: '#373737',
      },
      secondary: {
        light: '#a4a4a4',
        main: '#757575',
        dark: '#494949',
      },
    },
  });
