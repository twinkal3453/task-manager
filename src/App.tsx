import * as React from "react";
import { useState } from "react";
import "./App.css";
import Nav from "./components/pages/Nav";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { blue, orange } from "@mui/material/colors";

const AppContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

function App() {
  const [isDarkMode, setIsDarkMode] = useState<Boolean>(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: blue,
      secondary: orange,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer>
        <div className="App">
          <Nav />
        </div>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
