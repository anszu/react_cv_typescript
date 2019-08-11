import React from 'react';

import { storiesOf } from '@storybook/react';
import App from './StoryBookWrapper';
import Education from '../src/components/Education';

const education = {
    title: 'Degree',
    institute: 'University of Berlin',
    link: 'http://en.wikipedia.org',
    date: 'January 2016',
    location: 'Berlin (Germany)' };

storiesOf('Education', module)
    .add('all info', () => <App><Education data={[{ ...education }, { ...education }]}/></App>)
    .add('no title', () => <App><Education data={[{ ...education, title: '' }]}/></App>)
    .add('several data missing', () => <App><Education data={[{ ...education, link: '', date: '' }]}/></App>)
    .add('no data', () => <App><Education data={[]}/></App>);
