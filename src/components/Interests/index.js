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

const Interests = ({ data, children, classes }) => {
    const { classDesc } = classes;
    console.log(data);
    return (
        <div>
            {children}
            <div className={classDesc}>
                <div dangerouslySetInnerHTML={{ __html: data }} />
            </div>
        </div>
    );
};

const StyledInterests = injectSheet(styles)(Interests);

export default StyledInterests;
