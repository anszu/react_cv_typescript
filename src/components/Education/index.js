import React from 'react';
import injectSheet from 'react-jss';

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

export default StyledEducation;
