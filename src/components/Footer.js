import React from 'react';

const Footer = ({ data }) => {
    return (
        <footer>
            <hr/>
            <span dangerouslySetInnerHTML={{ __html: data }} />
        </footer>
    );
};

export default Footer;
