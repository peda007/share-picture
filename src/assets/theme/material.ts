import { makeStyles, withStyles } from '@material-ui/core/styles';
import './theme.scss';
import { createMuiTheme } from '@material-ui/core';

const muiStyles = createMuiTheme({
  overrides: {
    MuiButton: {},
  },
});

export default muiStyles;
