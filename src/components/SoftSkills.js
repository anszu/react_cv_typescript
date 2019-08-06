import React from 'react';
import List from './Shared/List';

const SoftSkills = ({ data, children }) => {
    return (
        <div>
            {children}
            <List data={data}/>
        </div>
    );
};

export default SoftSkills;
