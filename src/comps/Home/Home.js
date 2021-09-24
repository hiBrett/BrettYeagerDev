import React, { Component } from 'react';
import { ButtonGroup, Button, Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import Messages from '../Messages/Messages';
import { makeStyles } from '@material-ui/core/styles';
import PortfolioItems from '../PortfolioItems/PortfolioItems';
import PortfolioItem from '../PortfolioItems/PortfolioItem';
import ContactMe from '../ContactMe/ContactMe';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Fade from '../Fade/Fade';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div className="vh-50">
                <Messages vh50 elevation={0} text={["My name is Brett Yeager.  ", "Welcome to my portfolio!"]}></Messages>
            </div>

            <PortfolioItems>
                <PortfolioItem title="Online Team-Building Prototype" subheader="With many people working from home, one team-building company wanted to find out . . ." imageText="Can online team-building exercises be beneficial?" image="/UWProjectImage.jpg" link1="https://github.com/hiBrett/UWProposalProject" link1text="Source code" >

                    <List component="nav">
                        <ListItem><ListItemText><Typography variant="h4">With many people working from home, WhenPeoplePlay.com wanted to prototype online team-building exercises.</Typography></ListItemText></ListItem>
                    </List>


                    <Divider className="Divider" />
                    <List component="nav" className="mt-15">
                        <ListItem><ListItemText><Typography paragraph className="mb-neg-5"><span className="Bold">Impact:</span></Typography></ListItemText></ListItem>
                        <ListItem><ListItemText>The client was very happy.</ListItemText></ListItem>
                        <ListItem><ListItemText>The client presented the prototype to the company successfully.</ListItemText></ListItem>
                        <ListItem><ListItemText>I learned ReactJS while working on this project.</ListItemText></ListItem>
                        <ListItem><ListItemText><Messages small fast quote quoteAuthor="Barry Thompson" text={["Brett saw different and more efficient ways to make the project better. [Pause] Left suggestions for improvements. [Pause] Was friendly and very professional. [Pause] Left some creativity in his hands and he excelled more than I imagined. [Pause] Would highly recommend him."]}></Messages></ListItemText></ListItem>
                    </List>

                    <Divider className="Divider" />
                    <List component="nav">
                        <ListItem><ListItemText><Typography paragraph className="mb-neg-5"><span className="Bold">Task:</span></Typography></ListItemText></ListItem>
                        <ListItem><ListItemText>Make a prototype website with two team-building exercises.</ListItemText></ListItem>
                        <ListItem><ListItemText>Two games; Design provided by the client.</ListItemText></ListItem>
                        <ListItem><ListItemText>Multiplayer: Players across the country can play together.</ListItemText></ListItem>
                        <ListItem><ListItemText>Quick Delivery: Four week deadline.</ListItemText></ListItem>
                    </List>

                    <Divider className="Divider" />
                    <List component="nav">
                        <ListItem><ListItemText><Typography paragraph className="mb-neg-5"><span className="Bold">Solution:</span></Typography></ListItemText></ListItem>
                        <ListItem><ListItemText>Built with Node.JS and ReactJS.</ListItemText></ListItem>
                        <ListItem><ListItemText>Playable with any number of players.</ListItemText></ListItem>
                    </List>

                    <List component="nav">
                        <ListItem><ListItemText><Typography paragraph className="mb-neg-5"><span className="Bold">Solution Details:</span></Typography></ListItemText></ListItem>
                        <ListItem><ListItemText>Game state lives on the sever and is sent to the players.</ListItemText></ListItem>
                        <ListItem><ListItemText>Requests to change the game state are sent to the server.</ListItemText></ListItem>
                        <ListItem><ListItemText>The server then acts according to the rules of the game.</ListItemText></ListItem>
                    </List>

                    <Divider className="Divider" />
                    <List component="nav" className="mt-15">
                        <ListItem><ListItemText><Typography paragraph className="mb-neg-5"><span className="Bold">Delivery:</span></Typography></ListItemText></ListItem>
                        <ListItem><ListItemText>The client accepted my work two weeks before the deadline.</ListItemText></ListItem>
                        <ListItem><ListItemText>I helped the client get the website running in AWS.</ListItemText></ListItem>
                    </List>

                </PortfolioItem>

                <PortfolioItem title="Sarah Smith Wa-09 Congressional Campaign" subheader="A political campaign with a slow and messy website . . ." imageText="And how I fixed it." image="/SarahSmith.png" link1="https://314brett.wixsite.com/website-6" link1text="Before" link2="http://sarah-smith-website-resume-brett-yeager.s3-website-us-west-2.amazonaws.com/" link2text="After">

                    <List component="nav">
                        <ListItem><ListItemText><Typography variant="h4">A fast paced political campaign with a fast new website.</Typography></ListItemText></ListItem>
                    </List>


                    <Divider className="Divider" />
                    <List component="nav" className="mt-15">
                        <ListItem><ListItemText><Typography paragraph className="mb-neg-5"><span className="Bold">Impact:</span></Typography></ListItemText></ListItem>
                        <ListItem><ListItemText>The candidate was better able to communicate her message.</ListItemText></ListItem>
                        <ListItem><ListItemText>First search result on Google for "Sarah Smith" when the old website wasn't.</ListItemText></ListItem>
                        <ListItem><ListItemText>36,000 visitors with an average session duration of 1:16.</ListItemText></ListItem>
                        <ListItem><ListItemText>Achieved a significantly faster average load time of 3 seconds.</ListItemText></ListItem>
                    </List>

                    <Divider className="Divider" />
                    <List component="nav">
                        <ListItem><ListItemText><Typography paragraph className="mb-neg-5"><span className="Bold">Task:</span></Typography></ListItemText></ListItem>
                        <ListItem><ListItemText>Create a new website to replace the existing Wix website.</ListItemText></ListItem>
                        <ListItem><ListItemText>The new website should load fast.</ListItemText></ListItem>
                        <ListItem><ListItemText>The new website should better communicate the campaign's message.</ListItemText></ListItem>
                    </List>

                    <Divider className="Divider" />
                    <List component="nav">
                        <ListItem><ListItemText><Typography paragraph className="mb-neg-5"><span className="Bold">Solution:</span></Typography></ListItemText></ListItem>
                        <ListItem><ListItemText>Static website built with Broccoli.js and served cached through an npm for optimal speed.</ListItemText></ListItem>
                        <ListItem><ListItemText>Used AWS Lambda functions on the backend for showing upcoming campaign events.</ListItemText></ListItem>
                    </List>

                </PortfolioItem>

                <PortfolioItem title="Monodot" subheader="A game with an overwhelming response . . ." imageText="That pushed me into Software Development." image="/Monodot.png" link1="https://play.google.com/store/apps/details?id=hi.brett.monodot" link1text="Google Play">

                    <List component="nav">
                        <ListItem><ListItemText><Typography variant="h4">Undecided between Chemical Engineering and Software Development, the overwhelming response from users pushed me into Software Development.</Typography></ListItemText></ListItem>
                    </List>


                    <Divider className="Divider" />
                    <List component="nav" className="mt-15">
                        <ListItem><ListItemText><Typography paragraph className="mb-neg-5"><span className="Bold">Impact:</span></Typography></ListItemText></ListItem>
                        <ListItem><ListItemText>80,000 players.</ListItemText></ListItem>
                        <ListItem><ListItemText>4.6 stars.</ListItemText></ListItem>
                        <ListItem><ListItemText>Reading all of the positive reviews made me feel the impact software development can have. This lead me to pursuing software development as a career.</ListItemText></ListItem>
                        <ListItem><ListItemText><Messages small fast quote quoteAuthor="Walter Bonetti User Review" text={["It's a new and very interesting way to train the brain with numbers and operations. [Pause] The bond system inspired by chemistry makes everything very enjoyable."]}></Messages></ListItemText></ListItem>
                    </List>


                </PortfolioItem>

                <PortfolioItem title="BrettYeagerDev.com" subheader="See this website's source code. Built with ReactJS." link1="https://github.com/hiBrett/BrettYeagerDev" link1text="Source Code" noContent>
                </PortfolioItem>

                <ContactMe shadow={true} text={"Thanks for stopping by. [Pause] [Skip-2]😁 "} />

            </PortfolioItems>
        </div>
    }
}
