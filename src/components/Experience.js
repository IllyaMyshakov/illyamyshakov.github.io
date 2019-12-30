import React, { Component } from 'react';
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
            <div className="Experience">
                <ExperienceCard title="Titanium Agency" image={titanium} content="test" />
                <ExperienceCard title="Imagine Communications" image={imagine} content="test" />
                <ExperienceCard title="Silfab Solar" image={silfab} content="test" />
            </div>
        )
    }
}

export default Experience;