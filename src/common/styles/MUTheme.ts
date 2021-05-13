import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Noto Sans KR',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    body1: {
      fontSize: '12.8px',
      fontWeight: 'normal',
      lineHeight: '1.75',
    },
    body2: {
      fontSize: '14px',
    },
    subtitle1: {
      fontSize: 12,
    },
    button: {
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#ffffff',
    },
    h2: {
      fontSize: '20px',
      fontWeight: 700,
      color: '#000000',
    },
  },
  palette: {
    primary: {
      main: '#525252',
    },
    secondary: {
      main: '#ff8c09',
    },
  },
  overrides: {
    MuiFab: {
      root: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
      primary: {
        border: '1px solid #525252',
        '&:hover': {
          color: '#525252',
          backgroundColor: '#FFFFFF',
          border: '1px solid #525252',
        },
      },
    },
    MuiButton: {
      root: {
        '&$disabled': {
          color: 'rgba(0, 0, 0, 0.87)',
        },
      },
      contained: {
        lineHeight: 0,
        height: '30px',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
        },
      },
      containedPrimary: {
        border: '1px solid #525252',
        '&:hover': {
          color: '#525252',
          backgroundColor: '#FFFFFF',
          border: '1px solid #525252',
        },
      },
      containedSecondary: {
        border: '1px solid #FF8C09',
        color: '#FFFFFF',
        '&:hover': {
          color: '#FF8C09',
          backgroundColor: '#FFFFFF',
          border: '1px solid #FF8C09',
        },
      },
    },
    MuiFormControlLabel: {
      label: {
        textTransform: 'capitalize',
        fontSize: '14px',
        lineHeight: 1.78,
        color: '#2e3034',
      },
    },
    MuiChip: {
      label: {
        fontSize: '14px',
        textTransform: 'lowercase',
        overflow: 'none',
      },
    },
    MuiMenuItem: {
      root: {
        fontSize: '14px',
        fontWeight: 700,
        color: '#565a5c',
      },
    },
    MuiListItem: {
      button: {
        '&:hover': {
          color: '#525252',
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        overflow: 'hidden',
        backgroundColor: '#ffff',
        '& $notchedOutline': {
          borderColor: '#aaaaaa',
        },
      },
      input: {
        color: '#000',
        fontSize: '12px',
      },
    },
  },
});
export default theme;
