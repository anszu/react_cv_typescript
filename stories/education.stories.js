import React from 'react';

import { storiesOf } from '@storybook/react';
import App from './StoryBookWrapper';
import Education from '../src/components/Education';

const edObj = {
    title: 'Degree',
    institute: 'University of Berlin',
    link: 'http://en.wikipedia.org',
    date: 'January 2016',
    location: 'Berlin (Germany)' };

storiesOf('Education', module)
    .add('all info', () => <App><Education data={[{ ...edObj }, { ...edObj }]}/></App>)
    .add('no title', () => <App><Education data={[{ ...edObj, title: '' }]}/></App>)
    .add('several data missing', () => <App><Education data={[{ ...edObj, link: '', date: '' }]}/></App>)
    .add('no data', () => <App><Education data={[]}/></App>);
