import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiBadge: {
            styleOverrides: {
                root: {

                },
                anchorOriginTopLeft: {

                }
            }
        },
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    background: 'red'
                }
            }
        }
    }
})

export default theme;