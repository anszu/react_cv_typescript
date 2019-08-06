import React from 'react';

import { storiesOf } from '@storybook/react';
import App from './StoryBookWrapper';
import Greeting from '../src/components/Greeting';

const greeting = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat vol
    tpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper 
    suscipit lobortis nisl ut aliquip ex ea commodo consequat.`;

storiesOf('Greeting', module)
    .add('all info', () => <App><Greeting data={greeting}/></App>)
    .add('no data', () => <App><Greeting/></App>);
