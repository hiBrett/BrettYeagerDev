import React, { Component } from 'react';
import {Button, Paper, Typography} from "@material-ui/core";
import AnimatedText from "../AnimatedText/AnimatedText";
import PortfolioItemButton from "./PortfolioItemButton";


export default class PortfolioItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Paper elevation={3} className={"PortfolioItem"}>
                <Typography align={"center"} variant={"h5"}>{this.props.title}</Typography>
                <Typography align={"center"} variant={"subtitle1"} className={"PortfolioItemSubtitle"}>{this.props.subtitle1}</Typography>
                {this.props.imgData !== undefined &&
                    <img src={this.props.imgData.src} alt={this.props.imgData.alt} width={"100%"}/>
                }
                {this.props.subtitle2 !== undefined &&
                    <Typography align={"center"} variant={"subtitle1"} className={"PortfolioItemSubtitle"}>{this.props.subtitle2}</Typography>
                }
                {this.props.link1 !== undefined &&
                <PortfolioItemButton info={this.props.link1} />
                }
                {this.props.link2 !== undefined &&
                <PortfolioItemButton info={this.props.link2} />
                }
                {this.props.mainText !== undefined && <div>
                <Typography variant={"h4"} className={"PortfolioItemMainText"}>{this.props.mainText}</Typography>
                </div>
                }
                {this.props.impacts &&
                    <div>
                        <hr className={"hr"}/>
                        <Typography className={"bold"}>Impact:</Typography>
                        <ul className={"PortfolioItemList"}>{
                            this.props.impacts.map((text) => {
                                return <li className={"PortfolioItemListItem"}>{text}</li>
                            })
                        }</ul>
                    </div>
                }
                {
                    this.props.quote &&
                        <div>
                            <Paper className={"Quote"} elevation={3}><AnimatedText animationSpeed={10} quote={this.props.quote} isQuote={true} /></Paper>
                        </div>
                }
                {this.props.tasks &&
                <div>
                    <hr className={"hr"}/>
                    <Typography className={"bold"}>Task:</Typography>
                    <ul className={"PortfolioItemList"}>{
                        this.props.tasks.map((text) => {
                            return <li className={"PortfolioItemListItem"}>{text}</li>
                        })
                    }</ul>
                </div>
                }
                {this.props.solution &&
                <div>
                    <hr className={"hr"}/>
                    <Typography className={"bold"}>Solution:</Typography>
                    <ul className={"PortfolioItemList"}>{
                        this.props.solution.map((text) => {
                            return <li className={"PortfolioItemListItem"}>{text}</li>
                        })
                    }</ul>
                </div>
                }
                {this.props.solutionDetails &&
                <div>
                    <Typography className={"bold mt-50"}>Solution Details:</Typography>
                    <ul className={"PortfolioItemList"}>{
                        this.props.solutionDetails.map((text) => {
                            return <li className={"PortfolioItemListItem"}>{text}</li>
                        })
                    }</ul>
                </div>
                }
                {this.props.delivery &&
                <div>
                    <hr className={"hr"}/>
                    <Typography className={"bold"}>Delivery:</Typography>
                    <ul className={"PortfolioItemList"}>{
                        this.props.delivery.map((text) => {
                            return <li className={"PortfolioItemListItem"}>{text}</li>
                        })
                    }</ul>
                </div>
                }
                {this.props.link3 !== undefined &&
                <PortfolioItemButton info={this.props.link3} />
                }
            </Paper>
    }
}