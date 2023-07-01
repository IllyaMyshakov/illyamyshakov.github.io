import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ImageCircle from './ImageCircle';
import { IconName } from '@fortawesome/fontawesome-svg-core';

// Font Awesome icon names
const faFileName: IconName = 'file';
const faEnvelopeName: IconName = 'envelope';
const faLinkedInName: IconName = 'linkedin-in';
const faGithubName: IconName = 'github';
// Font Awesome icons
const faFile: IconName = faFileName;
const faEnvelope: IconName = faEnvelopeName;
const faLinkedIn: IconName = faLinkedInName;
const faGithub: IconName = faGithubName;

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
                                icon={faFile}
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
                                icon={faLinkedIn}
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
