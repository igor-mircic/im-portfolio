import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const baseTheme = createTheme();

const customTheme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h5: { color: grey[900] },
    body1: {
      fontSize: 18,
      color: grey[800],
    },
  },
  palette: {
    background: {
      default: grey[200],
      paper: grey[50],
    },
  },
  components: {
    MuiList: {
      defaultProps: { disablePadding: true },
    },
    MuiListItem: {
      defaultProps: {
        disablePadding: true,
        sx: { color: grey[900] },
      },
    },
    MuiListItemIcon: {
      defaultProps: {
        sx: { minWidth: 0, paddingRight: baseTheme.spacing(1) },
      },
    },
  },
});

export default customTheme;
