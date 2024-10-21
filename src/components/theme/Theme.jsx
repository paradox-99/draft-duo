export const getDesignTokens = (mode) => ({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        mode,
        ...(mode === "light"
            ? {
                // palette values for light mode
                mode: "light"
            }
            : {
                // palette values for dark mode
                mode: "dark"
            }),
    },
});
