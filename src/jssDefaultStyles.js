const styles = theme => ({
    '@global': {
        body: {
            color: theme.colorText,
            fontFamily: theme.fontRegular,
            padding: `${theme.margin30} ${theme.margin20}`,
            fontSize: theme.font14,
            lineHeight: '1.5'
        },
        h1: {
            letterSpacing: theme.spacing7,
            fontSize: theme.font36
        },
        h2: {
            display: 'block',
            fontSize: theme.font28
        },
        h3: {
            fontSize: theme.font18,
            fontWeight: 'bold',
            marginBottom: theme.margin30
        },
        h4: {
            textDecoration: 'underline',
            fontSize: theme.font14,
            fontWeight: 'normal'
        },
        a: {
            color: theme.colorLink
        },
        hr: {
            marginTop: theme.margin30,
            marginBottom: theme.margin30,
            border: 0,
            borderTop: '1px solid rgba(0,0,0,.1)'
        },
        header: {
            textAlign: 'center'
        },
        footer: {
            textAlign: 'center',
            color: theme.colorDescription
        }
    },
    'container': {
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    [`@media (min-width: ${theme.breakTablet})`]: {
        container: {
            width: theme.containerWidth
        }
    }
});

export default styles;
