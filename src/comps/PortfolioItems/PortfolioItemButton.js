import React, { Component } from 'react';
import {Button} from "@material-ui/core";

export default class PortfolioItemButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <span>
            <Button variant="contained" color={"primary"} className={"PortfolioItemButton"} target="_blank"
                            href={this.props.info.href}>{this.props.info.text}</Button>
            {
                this.props.info.text !== undefined &&
                <span className={"ButtonInfoText"}>{this.props.info.infoText}</span>
            }
        </span>
    }
}