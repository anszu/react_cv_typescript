import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
    classHeader: {
        display: 'flex',
        marginBottom: theme.margin30,
        marginTop: theme.margin30
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
            <span className={classIconContainer}>{img && <img className={classIcon} src={'./img/' + img}/>}</span>
            <h2>{title}</h2>
        </span>
    );
};

const StyledSubHeader = injectSheet(styles)(SubHeader);

export default StyledSubHeader;
