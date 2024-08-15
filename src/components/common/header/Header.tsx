import { Logout } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { actionLogout } from "../../../redux/reducers/auth";
import { useAppDispatch } from "../../../utils/useRedux";
import { websiteLogo } from "../assets";
import { headerStyles } from "./headerStyles";

const Header = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(actionLogout());
  };
  return (
    <Box sx={headerStyles.mainContainer}>
      <Box component={"img"} src={websiteLogo} sx={headerStyles.logo} />
      <Typography fontWeight={600}>Spiritual Sojournes</Typography>
      <Box ml={"auto"} display={"flex"} gap={3} alignItems={"center"}>
        <Link
          to={"/book"}
          style={{ textDecoration: "none", color: "black", fontWeight: 700 }}
        >
          Book a Tour
        </Link>
        <Link
          to={"/favourites"}
          style={{ textDecoration: "none", color: "black", fontWeight: 700 }}
        >
          Favourites
        </Link>
        <Link
          to={"/upcoming-tours"}
          style={{ textDecoration: "none", color: "black", fontWeight: 700 }}
        >
          Upcoming Tours
        </Link>
        <Link
          to={"/transactions"}
          style={{ textDecoration: "none", color: "black", fontWeight: 700 }}
        >
          Transactions
        </Link>
        <IconButton onClick={handleLogout}>
          <Logout />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
