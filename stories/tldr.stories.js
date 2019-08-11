import React from 'react';

import { storiesOf } from '@storybook/react';
import App from './StoryBookWrapper';
import Tldr from '../src/components/Tldr';

const tldr = [{
    title: 'Professional experience',
    data: '5+ years' }, {
    title: 'Programming',
    data: "HTML, CSS, JavaScript" }];

storiesOf('Tldr', module)
    .add('all info', () => <App><Tldr data={tldr}/></App>)
    .add('no data', () => <App><Tldr data={[]}/></App>);
