import React, { Component } from 'react';


export default class PortfolioItemsHolder extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={"PortfolioItemsHolder"}>
            {this.props.children}
        </div>
    }
}