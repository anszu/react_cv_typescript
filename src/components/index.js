import React, { Component } from 'react';
import Header from './Header.js';
import Contact from './Contact';
import Greeting from './Greeting.js';
import Tldr from './Tldr';
import Experience from './Experience';
import Other from './Other.js';
import Education from './Education.js';
import SoftSkills from './SoftSkills.js';
import Interests from './Interests.js';
import Footer from './Footer.js';
import SubHeader from './Shared/SubHeader';
import injectSheet from 'react-jss';
import styles from '../jssDefaultStyles.js';
import PropTypes from 'prop-types';
import cv from '../your_cv_here.json';

class App extends Component {
    constructor (props) {
        super();
        this.state = {
            header: cv.header,
            address: cv.address,
            links: cv.links,
            greeting: cv.greeting,
            tldr: cv.tldr,
            experience: cv.experience,
            other: cv.other,
            education: cv.education,
            softSkills: cv.softSkills,
            interests: cv.interests,
            footer: cv.footer };
    }

    render () {
        return (
            <div className={this.props.classes.container}>
                <Header data={this.state.header}/>
                <Contact address={this.state.address} links={this.state.links}/>
                <Greeting data={this.state.greeting}/>
                <Tldr data={this.state.tldr.data}>
                    <SubHeader title={this.state.tldr.title}/>
                </Tldr>
                <Experience data={this.state.experience.data}>
                    <SubHeader title={this.state.experience.title} img={this.state.experience.img}/>
                </Experience>
                <Other data={this.state.other.data} title={this.state.other.title}/>
                <Education data={this.state.education.data}>
                    <SubHeader title={this.state.education.title} img={this.state.education.img}/>
                </Education>
                <SoftSkills data={this.state.softSkills.data}>
                    <SubHeader title={this.state.softSkills.title} img={this.state.softSkills.img}/>
                </SoftSkills>
                <Interests data={this.state.interests.data}>
                    <SubHeader title={this.state.interests.title} img={this.state.interests.img}/>
                </Interests>
                <Footer data={this.state.footer.data}/>
            </div>
        );
    }
}

const StyledApp = injectSheet(styles)(App);

// prop definitions
App.propTypes = {
    classes: PropTypes.object
};

export default StyledApp;
