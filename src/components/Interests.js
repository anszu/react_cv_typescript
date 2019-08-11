import React from 'react';
import Description from './Shared/Description';
import PropTypes from 'prop-types';

const Interests = ({ data, children }) => {
    return (
        <div>
            {children}
            <Description data={data}/>
        </div>
    );
};

// prop definitions
Interests.propTypes = {
    data: PropTypes.string,
    children: PropTypes.object
};

export default Interests;
