import React from 'react';
import TldrItem from './TldrItem';
import PropTypes from 'prop-types';

const Tldr = ({ data, children }) => {
    return (
        <div>
            {children}
            {data && data.map((item, id) =>
                <TldrItem key={id} data={item.data} title={item.title}/>
            )}
        </div>
    );
};

// prop definitions
Tldr.propTypes = {
    data: PropTypes.array,
    children: PropTypes.object
};

export default Tldr;
