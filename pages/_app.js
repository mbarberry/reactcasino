import { createTheme, ThemeProvider } from '@mui/material/styles';

import '@fontsource/roboto-mono';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto Mono',
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
