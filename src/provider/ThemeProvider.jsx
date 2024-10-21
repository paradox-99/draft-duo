import { createTheme } from "@mui/material";
import { createContext, useContext } from "react";
// import { useState } from "react";
import PropTypes from 'prop-types';
import { useColorTheme } from "../hooks/useColorTheme";

export const ThemeContext = createContext({
    mode: "light",
    toggleColorMode: () => { },
    theme: createTheme()
});

const ThemeProvider = ({ children }) => {

    const value = useColorTheme();

    return (
        <ThemeContext.Provider value={value}>
                {children}
        </ThemeContext.Provider>
    )
};

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => {
    return useContext(ThemeContext);
  };

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default ThemeProvider;