import React from 'react';

const Other = ({ title, data }) => {
    return (
        <div>
            <h3>{title}</h3>
            { data && data.map((item, id) =>
                (<div key={id}>
                    <h4>{item.title}</h4>
                    <ul>
                        { item.content.map((el, i) =>
                            <li key={i}><span dangerouslySetInnerHTML={{ __html: el }}/></li>
                        )}
                    </ul>
                </div>)
            )}
        </div>
    );
};

export default Other;


