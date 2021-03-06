import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import "./NavBar.css";
import { Link } from "@mui/material";
import axios from "axios";
import { withRouter } from "react-router";
import RightMenu from "./Sections/RightMenu";
import MiddleMenu from "./Sections/MiddleMenu";

const NavBar = (props) => {
    const onClickHandler = () => {
        axios.get("/api/users/logout").then((response) => {
            if (response.data.success) {
                props.history.push("/login");
            } else {
                alert("로그아웃 하는데 실패 했습니다.");
            }
        });
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Link href="/" sx={{ ml: 30, mr: 2 }}>
                        <img className="navbar-logo" src="img/usEarth.png" />
                    </Link>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        UsEarth
                    </Typography>
                    <MiddleMenu />
                    <RightMenu />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default withRouter(NavBar);
