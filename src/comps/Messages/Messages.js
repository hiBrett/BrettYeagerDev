import React, { Component } from 'react';
import { Button, Typography, Container, Paper } from '@material-ui/core';
import Visibility from 'visibilityjs'

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.currentTextPosition = 0;
        this.state.currentStagePosition = 0;

        this.state.text = JSON.parse(JSON.stringify(props.text));

        console.log(this.props.text[0] + " this.state.text.length: " + this.state.text.length);


        if (this.props.quote) {
            this.state.text[0] = '"' + this.state.text[0];
            this.state.text[this.state.text.length - 1] += '"';
        }


        this.Typography = React.createRef();
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

        if (isElementInViewport(this.Typography.current) && !this.state.started) {
            this.textAnimation(this);
            this.state.started = true;

            this.setState(this.state);
        }


        function isElementInViewport(el) {
            //Taken from https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433

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
        let delay = 40;

        self.state.currentTextPosition += 1;

        let wordLength = self.state.text[self.state.currentStagePosition].length;

        if (self.state.currentTextPosition == wordLength + 1) {
            self.state.currentTextPosition = 0;
            self.state.currentStagePosition += 1;
        }


        if (NeedsToSkipForward()) {
            let skipForwardAmount = GetSkipForwardAmount();
            self.state.text[self.state.currentStagePosition] = RemoveFirst(self.state.text[self.state.currentStagePosition], "[Skip-" + skipForwardAmount + "]");

            self.state.currentTextPosition += skipForwardAmount;
        }

        self.setState(self.state);

        if (self.state.currentTextPosition == wordLength) {
            delay = 1300;
        }

        if (NeedsToPause()) {
            self.state.text[self.state.currentStagePosition] = RemoveFirst(self.state.text[self.state.currentStagePosition], "[Pause]");
            delay += 700;
        }

        if (self.props.fast) {
            delay *= 0.7;
        }
        if (self.props.faster) {
            delay *= 0.35;
        }
        if (self.props.fastest) {
            delay *= 0.2;
        }


        if (self.state.currentTextPosition < (wordLength) || self.state.currentStagePosition < (self.state.text.length - 1)) {
            setTimeout(self.textAnimation, delay, self);
        }

        function NeedsToPause() {
            return self.state.text[self.state.currentStagePosition].indexOf("[Pause]") == self.state.currentTextPosition;
        }
        function NeedsToSkipForward() {
            return self.state.text[self.state.currentStagePosition].indexOf("[Skip") == self.state.currentTextPosition;
        }
        function GetSkipForwardAmount() {
            for (let i = 0; i < 20; i++) {
                if (self.state.text[self.state.currentStagePosition].indexOf("[Skip-" + i + "]") == self.state.currentTextPosition) {
                    return i;
                }
            }
        }
        function RemoveFirst(string, term) {
            return string.slice(0, string.indexOf(term)) + string.slice(string.indexOf(term) + term.length);
        }
    }

    render() {
        let text = this.state.text[this.state.currentStagePosition].substring(0, this.state.currentTextPosition);
        let finished = text == this.state.text[this.state.currentStagePosition];
        let textClassName = "";

        let height = "400px";
        let fontSize = "4em";

        if (this.props.small) {
            height = "150px";
            fontSize = "1.3em";
        }

        if (this.props.quote) {
            textClassName = "italic";
        }

        if (this.props.medium) {
            height = "200px";
            fontSize = "3em";
        }

        if (this.props.vh50) {
            height = "50vh";
        }

        let elevation = 2;

        if (this.props.elevation != null) {
            elevation = this.props.elevation;
        }


        return <Container className={"align-center flex-centered"}><Paper elevation={elevation} className="p-35 flex"><Typography style={{ height, fontSize, paddingTop: "100px" }} variant="h2" Component="h2" ref={(this.Typography)}>
            <span className={textClassName}>{text}</span>
            <Typography className="">{(this.props.quote && finished) ? " - " + this.props.quoteAuthor:""}</Typography>
        </Typography></Paper></Container>
    }
}