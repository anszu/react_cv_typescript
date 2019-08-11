import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = theme => ({
    classEducation: {
        marginBottom: theme.margin30
    }
});

const Education = ({ data, children, classes }) => {
    const { classEducation } = classes;
    return (
        <div>
            {children}
            { data && data.map((item, id) =>
                (<div key={id} className={classEducation}>
                    <h3>{item.title}</h3>
                    <a href={item.link}>{item.institute}</a>
                    <div>{item.date}</div>
                    <div>{item.location}</div>
                </div>)
            )}
        </div>
    );
};

const StyledEducation = injectSheet(styles)(Education);

// prop definitions
Education.propTypes = {
    data: PropTypes.array,
    classes: PropTypes.object,
    children: PropTypes.object
};

export default StyledEducation;
