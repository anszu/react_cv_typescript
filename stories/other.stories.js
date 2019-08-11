import React from 'react';

import { storiesOf } from '@storybook/react';
import App from './StoryBookWrapper';
import Other from '../src/components/Other';

const other = {
    title: 'Internships and other relevant work experience',
    data: [{
        title: 'Part-time work',
        data: [
            '12/2004 to 04/2008 MacDonalds : Customer Service'
        ] }, {
        title: 'Internships',
        data: [
            '04/2005 to 09/2005 Internet Solutions Group: Webdevelopment, Webdesign',
            '01/2003 to 06/2003 Some great Agency: Web Development'
        ] }] };

storiesOf('Other', module)
    .add('all info', () => <App><Other data={other.data} title={other.title}/></App>)
    .add('no title', () => <App><Other data={[{ ...other.data[0] }]} title={''}/></App>)
    .add('no subtitle', () => <App><Other data={[{ ...other.data[0], subtitle: '' }]} title={other.title}/></App>)
    .add('no data', () => <App><Other data={[]} title={''}/></App>);
