import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
    [`@media (min-width: ${theme.breakTablet})`]: {
        classContact: {
            display: 'flex',
            justifyContent: 'space-evenly'
        }
    }
});

const Contact = ({ children, classes }) => {
    const { classContact } = classes;
    return (
        <div className={classContact}>
            {children}
        </div>
    );
};

const StyledContact = injectSheet(styles)(Contact);

export default StyledContact;
