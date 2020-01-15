import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

class Sidebar extends Component
{
    render()
    {
        return(
            <div className="Sidebar">
                <CssBaseline />
                <Container maxWidth="sm">
                    <Grid>
                        <Grid item>
                            
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default Sidebar;
