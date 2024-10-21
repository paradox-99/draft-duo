import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeContext } from "./provider/ThemeProvider";
import Root from "./components/root/Root";

const App = () => {

  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Root/>
    </ThemeProvider>
  );
};

export default App;
