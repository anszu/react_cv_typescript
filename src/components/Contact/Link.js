import React from 'react';
import injectSheet from 'react-jss';

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

export default StyledLink;
