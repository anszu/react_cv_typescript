import React, { Component } from 'react';
import Header from './Header';
import Contact from './Contact';
import Address from './Contact/Address';
import Link from './Contact/Link';
import Greeting from './Greeting';
import Tldr from './Tldr';
import TldrItem from './Tldr/TldrItem';
import Experience from './Experience';
import Company from './Experience/Company';
import Description from './Experience/Description';
import SaA from './Experience/SaA';
import Other from './Experience/Other';
import Education from './Education';
import SoftSkills from './SoftSkills';
import Interests from './Interests';
import Footer from './Footer';
import SubHeader from './Shared/SubHeader';
import injectSheet from 'react-jss';

const styles = theme => ({
    '@global': {
        body: {
            color: theme.colorText,
            fontFamily: theme.fontRegular,
            padding: `${theme.margin30} ${theme.margin20}`,
            fontSize: theme.font14,
            lineHeight: '1.5'
        },
        h1: {
            letterSpacing: theme.spacing7,
            fontSize: theme.font36
        },
        h2: {
            display: 'block',
            fontSize: theme.font28
        },
        h3: {
            fontSize: theme.font18,
            fontWeight: 'bold',
            marginBottom: theme.margin30
        },
        h4: {
            textDecoration: 'underline',
            fontSize: theme.font14,
            fontWeight: 'normal'
        },
        a: {
            color: theme.colorLink
        },
        hr: {
            marginTop: theme.margin30,
            marginBottom: theme.margin30,
            border: 0,
            borderTop: '1px solid rgba(0,0,0,.1)'
        },
        header: {
            textAlign: 'center'
        },
        footer: {
            textAlign: 'center',
            color: theme.colorDescription
        }
    },
    'container': {
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    [`@media (min-width: ${theme.breakTablet})`]: {
        container: {
            width: theme.containerWidth
        }
    }
});

class App extends Component {
    constructor (props) {
        super();
        this.state = {
            header: {},
            address: {},
            links: [],
            greeting: '',
            tldr: {},
            experience: {},
            other: {},
            education: {},
            softSkills: {},
            interests: {},
            footer: {} };
    }

    componentDidMount () {
        fetch('./src/components/cv.json')
            .then(res => res.json())
            .then(json => this.setState({
                header: json.header,
                address: json.address,
                links: json.links,
                greeting: json.greeting,
                tldr: json.tldr,
                experience: json.experience,
                other: json.other,
                education: json.education,
                softSkills: json.softSkills,
                interests: json.interests,
                footer: json.footer
            }));
    }

    render () {
        return (
            <div className={this.props.classes.container}>
                <Header data={this.state.header}/>
                <Contact>
                    <span>
                        <Address data={this.state.address}/>
                    </span>
                    <span>
                        {this.state.links.map((item, id) =>
                            <Link key={id} link={item.link} title={item.title}/>
                        )}
                    </span>
                </Contact>
                <Greeting data={this.state.greeting}/>
                <Tldr>
                    <SubHeader title={this.state.tldr.title}/>
                    {this.state.tldr.content && this.state.tldr.content.map((item, id) =>
                        <TldrItem key={id} data={item.content} title={item.title}/>
                    )}
                </Tldr>
                <Experience>
                    <SubHeader title={this.state.experience.title} img={this.state.experience.img}/>
                    {this.state.experience.content && this.state.experience.content.map((item, id) =>
                        (<span key={id}>
                            <Company title={item.title}
                                company={item.company}
                                logo={item.logo}
                                companyLink={item.company_link}
                                location={item.location}
                                period={item.period}/>
                            <Description desc={item.description}/>
                            <SaA title={item.achievements.title} data={item.achievements.content}/>
                            <hr/>
                        </span>)
                    )}
                    <Other title={this.state.other.title} data={this.state.other.content}/>
                </Experience>
                <Education data={this.state.education.content}>
                    <SubHeader title={this.state.education.title} img={this.state.education.img}/>
                </Education>
                <SoftSkills data={this.state.softSkills.content}>
                    <SubHeader title={this.state.softSkills.title} img={this.state.softSkills.img}/>
                </SoftSkills>
                <Interests data={this.state.interests.content}>
                    <SubHeader title={this.state.interests.title} img={this.state.interests.img}/>
                </Interests>
                <Footer title={this.state.footer.title} data={this.state.footer.content}/>
            </div>
        );
    }
}

const StyledApp = injectSheet(styles)(App);

export default StyledApp;
