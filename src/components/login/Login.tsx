import React, { useState } from "react";
import { loginAction } from "../../redux/reducers/auth";
import { loginIcon } from "./assets";
import { useStyles } from "./useStyles";
import { translate } from "../../config/i18n";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../utils/useRedux";

interface IProps {}

interface IState {
  username: string;
  password: string;
}

const Login: React.FC<IProps> = (props) => {
  const [username, setUsername] = useState<IState["username"]>("mor_2314");
  const [password, setPassword] = useState<IState["password"]>("83r5^_");
  const dispatch = useAppDispatch();
  const { loading, message } = useAppSelector((state) => state.Auth);
  const classes = useStyles();

  const handleLogin = () => {
    dispatch(
      loginAction({
        username,
        password,
      })
    );
  };

  return (
    <Container maxWidth="xs">
      <Paper sx={{ mt: 10, p: 4 }}>
        <Box style={{ textAlign: "center" }} mb={4}>
          <img src={loginIcon} alt="logo" style={{ maxWidth: "50%" }} />
        </Box>
        <Typography className={classes.root}>
          {translate("login.login")}
        </Typography>
        <TextField
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          label={translate("login.emailPlaceholder")}
          fullWidth
          sx={{ marginTop: 2 }}
        />
        <TextField
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label={translate("login.passwordPlaceholder")}
          fullWidth
          sx={{ marginTop: 2 }}
        />
        <Button
          onClick={handleLogin}
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
        >
          {translate("login.login")}
        </Button>
        {loading && <Typography>{translate("login.loading")}</Typography>}
        {message && <Typography>{message}</Typography>}
      </Paper>
    </Container>
  );
};

export default Login;
