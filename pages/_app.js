import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import '@fontsource/roboto-mono';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto Mono',
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
