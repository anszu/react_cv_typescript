import React from 'react';

import { storiesOf } from '@storybook/react';
import App from './StoryBookWrapper';
import Footer from '../src/components/Footer';

const footer = 'Anna Smith - 2019';

storiesOf('Footer', module)
    .add('all info', () => <App><Footer data={footer.data}/></App>)
    .add('no data', () => <App><Footer data={''}/></App>);
