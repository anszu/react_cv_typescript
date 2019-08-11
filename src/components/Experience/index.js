import React from 'react';
import Company from './Company';
import Description from '../Shared/Description';
import SaA from './SaA';

const Experience = ({ data, children }) => {
    console.log(data);
    return (
        <div>
            {children}
            {data && data.map((item, id) =>
                (<span key={id}>
                    <Company title={item.title}
                        company={item.company}
                        logo={item.logo}
                        companyLink={item.company_link}
                        location={item.location}
                        period={item.period}/>
                    <Description data={item.description}/>
                    <SaA title={item.achievements.title} data={item.achievements.data}/>
                    <hr/>
                </span>)
            )}
        </div>
    );
};

export default Experience;
