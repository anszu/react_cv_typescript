import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
    classDesc: {
        marginLeft: theme.margin40,
        marginBottom: theme.margin30,
        fontStyle: 'italic',
        color: theme.colorDescription
    }
});

const Description = ({ desc, classes }) => {
    const { classDesc } = classes;
    return (
        <p className={classDesc}>
            {desc}
        </p>
    );
};

const StyledDescription = injectSheet(styles)(Description);

export default StyledDescription;
