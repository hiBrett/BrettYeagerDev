import React, { Component } from 'react';

export default class Fade extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.showChildren = true;

        if (this.props.hidebeforefade) {
            this.state.showChildren = false;
        }

    }

    componentDidMount() {
        let self = this;

        let delay = 0;
        let fadeTime = 500;
        let fadeIn = !this.props.fadeout;

        if (this.props.delay != null) {
            delay = this.props.delay;
        }

        this.timeOut = setTimeout(function () {
            self.state.showFade = true;
            self.setState(self.state);

            if (self.props.hidebeforefade) {
                self.state.showChildren = true;
                self.setState(self.state);
            }
        }, delay);

        this.timeOut = setTimeout(function () {
            if (!fadeIn) {
                if (self.props.hideafterfade) {
                    self.state.showChildren = false;
                    self.setState(self.state);
                }
            }
        }, delay + fadeTime);
    }

    componentWillUnmount() {
        clearTimeout(this.timeOut);
    }

    render() {
        return <div className={this.state.showFade ? (this.props.fadeout ? "fade-out" : "fade-in")
            : (this.props.fadeout ? "beforeFadeOut" : "beforeFadeIn")}>
            {this.state.showChildren && this.props.children}
        </div>
    }
}