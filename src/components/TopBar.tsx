import React from 'react';
import ButtonAppBar from './AppBar';

export default class TopBar extends React.Component {
    public constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <ButtonAppBar />
        )
    }
}

