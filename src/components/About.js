import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// CSS imports
import "./About.css";

// Image imports
import illya_myshakov from '../images/illya_myshakov.png';

// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         padding: theme.spacing(2),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     }
// }));

class About extends Component
{
    
    render()
    {
        return(
            <div className="About">
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Paper>About Me</Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <img src={illya_myshakov} alt="Illya Myshakov"></img>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper>
                            <p>Hi! <br></br>
                            I'm currently in third year for Computer Engineering at the University of Waterloo. 
                            I'm currently enjoying my studies and searching for my fourth co-op opportunity. You can preview this webpage to find more information 
                            about my past employment experience. 
                            You can also interact with the sidebar for my resume, contact me via email, or visit my Linkedin or GitHub webpages.
                            </p>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default About;