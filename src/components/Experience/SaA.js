import React from 'react';
import List from '../Shared/List';
import PropTypes from 'prop-types';

const SaA = ({ title, data }) => {
    return (
        <div>
            <h4>{title}</h4>
            <List data={data}/>
        </div>
    );
};

// prop definitions
SaA.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
};

export default SaA;
