import React, { Component } from 'react';
import { TeamLogo } from '../subcomponents/header';

export class Header extends Component {     

    static defaultProps = {
        slug: "georgia-tech",
        schoolName: "Georgia Tech",
    }

    render() {
        return (
            <div>
                <TeamLogo/>
            </div>
        )
    }

}

