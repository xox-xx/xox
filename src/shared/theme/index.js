import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

export default createMuiTheme({
    palette: {
        primary: {
            main: '#2874F0'
        },
        secondary: {
            main: '#FEE746'
        },
        background: {
            default: '#F0F0F0'
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                'html, body, #__next': {
                    height: '100%'
                },
                '#__next': {
                    display: 'flex',
                    flexDirection: 'column'
                }
            }
        }
    }
})