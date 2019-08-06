import React from 'react';
import List from '../Shared/List';

const SaA = ({ title, data }) => {
    return (
        <div>
            <h4>{title}</h4>
            <List data={data}/>
        </div>
    );
};

export default SaA;
