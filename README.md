# React CV template

This repo contains the template I'm using for [my own CV](https://anszu.github.io/).
As a CV is a pretty static document it might be questionable to make a React setup out of it. The reason I did it anyway is basically because I wanted to have it very modular and I wanted to work with a couple of concepts and techniques here, namely
JSS in React, JSS theming and Storybook integration.

## Getting Started

1. Make sure Node.js and NPM are [installed](https://nodejs.org/en/download/) 
2. Make sure Git is [installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
3. Clone Repo with ```git clone git@github.com:anszu/react_cv.git```
4. Install packages with ```npm install```
5. Edit [your_cv_here_json](https://github.com/anszu/react_cv/blob/master/src/your_cv_here.json)
6. Run with ```npm run start```
7. For an overview about the involved components run storybook with ```npm run storybook```

## Storybook integration

This is a modular CV template. A component libary showing all the modules involved, including different forms of presentation is added as Storybook setup and can be viewed [here](https://brave-wilson-94a2e8.netlify.com).
The code for the stories is located in the [stories](https://github.com/anszu/react_cv/tree/master/stories) folder.
All Stories are wrapped with the ```StoryBookWrapper```component, that is imported as ```App```. This is simulating the ```App``` component, which is loading in the default styles for the HTML body, headings, links and so on. With the help of the ```StoryBookWrapper``` those Styles are also being injected into all story components.

Example [Footer story](https://github.com/anszu/react_cv/blob/master/stories/footer.stories.js).

```javascript
import React from 'react';

import { storiesOf } from '@storybook/react';
import App from './StoryBookWrapper';
import Footer from '../src/components/Footer';

const footer = {
    data: 'Anna Smith - 2019'
};

storiesOf('Footer', module)
    .add('all info', () => <App><Footer data={footer.data}/></App>)
    .add('no data', () => <App><Footer data={''}/></App>);
```

Build command storybook: 


        // header: {},
        // address: [],
        // links: [],
        // greeting: '',
        // tldr: {},
        // experience: {},
        // other: {},
        // education: {},
        // softSkills: {},
        // interests: {},
        // footer: {} };

https://brave-wilson-94a2e8.netlify.com
