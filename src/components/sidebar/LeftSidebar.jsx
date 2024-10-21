import { Box, IconButton, Tooltip } from "@mui/material";
import { CgProfile } from "react-icons/cg";
import { IoLogInOutline } from "react-icons/io5";

const LeftSidebar = () => {

    const user = true;

    return (
        <Box
            sx={{
                width: {
                    md: 200,
                    lg: 250,
                },
                height: "100vh",
                display: {
                    xs: "none",
                    sm: "none",
                    md: "flex",
                },
                p: 2,
                borderRight: "2px solid",
                borderColor: "grey.600",
                alignItems: "end",
                justifyContent: "center",

            }}
        >
            {
                user ? <Tooltip title="Radwanul Islam Nayeem" arrow placement="top"><IconButton sx={{
                    color: "text.primary",
                    fontSize: {
                        md: 40
                    }
                }}>
                    <CgProfile />
                </IconButton></Tooltip> : <Tooltip title="Login" arrow placement="top">
                    <IconButton sx={{
                        color: "text.primary",
                        fontSize: {
                            md: 40
                        }
                    }}>
                        <IoLogInOutline />
                    </IconButton>
                </Tooltip>
            }
        </Box>
    );
};

export default LeftSidebar;