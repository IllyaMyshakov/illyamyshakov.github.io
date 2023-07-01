import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ImageCircle from './ImageCircle';

// Import Font Awesome icons
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const style: object = {
    '.sidebar': {
        width: '8vw',
        overflow: 'auto',
        'font-size': '100px',
        'text-align': 'center',
        position: 'fixed',
        top: '17vh',
        right: '1vw',
        'overflow-x': 'hidden',
    },
    '@media screen and (max-height: 450px)': {
        '.sidenav': { 'padding-top': '15px' }
    },
    position: 'relative',
    'zIndex': '1'
};

const resume: string = "/docs/Illya_Myshakov.pdf";
const mailTo: string = "mailto:imyshako@edu.uwaterloo.ca";
const linkedin: string = "https://www.linkedin.com/in/illyamyshakov/";
const github: string = "https://github.com/IllyaMyshakov/";

// Alternative text descriptors
const resumeAlt: string = "Resume";
const mailAlt: string = "Mail";
const linkedinAlt: string = "LinkedIn";
const githubAlt: string = "GitHub";
export default class SideBar extends React.Component {
    public constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className={"SideBar"} style={style}>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Grid>
                        <Grid item>
                            <ImageCircle
                                link={resume}
                                icon={faFileDownload}
                                alt={resumeAlt} />
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item>
                            <ImageCircle
                                link={mailTo}
                                icon={faEnvelope}
                                alt={mailAlt} />
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item>
                            <ImageCircle link={linkedin}
                                icon={faLinkedin}
                                alt={linkedinAlt} />
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item>
                            <ImageCircle
                                link={github}
                                icon={faGithub}
                                alt={githubAlt} />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}
