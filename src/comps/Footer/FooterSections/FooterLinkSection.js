import React, { Component } from 'react';
import {Button, Fab, IconButton, Tooltip} from "@material-ui/core";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default class FooterLinkSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  <div className={"FooterLinkSection"}>
            <a href="https://github.com/hiBrett?tab=repositories" target="_blank">
                <Fab className={"GithubButton"}>
                    <GitHubIcon className="LinkedInIcon" />
                </Fab>
            </a>

            <a href="mailto:3.14brett@gmail.com" target="_blank">
                <Fab color="primary" className={"EmailButton"}>
                    <MailOutlineIcon />
                </Fab>
            </a>

            <a href="https://www.linkedin.com/in/brett-yeager-developer/" target="_blank">
                <Fab className={"LinkedInButton"}>
                    <LinkedInIcon className="LinkedInIcon" />
                </Fab>
            </a>
        </div>
    }
}