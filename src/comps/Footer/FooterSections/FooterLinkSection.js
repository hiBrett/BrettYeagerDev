import React, { Component } from 'react';
import {Button, Fab, IconButton, Tooltip} from "@material-ui/core";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default class FooterLinkSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  <div className={"FooterLinkSection"}>
            <Tooltip title="Email" aria-label="Email">
                <a href="mailto:3.14brett@gmail.com" target="_blank">
                    <Fab color="primary" className={"EmailButton"}>
                        <MailOutlineIcon />
                    </Fab>
                </a>
            </Tooltip>

            <Tooltip title="LinkedIn" aria-label="LinkedIn">
                <a href="https://www.linkedin.com/in/brett-yeager-developer/" target="_blank">
                    <Fab className={"LinkedInButton"}>
                        <LinkedInIcon className="LinkedInIcon" />
                    </Fab>
                </a>
            </Tooltip>
        </div>
    }
}