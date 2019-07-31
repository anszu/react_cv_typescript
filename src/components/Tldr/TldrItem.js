import React from 'react';
import injectSheet from 'react-jss';

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

export default StyledTldrItem;
