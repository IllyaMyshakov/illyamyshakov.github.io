import React from 'react';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const style: object = {
    '.img': {
        'max-width': '97%',
        'max-height': '97 %'
    }
};

interface ExperienceCardProps {
    title: string;
    image: string;
    content: string;
}

export default class ExperienceCard extends React.Component<ExperienceCardProps, ExperienceCardProps> {
    public constructor(props: ExperienceCardProps) {
        super(props);
        this.state =
        {
            title: props.title,
            image: props.image,
            content: props.content
        };
    }

    public render(): JSX.Element {
        const { title, image, content } = this.state;
        return (
            <div className="ExperienceCard" style={style}>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Card>
                        <h1>{title}</h1>
                        <img src={image} alt={title} />
                        <p>{content}</p>
                    </Card>
                </Container>
            </div>
        )
    }
}
