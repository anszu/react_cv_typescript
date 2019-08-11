import React from 'react';
import List from './Shared/List';
import PropTypes from 'prop-types';

const SoftSkills = ({ data, children }) => {
    return (
        <div>
            {children}
            <List data={data}/>
        </div>
    );
};

// prop definitions
SoftSkills.propTypes = {
    data: PropTypes.array,
    children: PropTypes.object
};

export default SoftSkills;
