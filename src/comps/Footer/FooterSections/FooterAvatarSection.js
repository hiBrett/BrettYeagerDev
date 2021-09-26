import React, { Component } from 'react';
import {Paper} from "@material-ui/core";


export default class FooterAvatarSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={"FooterAvatarSection"}>
            <div className={"FooterAvatarImageHolder"}>
                <a href={"https://www.linkedin.com/in/brett-yeager-developer/"} target="_blank" rel="noopener noreferrer">
                <img src={"./BrettYeager.png"} className={"AvatarImage"} />
            </a>
            </div>
            <div className={"FooterAvatarTextHolder"}>
                <div className={"FooterAvatarTextPrimary"}>Brett Yeager</div>
                <div className={"FooterAvatarTextSecondary"}>Software Developer</div>
            </div>
        </div>
    }
}