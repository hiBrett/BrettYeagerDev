import React, { Component } from 'react';
import HeaderAvatar from "./HeaderAvatar/HeaderAvatar";
import HeaderText from "./HeaderText/HeaderText";


export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={"Header"}>
            <div className={"HeaderContent"}>
                <HeaderAvatar/>
                <HeaderText text={"My name is Brett Yeager. \nWelcome to my portfolio!"}/>
            </div>
        </div>
    }
}