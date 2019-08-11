import React from 'react';
import Company from './Company';
import Description from '../Shared/Description';
import SaA from './SaA';
import PropTypes from 'prop-types';

const Experience = ({ data, children }) => {
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

// prop definitions
Experience.propTypes = {
    data: PropTypes.array,
    children: PropTypes.object
};

export default Experience;
