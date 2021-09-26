import React, { Component } from 'react';
import AnimatedText from "../../AnimatedText/AnimatedText.js";


export default class HeaderText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={"HeaderText"}>
            <AnimatedText animationSpeed={10} text={this.props.text}/>
        </div>
    }
}