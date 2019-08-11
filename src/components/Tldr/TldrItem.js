import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = theme => ({
    classTldr: {
        fontFamily: theme.fontTldr
    },
    classTitle: {
        display: 'inline-block',
        fontWeight: 'bold',
        marginRight: theme.margin30
    }
});

const TldrItem = ({ data, title, classes }) => {
    const { classTldr, classTitle } = classes;
    return (
        <div className={classTldr}>
            <span className={classTitle}>{title}:</span>
            <span>{data}</span>
        </div>
    );
};

const StyledTldrItem = injectSheet(styles)(TldrItem);

// prop definitions
TldrItem.propTypes = {
    data: PropTypes.string,
    title: PropTypes.string,
    classes: PropTypes.object
};

export default StyledTldrItem;
