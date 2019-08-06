import React from 'react';
import List from '../Shared/List';

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

export default Other;


