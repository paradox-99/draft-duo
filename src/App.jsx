import { Box, CssBaseline, IconButton, ThemeProvider } from "@mui/material";
import { useThemeContext } from "./provider/ThemeProvider";
import { MdDarkMode, MdLightMode  } from "react-icons/md";

const App = () => {

  const { theme, mode, toggleColorMode } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          bgcolor: "background.default",
          color: "text.primary",
          p: 2,
          width: "full"
        }}
      >
        <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
          {mode === "dark" ? <MdLightMode /> : <MdDarkMode />}
        </IconButton>
      </Box>
    </ThemeProvider>
  );
};

export default App;
