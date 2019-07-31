import React from 'react';

const SoftSkills = ({ data, children }) => {
    return (
        <div>
            {children}
            <ul>
                { data && data.map((item, id) =>
                    (<li key={id}>
                        {item}
                    </li>)
                )}
            </ul>
        </div>
    );
};

export default SoftSkills;
