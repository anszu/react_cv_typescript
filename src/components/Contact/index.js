import React from 'react';
import Link from './Link';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = theme => ({
    [`@media (min-width: ${theme.breakTablet})`]: {
        classContact: {
            display: 'flex',
            justifyContent: 'space-evenly'
        }
    },
    classAddress: {
        marginBottom: theme.margin30
    }
});

const Contact = ({ address, links, classes }) => {
    const { classContact, classAddress } = classes;
    return (
        <>
            <div className={classContact}>
                <span className={classAddress}>
                    {links.map((item, id) =>
                        <Link key={id} link={item.link} title={item.title}/>
                    )}
                </span>
                <span>
                    {address.map((item, id) =>
                        <div key={id}>{item}</div>
                    )}
                </span>
            </div>
            <hr/>
        </>
    );
};

const StyledContact = injectSheet(styles)(Contact);

// prop definitions
Contact.propTypes = {
    address: PropTypes.array,
    links: PropTypes.array,
    classes: PropTypes.object
};

export default StyledContact;
