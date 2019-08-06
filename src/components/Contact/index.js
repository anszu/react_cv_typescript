import React from 'react';
import Link from './Link';
import injectSheet from 'react-jss';

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
                <span>
                    {address.map((item, id) =>
                        <div key={id}>{item}</div>
                    )}
                </span>
                <span className={classAddress}>
                    {links.map((item, id) =>
                        <Link key={id} link={item.link} title={item.title}/>
                    )}
                </span>
            </div>
            <hr/>
        </>
    );
};

const StyledContact = injectSheet(styles)(Contact);

export default StyledContact;
