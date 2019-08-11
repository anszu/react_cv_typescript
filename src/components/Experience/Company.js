import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = theme => ({
    classContainer: {
        marginBottom: theme.margin30
    },
    classImg: {
        width: theme.companyLogoWidth,
        marginTop: theme.margin20
    },
    [`@media (min-width: ${theme.breakTablet})`]: {
        classCompany: {
            display: 'flex',
            justifyContent: 'space-between'
        }
    }
});

const Company = ({ title, company, logo, companyLink, location, period, classes }) => {
    const { classContainer, classCompany, classImg } = classes;
    return (
        <div className={classContainer}>
            <h3>{title}</h3>
            <div className={classCompany}>
                <div>
                    <a href={companyLink}>{company}</a>
                    <div>{location}</div>
                    <div>{period}</div>
                </div>
                {logo && <a href={companyLink} target="_blank"><img className={classImg} src={logo}/></a>}
            </div>
        </div>
    );
};

const StyledCompany = injectSheet(styles)(Company);

// prop definitions
Company.propTypes = {
    title: PropTypes.string,
    company: PropTypes.string,
    logo: PropTypes.string,
    companyLink: PropTypes.string,
    location: PropTypes.string,
    period: PropTypes.string,
    classes: PropTypes.object
};

export default StyledCompany;
