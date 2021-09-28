import React, { Component } from 'react';
import Header from "../Header/Header";
import PortfolioItemsHolder from "../PortfolioItems/PortfolioItemsHolder";
import PortfolioItem from "../PortfolioItems/PortfolioItem";
import Footer from "../Footer/Footer";


export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Header/>
            <PortfolioItemsHolder>
                <PortfolioItem
                    title={"Online Team-Building Prototype"}
                    subtitle1={"With many people working from home, one team-building company wanted to find out . . ."}
                    imgData={{"src":"./UWProjectImage.jpg", "alt":"Numerical game transformation"}}
                    subtitle2={"Can online team-building exercises be beneficial?"}
                    link1={{text: "Source Code", href: "https://github.com/hiBrett/UWProposalProject"}}
                    mainText={"With many people working from home, WhenPeoplePlay.com wanted to prototype online team-building exercises."}
                    impacts={["The client was very happy.", "The client presented the prototype to the company successfully.", "I learned ReactJS while working on this project."]}
                    quote={{name: "Barry Thompson", text: "Brett saw different and more efficient ways to make the project better.  Left suggestions for improvements.  Was friendly and very professional.  Left some creativity in his hands and he excelled more than I imagined.  Would highly recommend him."}}
                    tasks={["Make a prototype website with two team-building exercises.", "Two games; Design provided by the client.", "Multiplayer: Players across the country can play together.", "Quick Delivery: Four week deadline."]}
                    solution={["Built with Node.JS and React.JS.", "Playable with any number of players."]}
                    solutionDetails={["Game state lives on the sever and is sent to the players.", "Requests to change the game state are sent to the server.", "The server then acts according to the rules of the game."]}
                    delivery={["The client accepted my work two weeks before the deadline.", "I helped the client get the website running in AWS."]}
                />
                <PortfolioItem
                    title={"Sarah Smith Wa-09 Congressional Campaign"}
                    subtitle1={"A political campaign with a slow and messy website . . ."}
                    imgData={{"src":"./SarahSmith.png", "alt":"Sarah Smith Campaign Website Image"}}
                    subtitle2={"And how I fixed it."}
                    link1={{text: "Before", href: "https://314brett.wixsite.com/website-6"}}
                    link2={{text: "After", href: "http://sarah-smith-website-resume-brett-yeager.s3-website-us-west-2.amazonaws.com/"}}
                    mainText={"A fast paced political campaign with a fast new website."}
                    impacts={["The candidate was able to communicate her message better.", "First search result on Google for \"Sarah Smith\" when the old website wasn't.", "36,000 visitors with an average session duration of 1 minute and 16 seconds.", "Achieved a significantly faster average load time of 3 seconds."]}
                    tasks={["Create a new website to replace the existing Wix website.", "The new website should load fast.", "The new website should communicate the campaign's message better."]}
                    solution={["Static website built with Broccoli.js and served cached through an npm for optimal speed.", "AWS Lambda functions on the backend for showing upcoming campaign events."]}
                />
                <PortfolioItem
                    title={"Monodot"}
                    subtitle1={"A game with an overwhelming response . . ."}
                    imgData={{"src":"./Monodot.png", "alt":"Monodot Puzzle Game Image"}}
                    subtitle2={"That pushed me into Software Development."}
                    link1={{text: "Google Play", href: "https://play.google.com/store/apps/details?id=hi.brett.monodot"}}
                    mainText={"Undecided between Chemical Engineering and Software Development, the overwhelming response from users pushed me into Software Development."}
                    impacts={["80,000 players", "4.6 stars", "Reading all of the positive reviews made me feel the impact software development has. This lead me to pursue software development as a career."]}
                    quote={{name: "Walter Bonetti User Review", text: "It's a new and very interesting way to train the brain with numbers and operations.  The bond system inspired by chemistry makes everything very enjoyable."}}
                />
                <PortfolioItem
                    title={"Private Client Testimonial"}
                    subtitle1={"Project protected by a non-disclosure agreement."}
                    quote={{name: "Private Client", text: "The best part [about] working with Brett was his ability to not only communicate well but understand [the tasks]. \n\nI have been using this platform [Upwork] for a few years and I know a great developer when I see one. Brett's communication is on point - He made the time to be available by messaging and/or phone call if need be. \n\nHis technical abilities are very impressive. And he completed all of my requests in a very reasonable timeframe. I certainly plan on working with him again in the future."}}
                    link3={{text: "Testimonial Source", href: "https://www.upwork.com/o/profiles/users/~0167d74d7072ca79d7/", infoText: "(Upwork Login Required)"}}
                />
                <PortfolioItem
                    title={"BrettYeagerDev.com"}
                    imgData={{"src":"./SourceCode.png", "alt":"imgData={{\"src\":\"./SourceCode.png\", \"alt\":\"😊\"}}"}}
                    subtitle1={"Review the source code of this website (built in React.JS)."}
                    link1={{text: "Source Code", href: "https://github.com/hiBrett/BrettYeagerDev"}}
                />
            </PortfolioItemsHolder>
            <Footer/>
        </div>
    }
}