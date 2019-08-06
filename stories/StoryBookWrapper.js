// this component is used to wrap storybook components with default global styles

import React from 'react';
import injectSheet from 'react-jss';
import styles from '../src/jssDefaultStyles.js';

const StoryBookWrapper = ({ children }) => {
    return <>{children}</>;
};

const StyledStoryBookWrapper = injectSheet(styles)(StoryBookWrapper);

export default StyledStoryBookWrapper;
