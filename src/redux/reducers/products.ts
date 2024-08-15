import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../config/config";
import networkCall from "../../utils/networkCall";

export interface ProductsReducer {
  products: {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
  }[];
  loading: boolean;
}

const initialState: ProductsReducer = {
  products: [],
  loading: false,
};

export const getProducts = createAsyncThunk("getProducts", async () =>
  // _,
  // {getState, rejectWithValue, fulfillWithValue},
  {
    const { response } = await networkCall(endpoints.GET_PRODUCTS, "GET");
    return response;
    // if (response) {
    //   return fulfillWithValue(response.data);
    // } else {
    //   return rejectWithValue('Something went wrong!');
    // }
  }
);

export const getSingleProduct = createAsyncThunk(
  "getSingleProduct",
  async (productId: number, { rejectWithValue, fulfillWithValue }) => {
    const { response } = await networkCall({
      url: endpoints.SINGLE_PRODUCTS,
      params: {
        productId,
      },
    });
    if (response) {
      return fulfillWithValue(response);
    } else {
      return rejectWithValue("Something went wrong!");
    }
  }
);

export const ProductSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default ProductSlice.reducer;
