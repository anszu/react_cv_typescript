import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = theme => ({
    classTitle: {
        minWidth: theme.linkWidth,
        display: 'inline-block'
    }
});

const Link = ({ link, title, classes }) => {
    const { classTitle } = classes;
    return (
        <div>
            <span className={classTitle}>{title}:</span>
            <a href={link} target="_blank">{link}</a>
        </div>
    );
};

const StyledLink = injectSheet(styles)(Link);

// prop definitions
Link.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
    classes: PropTypes.object
};

export default StyledLink;
