import React from 'react';

import { storiesOf } from '@storybook/react';
import App from './StoryBookWrapper';
import SubHeader from '../src/components/Shared/SubHeader';
import img from '../img/experience.png';

const title = 'History';

storiesOf('SubHeader', module)
    .add('all info', () => <App><SubHeader title={title} img={img}/></App>)
    .add('just image', () => <App><SubHeader img={img}/></App>)
    .add('just title', () => <App><SubHeader title={title}/></App>)
    .add('no data', () => <App><SubHeader title={''} img={''}/></App>);


