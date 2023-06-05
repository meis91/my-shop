import {createTheme} from "@mui/material/styles";

const Theme = createTheme({
    palette: {
        primary: {
            light: '#4d4d52',
            main: 'rgb(4,122,173)',
            dark: '#111111',
            contrastText: '#fff',
        },
        secondary: {
            light: '#4d4d52',
            main: '#4d4d52',
            dark: '#4d4d52',
            contrastText: '#000',
        },
        error: {
            main: '#ad0404',
            contrastText: '#000',
        },
        info: {
            light: '#047aad',
            main: 'rgba(36,255,2,0.73)',
            dark: 'rgba(5,21,101,0.35)',
            contrastText: '#000',
        },
    },
});

export default Theme;