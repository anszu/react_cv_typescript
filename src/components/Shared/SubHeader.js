import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = theme => ({
    classHeader: {
        display: 'flex'
    },
    classIcon: {
        width: theme.iconWidth,
        height: theme.iconWidth,
        marginRight: theme.margin30
    },
    classIconContainer: {
        alignSelf: 'center'
    }
});

const SubHeader = ({ title, img, classes }) => {
    const { classHeader, classIcon, classIconContainer } = classes;
    return (
        <span className={classHeader}>
            <span className={classIconContainer}>{img && <img className={classIcon} src={img}/>}</span>
            <h2>{title}</h2>
        </span>
    );
};

const StyledSubHeader = injectSheet(styles)(SubHeader);

// prop definitions
SubHeader.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    classes: PropTypes.object
};

export default StyledSubHeader;
