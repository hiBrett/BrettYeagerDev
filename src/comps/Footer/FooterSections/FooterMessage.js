import React, { Component } from 'react';
import AnimatedText from "../../AnimatedText/AnimatedText";


export default class FooterMessage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  <div className={"FooterMessage"}>
            <AnimatedText text={"Thanks for stopping by!"}/>
        </div>
    }
}