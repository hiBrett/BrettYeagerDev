import React, { Component } from 'react';


export default class HeaderAvatar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={"HeaderAvatar"}>
            <a href={"https://www.linkedin.com/in/brett-yeager-developer/"} target="_blank" rel="noopener noreferrer">
                <img src={"./BrettYeager.png"} className={"AvatarImage"} />
            </a>
        </div>
    }
}