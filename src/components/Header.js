import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = theme => ({
    classSubtitle: {
        fontSize: theme.font18,
        letterSpacing: theme.spacing7,
        fontWeight: 'normal'
    }
});

const Header = ({ data, classes }) => {
    const { classSubtitle } = classes;
    const { name, title } = data;
    return (
        <header>
            <h1>{name}</h1>
            <h2 className={classSubtitle}>{title}</h2>
            <hr/>
        </header>
    );
};

const StyledHeader = injectSheet(styles)(Header);

// prop definitions
Header.propTypes = {
    data: PropTypes.object,
    classes: PropTypes.object
};

export default StyledHeader;
