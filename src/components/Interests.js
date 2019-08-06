import React from 'react';
import Description from './Shared/Description';

const Interests = ({ data, children }) => {
    return (
        <div>
            {children}
            <Description data={data}/>
        </div>
    );
};

export default Interests;
