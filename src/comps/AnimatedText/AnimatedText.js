import React, { Component } from 'react';
import { Button, Typography, Container, Paper } from '@material-ui/core';
import Visibility from 'visibilityjs'

export default class AnimatedText extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.animationSpeed = props.animationSpeed || 30;
        this.state.isDone = false;
        this.state.textDisplayed = "";
        this.state.position = 0;
        this.state.fullText = props.text;
        if(this.props.quote){
            this.state.fullText = "\"" + this.props.quote.text + "\"";
        }


        this.span = React.createRef();
        this.tryToStartTextAnimation = this.tryToStartTextAnimation.bind(this);
    }


    componentDidMount() {
        let self = this;
        let started = false;

        Visibility.onVisible(function () {
            self.tryToStartTextAnimation();
        });

        window.addEventListener('scroll', this.tryToStartTextAnimation);
    }

    tryToStartTextAnimation() {

        if (isElementInViewport(this.span.current) && !this.state.started) {
            this.textAnimation(this);
            this.state.started = true;

            this.setState(this.state);
        }


        function isElementInViewport(el) {
            //Taken from https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
            if(el === undefined || el === null){
                return false;
            }
            var rect = el.getBoundingClientRect();

            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
                rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
            );
        }
    }


    componentWillUnmount() {
        window.removeEventListener('scroll', this.tryToStartTextAnimation);
    }

    textAnimation(self) {
        self.state.position += 1;

        if(self.state.fullText[self.state.position] === "<"){
            self.state.position = self.state.fullText.indexOf(">", self.state.position);
        }

        self.state.textDisplayed = self.state.fullText.substring(0, self.state.position);

        if(self.state.textDisplayed === self.state.fullText){
            self.state.isDone = true;
        }
        if(!self.state.isDone){
            setTimeout(self.textAnimation, self.state.animationSpeed, self);
        }
        self.setState(self.state);
    }

    render() {
        if(this.props.isQuote) {
            return <div className={"QuoteText"}>
                <span className={"AnimatedText italic"} ref={(this.span)}>{this.state.textDisplayed}</span>
                {this.state.isDone && <div className={"quoteName"}>{"- " + this.props.quote.name}</div>}
            </div>;
        }else{
            return <span className={"AnimatedText"} ref={(this.span)}>{this.state.textDisplayed}</span>;
        }
    }
}