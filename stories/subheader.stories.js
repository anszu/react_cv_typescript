import React from 'react';

import { storiesOf } from '@storybook/react';
import App from './StoryBookWrapper';
import SubHeader from '../src/components/Shared/SubHeader';

const subheader = {
    title: 'History',
    img: 'experience.png'
};

storiesOf('SubHeader', module)
    .add('all info', () => <App><SubHeader title={subheader.title} img={subheader.img}/></App>)
    .add('just image', () => <App><SubHeader img={subheader.img}/></App>)
    .add('just title', () => <App><SubHeader title={subheader.title}/></App>)
    .add('no data', () => <App><SubHeader title={''} img={''}/></App>);


