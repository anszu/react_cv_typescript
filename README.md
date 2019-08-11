# React CV template

This repo contains the template I'm using for [my own CV](https://anszu.github.io/).
As a CV is a pretty static document it might be questionable to make a React setup out of it. The reason I did it anyway is basically because I wanted to have it very modular and I wanted to work with a couple of concepts and techniques here, namely
JSS in React, JSS theming and Storybook integration.

## Getting Started

1. Make sure Node.js and NPM are [installed](https://nodejs.org/en/download/) 
2. Make sure Git is [installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
3. Clone Repo with ```git clone git@github.com:anszu/react_cv.git```
4. Install packages with ```npm install```
5. Edit [your_cv_here.json](https://github.com/anszu/react_cv/blob/master/src/your_cv_here.json)
6. Run with ```npm run start```
7. For an overview about the involved components run storybook with ```npm run storybook```

## Data

The data that will be displayed by the CV template is stored in [src/your_cv_here.json](https://github.com/anszu/react_cv/blob/master/src/your_cv_here.json).

The following data structure is expected:

### Header

_Data used to display CV Header in Header component_

**Component**: [src/components/Header](https://github.com/anszu/react_cv/blob/master/src/components/Header.js)   
**Storybook**: https://brave-wilson-94a2e8.netlify.com/?path=/story/header--all-info    
**expects**: Object

```json
"header": {
    "name": "",
    "title": ""
}
```

### Address

_Data used to display address in Contact component_

**Component**: [src/components/Contact/](https://github.com/anszu/react_cv/blob/master/src/components/Contact/)   
**Storybook**: https://brave-wilson-94a2e8.netlify.com/?path=/story/contact--just-address    
**expects**: Array

```json
"address": ["", "", "",]
```

### Links

_Data used to display links in Contact component_

**Component**: [src/components/Contact/](https://github.com/anszu/react_cv/blob/master/src/components/Contact/)  
**Storybook**: https://brave-wilson-94a2e8.netlify.com/?path=/story/contact--just-links  
**expects**: Array of Objects

```json
"links": [{"link": "", "title": ""}, {"link": "", "title": ""}, {"link": "", "title": ""}]
```

### Greeting

_Data used to display introductional greeting in Greeting component_

**Component**: [src/components/Greeting.js](https://github.com/anszu/react_cv/blob/master/src/components/Greeting.js)  
**Storybook**: https://brave-wilson-94a2e8.netlify.com/?path=/story/greeting--all-info  
**expects**: String

```json
"greeting": ""
```

### Tldr

_Data used to display "Too long, dind't read" summary of CV in Tldr component_

**Component**: [src/components/Tldr](https://github.com/anszu/react_cv/blob/master/src/components/Tldr/) 
**Storybook**: https://brave-wilson-94a2e8.netlify.com/?path=/story/tldr--all-info    
**expects**: Object, tldr.data expects Array of Objects

```json
"tldr": {
    "title": "",
    "data": [{"title": "", "data": ""}, {"title": "", "data": ""}, {"title": "", "data": ""}]
}
```

### Experience

_Data used to display overview of professional experience in Experience component_

**Component**: [src/components/Experience](https://github.com/anszu/react_cv/blob/master/src/components/Experience/) 
**Storybook**: https://brave-wilson-94a2e8.netlify.com/?path=/story/experience--all-info    
**expects**: Object, experience.data expects Array of Objects, achievements expects Object, achievements.data expects Array 

```json
"experience": {
    "title": "",
    "img": "",
    "data": [{
        "title": "",
        "company": "",
        "logo": "",
        "company_link": "",
        "location": "",
        "period": "",
        "description": "",
        "achievements": {
            "title": "",
            "data": ["", "", ""]
        },
        {
        "title": "",
        "company": "",
        "logo": "",
        "company_link": "",
        "location": "",
        "period": "",
        "description": "",
        "achievements": {
            "title": "",
            "data": ["", "", ""]
        }]
}
```

### Other

_Data used to display other work related experience in Other component_

**Component**: [src/components/Other.js](https://github.com/anszu/react_cv/blob/master/src/components/Other.js) 
**Storybook**: https://brave-wilson-94a2e8.netlify.com/?path=/story/other--all-info    
**expects**: Object, other.data expects Array of Objects, other.data.data expects Array

```json
"other": {
    "title": "",
    "data": [{"title": "", "data": ["", "", ""]}, {"title": "", "data": ["", "", ""]}]
}
```

### Education

_Data used to display history of education in Education component_

**Component**: [src/components/Education.js](https://github.com/anszu/react_cv/blob/master/src/components/Education.js) 
**Storybook**: https://brave-wilson-94a2e8.netlify.com/?path=/story/education--all-info   
**expects**: Object, education.data expects Array of Objects

```json
"education": {
    "title": "",
    "img": "",
    "data": [{"title": "", "institute": "", "link": "", "period": "", "location": ""},
             {"title": "", "institute": "", "link": "", "period": "", "location": ""}]
}
```

### Soft Skills

_Data used to display list of soft skills in SoftSkills component_

**Component**: [src/components/SoftSkills.js](https://github.com/anszu/react_cv/blob/master/src/components/SoftSkills.js) 
**Storybook**: https://brave-wilson-94a2e8.netlify.com/?path=/story/softskills--all-info   
**expects**: Object, data expects Array

```json
"softSkills": {
    "title": "",
    "img": "",
    "data": ["", "", ""]
}
```

### Interests

_Data used to display list of interests in Interests component_

**Component**: [src/components/Interests.js](https://github.com/anszu/react_cv/blob/master/src/components/Interests.js) 
**Storybook**: https://brave-wilson-94a2e8.netlify.com/?path=/story/interests--all-info  
**expects**: Object

```json
"interests": {
    "title": "",
    "img": "",
    "data": ""
}
```

### Footer

_Data used to display footer information in Footer component_

**Component**: [src/components/Footer.js](https://github.com/anszu/react_cv/blob/master/src/components/Footer.js) 
**Storybook**: https://brave-wilson-94a2e8.netlify.com/?path=/story/footer--all-info  
**expects**: String

```json
"footer": ""
```



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



## Storybook

This is a modular CV template. A component libary showing all the modules involved, including different forms of presentation is added as Storybook setup and can be viewed [here](https://brave-wilson-94a2e8.netlify.com).
The code for the stories is located in the [stories](https://github.com/anszu/react_cv/tree/master/stories) folder.
All Stories are wrapped with the ```StoryBookWrapper```component, that is imported as ```App```. This is simulating the ```App``` component, which is loading in the default styles for the HTML body, headings, links and so on. With the help of the ```StoryBookWrapper``` those styles are also being injected into all story components.
Images that are used in stories are stored in [stories/img](https://github.com/anszu/react_cv/tree/master/stories/img).

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

Run command Storybook: ```npm run storybook```  
Build command Storybook: ```npm run build-storybook```    
Storybook Build Url: https://brave-wilson-94a2e8.netlify.com




https://brave-wilson-94a2e8.netlify.com
