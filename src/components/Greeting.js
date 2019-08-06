import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
    classGreeting: {
        fontStyle: 'italic',
        maxWidth: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
        color: theme.colorDescription,
        borderLeft: 'solid',
        borderWidth: theme.borderWidth,
        borderColor: theme.colorDescriptionBar,
        padding: `0 ${theme.margin30}`
    }
});

const Greeting = ({ data, classes }) => {
    const { classGreeting } = classes;
    return (
        <>
            <p className={classGreeting}>
                {data}
            </p>
        </>
    );
};

const StyledGreeting = injectSheet(styles)(Greeting);

export default StyledGreeting;
