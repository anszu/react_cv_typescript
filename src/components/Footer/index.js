import React from 'react';

const Footer = ({ title, data }) => {
    return (
        <footer>
            <hr/>
            {title} - {data}
        </footer>
    );
};

export default Footer;
