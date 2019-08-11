import React from 'react';
import List from './Shared/List';
import PropTypes from 'prop-types';

const Other = ({ title, data }) => {
    return (
        <div>
            <h3>{title}</h3>
            { data && data.map((item, id) =>
                (<div key={id}>
                    <h4>{item.title}</h4>
                    <List data={item.data}/>
                </div>)
            )}
        </div>
    );
};

// prop definitions
Other.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
};

export default Other;


