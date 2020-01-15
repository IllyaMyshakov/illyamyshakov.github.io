import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#424242"
  },
  title: {
    flexGrow: 1,
  },
  options: {
    marginLeft: theme.spacing(2),
    display: 'inline-block'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Grid
            justify="space-between"
            container 
            spacing={4}
          >
            <Grid item>
              <Typography variant="h6" className={classes.title}>
                <a
                    className="App-link"
                    href="https://illyamyshakov.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Illya Myshakov
                </a>
              </Typography>    
            </Grid>
            <Grid item>
              <Typography variant="h6" className={classes.options}>
                About
              </Typography>
              <Typography variant="h6" className={classes.options}>
                Experience
              </Typography>    
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}