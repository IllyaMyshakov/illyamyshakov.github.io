import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// CSS import
import './ExperienceCard.css';

class ExperienceCard extends Component
{  
    constructor(props)
    {
        super(props);
        this.state = 
        {
            title: props.title,
            image: props.image,
            content: props.content
        };
    }

    render()
    {
        return(
            <div className="ExperienceCard">
                <CssBaseline />
                <Container maxWidth="sm">
                    <Card>
                        <h1>{this.state.title}</h1>
                        <img src={this.state.image} alt={this.state.title} />
                        <p>{this.state.content}</p>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default ExperienceCard;
