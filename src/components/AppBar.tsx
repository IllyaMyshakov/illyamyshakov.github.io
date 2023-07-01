import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const style: object = {
  root: {
    flexGrow: 1,
    backgroundColor: "#424242"
  },
  title: {
    flexGrow: 1,
  },
  options: {
    display: 'inline-block'
  }
};

export default class ButtonAppBar extends React.Component {
  public constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className={'AppBar'} style={style}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Grid
              justify="space-between"
              container
              spacing={4}
            >
              <Grid item>
                <Typography variant="h6">
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
                <Typography variant="h6">
                  About
                </Typography>
                <Typography variant="h6">
                  Experience
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
