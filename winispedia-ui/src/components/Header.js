import React, { Component } from 'react';
import { TeamLogo } from '../subcomponents/header';


export default class Header extends Component {
 
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

