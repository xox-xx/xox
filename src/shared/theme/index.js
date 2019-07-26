import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

export default createMuiTheme({
    palette: {
        primary: {
            main: '#2874F0',
            dark: '#172337'
        },
        secondary: {
            main: '#FEE746',
            dark: '#FB641B'
        },
        action: {
            disabled: 'rgba(0, 0, 0, 0.23)'
        },
        background: {
            default: '#f1f3f6'
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
                },
                'a': {
                    textDecoration: 'none',
                    '&:hover': {
                        textDecoration: 'underline'
                    }
                },
                'button, input': {
                    '&:focus': {
                        outline: 0
                    }
                }
            }
        },
        MuiFilledInput: {
            root: {
                '&$focused': {
                    '&$label': {
                        fontSize: '1.4rem'
                    }
                }
            },
            marginDense: {
                backgroundColor: 'transparent !important',
            },
            inputMarginDense: {
                borderRadius: 2,
                border: '1px solid rgba(0,0,0,0.6)',
                '&:focus': {
                    borderColor: '#0073b1',
                    boxShadow: '0 0 0 1px #0073b1',
                    WebkitBoxShadow: '0 0 0 1px #0073b1'
                }
            },
            underline: {
                '&::before, &::after': {
                    content: 'none',
                }
            }
        }
    }
})