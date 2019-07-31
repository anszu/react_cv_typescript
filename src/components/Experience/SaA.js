import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
    classList: {
        marginBottom: 0
    }
});

const SaA = ({ title, data, classes }) => {
    const { classList } = classes;
    return (
        <div>
            <h4>{title}</h4>
            <ul className={classList}>
                { data.map((item, id) =>
                    <li key={id}><span dangerouslySetInnerHTML={{ __html: item }}/></li>
                )}
            </ul>
        </div>
    );
};

const StyledSaA = injectSheet(styles)(SaA);

export default StyledSaA;
