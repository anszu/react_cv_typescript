import React from 'react';

const Address = (address) => {
    const { name, birthday, street, city, phone } = address.data;
    return (
        <>
            <div>{name}</div>
            <div>{birthday}</div>
            <div>{street}</div>
            <div>{city}</div>
            <div>{phone}</div>
        </>
    );
};

export default Address;
