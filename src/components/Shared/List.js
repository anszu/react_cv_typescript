import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = theme => ({
    classList: {
        marginBottom: 0
    }
});

const List = ({ data, classes }) => {
    const { classList } = classes;
    return (
        <ul className={classList}>
            { data && data.map((item, id) =>
                <li key={id}><span dangerouslySetInnerHTML={{ __html: item }}/></li>
            )}
        </ul>
    );
};

const StyledList = injectSheet(styles)(List);

// prop definitions
List.propTypes = {
    data: PropTypes.array,
    classes: PropTypes.object
};

export default StyledList;
