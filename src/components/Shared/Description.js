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

const Description = ({ data, classes }) => {
    const { classDesc } = classes;
    return (
        <p className={classDesc}>
            <span dangerouslySetInnerHTML={{ __html: data }} />
        </p>
    );
};

const StyledDescription = injectSheet(styles)(Description);

export default StyledDescription;
