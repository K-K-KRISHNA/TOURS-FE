import React from "react";
import { actionLogout } from "../../redux/reducers/auth";
import { getProducts, getSingleProduct } from "../../redux/reducers/products";
import { translate } from "../../config/i18n";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { useStyles } from "./useStyles";
import { useAppDispatch, useAppSelector } from "../../utils/useRedux";

interface IProps {}

// interface IState {
//   productId: string
// }

const Home: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.Products);
  const classes = useStyles();

  const handleLogout = () => {
    dispatch(actionLogout());
  };

  const handleGetProducts = () => {
    dispatch(getProducts());
  };

  const getSingleProductDetails = async (id: number) => {
    const response = await dispatch(getSingleProduct(id));
    if(response.meta.requestStatus === 'fulfilled') {
      alert(JSON.stringify(response.payload))
    }
  }

  return (
    <Container maxWidth="sm">
      <Box className={classes.container}>
        <Button onClick={handleLogout} variant="contained">
          {translate("home.logout")}
        </Button>
        <Box className={classes.subContainer}>
          {products.length > 0 ? (
            <Box>
              {products.map((product) => {
                return (
                  <Paper key={product.id} className={classes.items} onClick={() => getSingleProductDetails(product.id)}>
                    <Typography>{product.title}</Typography>
                    <Typography>{product.description}</Typography>
                  </Paper>
                );
              })}
            </Box>
          ) : (
            <Button onClick={handleGetProducts} variant="contained" fullWidth>
              {translate("home.getAllProducts")}
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
