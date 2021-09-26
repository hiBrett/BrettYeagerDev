import React, { Component } from 'react';
import {Paper} from "@material-ui/core";
import FooterAvatarSection from "./FooterSections/FooterAvatarSection";
import FooterMessage from "./FooterSections/FooterMessage";
import FooterLinkSection from "./FooterSections/FooterLinkSection";


export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Paper elevation={3} className={"Footer"}>
            <FooterAvatarSection/>
            <FooterMessage/>
            <FooterLinkSection/>
        </Paper>
    }
}