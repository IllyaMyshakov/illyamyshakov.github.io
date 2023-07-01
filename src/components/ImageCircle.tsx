import React from 'react';

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const style: object = {
    '.imageCircle': {
        'font-size': '30px',
        'text-align': 'center',
        'margin-right': '10px',
        width: '2em',
        height: '2em',
        'border-radius': '100%',
        display: 'inline-block',
        padding: '1.5rem',
    },
    '.imageCircle:hover': {
        background: 'grey'
    }
};

interface ImageCircleProps {
    link: string;
    icon: IconProp;
    alt: string;
}

export default class ImageCircle extends React.Component<ImageCircleProps, ImageCircleProps> {
    public constructor(props: ImageCircleProps) {
        super(props);
        this.state =
        {
            link: props.link,
            icon: props.icon,
            alt: props.alt
        };
    }

    public render(): JSX.Element {
        const { link, icon } = this.state;
        return (
            <div className={"imageCircle"} style={style}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={icon} size="1x" inverse />
                </a>
            </div>
        )
    }
}
