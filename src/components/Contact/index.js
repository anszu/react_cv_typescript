import React from 'react';
import Link from './Link';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

// defined seperately to be reused
const desktopView = {
    classContact: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    classAddress: {
        marginTop: '0px'
    }
};

const styles = theme => ({
    classAddress: {
        display: 'block',
        marginTop: theme.margin30
    },
    [`@media (min-width: ${theme.breakTablet})`]: desktopView,
    [`@media print`]: desktopView
});

const Contact = ({ address, links, classes }) => {
    const { classContact, classAddress } = classes;
    return (
        <>
            <div className={classContact}>
                <span>
                    {links.map((item, id) =>
                        <Link key={id} link={item.link} title={item.title}/>
                    )}
                </span>
                <span className={classAddress}>
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
