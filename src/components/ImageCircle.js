import React from 'react';
import styles from './ImageCircle.css';

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ImageCircle extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            link: props.link,
            icon: props.icon,
            alt: props.alt
        };
    }

    render()
    {
        return(
            <div className={styles.imageCircle}>
                <a href={this.state.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={this.state.icon} size="1x" alt={this.state.alt} inverse />
                </a>
            </div>
        )
    }
}

export default ImageCircle;