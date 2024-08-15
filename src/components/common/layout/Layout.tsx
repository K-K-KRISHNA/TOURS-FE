import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import { layoutStyles } from "./LayoutStyles";

const Layout = () => {
  return (
    <Box sx={layoutStyles.mainContainer}>
      <Header />
      <Outlet />
    </Box>
  );
};

export default Layout;
