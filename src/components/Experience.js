import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ExperienceCard from './ExperienceCard';

// Image imports
import titanium from '../images/titanium_agency.png';
import imagine from '../images/imagine.png';
import silfab from '../images/silfab.png';

class Experience extends Component
{  
    render()
    {
        return(
            <React.Fragment>
                <div className="Experience">
                    <CssBaseline />
                    <Container maxWidth="sm">
                        <ExperienceCard title="Titanium Agency" image={titanium} content="test" />
                        <ExperienceCard title="Imagine Communications" image={imagine} content="test" />
                        <ExperienceCard title="Silfab Solar" image={silfab} content="test" />    
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default Experience;