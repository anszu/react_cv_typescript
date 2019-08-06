import React from 'react';

import { storiesOf } from '@storybook/react';
import App from './StoryBookWrapper';
import Interests from '../src/components/Interests';

const interests = `I love ice-cream, cakes, muffins and pizza.
    My favourite color is black. In my spare time I read Stephen King.`;

storiesOf('Interests', module)
    .add('all info', () => <App><Interests data={interests}/></App>)
    .add('no data', () => <App><Interests data={''}/></App>);
