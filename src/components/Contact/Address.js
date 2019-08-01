import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
    classAddress: {
        marginBottom: theme.margin30
    }
});

const Address = ({ data, classes }) => {
    const { name, birthday, street, city, phone } = data;
    const { classAddress } = classes;
    return (
        <div className={classAddress}>
            <div>{name}</div>
            <div>{birthday}</div>
            <div>{street}</div>
            <div>{city}</div>
            <div>{phone}</div>
        </div>
    );
};

const StyledAddress = injectSheet(styles)(Address);

export default StyledAddress;
