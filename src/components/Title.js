import Typography from '@material-ui/core/Typography';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Geostar',
      'cursive',
    ].join(','),
  },});

export default function Title() {

    return (
        <ThemeProvider theme={theme}>
            <Typography 
                variant="h2"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
                gutterBottom
            >
                Spacestagram
            </Typography> 
        </ThemeProvider>
    )
}