import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ data }) => {
    return (
        <footer>
            <hr/>
            <span dangerouslySetInnerHTML={{ __html: data }} />
        </footer>
    );
};

// prop definitions
Footer.propTypes = {
    data: PropTypes.string
};

export default Footer;
