import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ImageCircle from './ImageCircle';
// Import CSS
import styles from './Sidebar.css'
// Import Font Awesome icons
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Sidebar extends Component
{
    render()
    {
        return(
            <div className={styles.sidebar} style={{ position: 'relative', zIndex: '1' }}>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Grid>
                        <Grid item>
                            <ImageCircle link= "/docs/Illya_Myshakov.pdf" icon={faFileDownload} alt="Resume"/>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item>
                            <ImageCircle link="mailto:imyshako@edu.uwaterloo.ca" icon={faEnvelope} alt="Mail"/>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item>
                            <ImageCircle link="https://www.linkedin.com/in/illyamyshakov/" icon={faLinkedin} alt="LinkedIn"/>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item>
                            <ImageCircle link="https://github.com/IllyaMyshakov/" icon={faGithub} alt="GitHub"/>  
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default Sidebar;
