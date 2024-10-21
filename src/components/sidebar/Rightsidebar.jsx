import { Box, IconButton } from "@mui/material";
import { MdDarkMode, MdLightMode  } from "react-icons/md";
import { useThemeContext } from "../../provider/ThemeProvider";

const Rightsidebar = () => {

    const { mode, toggleColorMode } = useThemeContext();

    return (
        <div className="max-w-">
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    color: "text.primary",
                    width: "full",
                    p:{
                        xs: 0,
                        sm: 1,
                    }
                }}
            >
                <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
                    {mode === "dark" ? <MdLightMode /> : <MdDarkMode />}
                </IconButton>
            </Box>
        </div>
    );
};

export default Rightsidebar;