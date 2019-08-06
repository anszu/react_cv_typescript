import React from 'react';

import { storiesOf } from '@storybook/react';
import App from './StoryBookWrapper';
import Contact from '../src/components/Contact';


const contact = {
    address: ["Anna Smith", "*20.03.1992", "Gasse 1", "12345 Munich", "+49 4387358945945"],
    links: [{
        link: "http://google.com",
        title: "Website" }, {
        link: "mailto:annasmith@annasmith.de",
        title: "Email" }]
};

storiesOf('Contact', module)
    .add('all info', () => <App><Contact address={contact.address} links={contact.links}/></App>)
    .add('just address', () => <App><Contact address={contact.address} links={[]}/></App>)
    .add('just links', () => <App><Contact address={[]} links={contact.links}/></App>)
    .add('no data', () => <App><Contact address={[]} links={[]}/></App>);
