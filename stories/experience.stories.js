import React from 'react';

import { storiesOf } from '@storybook/react';
import App from './StoryBookWrapper';
import Experience from '../src/components/Experience';

const experience = [{
    title: 'Engineer',
    company: 'Google',
    logo: 'google.png',
    company_link: 'https://www.google.com',
    location: 'Berlin (Germany)',
    period: 'May 2010 – May 2015',
    description: 'I had a great time working for Google.',
    achievements: {
        title: 'Strengths and achievements:',
        data: ['Coding cool stuff', 'Coding more cool stuff', 'Throwing cool coded stuff away and code it again']
    } }, {
    title: 'Junior Engineer',
    company: 'Microsoft',
    logo: 'microsoft.png',
    company_link: 'https://www.microsoft.com',
    location: 'Redmond (US)',
    period: 'May 2008 – May 2010',
    description: 'I had a great time working for Microsoft.',
    achievements: {
        title: 'Strengths and achievements:',
        data: ['Coding cool stuff', 'Coding more cool stuff', 'Throwing cool coded stuff away and code it again']
    } }];

storiesOf('Experience', module)
    .add('all info', () => <App><Experience data={experience}/></App>)
    .add('no title', () => <App><Experience data={[{ ...experience[0], title: '' }]}/></App>)
    .add('no company info', () => <App><Experience data={[{ ...experience[0], company: '', logo: '', company_link: '' }]}/></App>)
    .add('no company logo', () => <App><Experience data={[{ ...experience[0], logo: '' }]}/></App>)
    .add('no description', () => <App><Experience data={[{ ...experience[0], description: '' }]}/></App>)
    .add('no achievements', () => <App><Experience data={[{ ...experience[0], achievements: {} }]}/></App>)
    .add('no data', () => <App><Experience data={[]}/></App>);
