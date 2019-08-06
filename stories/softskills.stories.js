import React from 'react';

import { storiesOf } from '@storybook/react';
import App from './StoryBookWrapper';
import SoftSkills from '../src/components/SoftSkills';

const softSkills = [
    'business fluency in english', 'hard worker', 'very social'];

storiesOf('SoftSkills', module)
    .add('all info', () => <App><SoftSkills data={softSkills}/></App>)
    .add('no data', () => <App><SoftSkills data={[]}/></App>);
