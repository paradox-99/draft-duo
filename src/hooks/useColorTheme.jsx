import { createTheme } from "@mui/material";
import React from "react";
import { getDesignTokens } from "../components/theme/Theme";

const getPreferredColorScheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
};

const theme = getPreferredColorScheme();

export const useColorTheme = () => {
    const [mode, setMode] = React.useState(theme);

    const toggleColorMode = () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));


    const modifiedTheme = React.useMemo(
        () => createTheme(getDesignTokens(mode)),
        [mode]
    );

    return {
        theme: modifiedTheme,
        mode,
        toggleColorMode,
    };
};