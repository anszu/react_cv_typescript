import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

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

// prop definitions
Description.propTypes = {
    data: PropTypes.string,
    classes: PropTypes.object
};

export default StyledDescription;
