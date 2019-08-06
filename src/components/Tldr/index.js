import React from 'react';
import TldrItem from './TldrItem';

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

export default Tldr;
