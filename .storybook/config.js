import { configure, addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-jss-theme';
import cvTheme from '../src/jssDefaultTheme.js';

console.log(cvTheme);

const theme = {
    name: 'DEFAULT',
    variables: {...cvTheme}
};

const themes = [theme];

addDecorator(withThemesProvider(themes));

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
