import React from 'react';

import { storiesOf } from '@storybook/react';
import App from './StoryBookWrapper';
import Header from '../src/components/Header.js';

const header = {
    name: 'Anna Smith',
    title: 'Engineer'
};

storiesOf('Header', module)
    .add('all info', () => <App><Header data={header}/></App>)
    .add('just name', () => <App><Header data={{ name: header.name }}/></App>)
    .add('just title', () => <App><Header data={{ title: header.title }}/></App>)
    .add('no data', () => <App><Header data={{}}/></App>);
