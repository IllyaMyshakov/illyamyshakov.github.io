import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Image imports
import illya_myshakov from '../images/illya_myshakov.png';


const style: object = {
    img: {
        width: '30%',
        height: '30%',
        display: 'block',
        'margin-left': 'auto',
        'margin-right': 'auto'
    }
};


export default class About extends React.Component {

    public constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="About" style={style}>
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
