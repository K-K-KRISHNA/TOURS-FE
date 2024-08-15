import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../config/config";
import networkCall from "../../utils/networkCall";
import { navigation } from "../../utils/navigation";
import { displayAlert, parseError } from "../../utils/toastMessage";
import Storage from "../../utils/Storage";

export interface AuthDataType {
  message: string | null;
  loading: boolean;
  token: string | null;
}

const initialState: AuthDataType = {
  message: null,
  loading: false,
  token: Storage.get("token") || null,
};

export const loginAction = createAsyncThunk(
  "loginAction",
  async (
    { username, password }: { username: string; password: string },
    { rejectWithValue, fulfillWithValue }
  ) => {
    const data = {
      username,
      password,
    };
    const { response, error } = await networkCall(
      endpoints.LOGIN,
      "POST",
      JSON.stringify(data)
    );

    if (response) {
      displayAlert("Login success");
      Storage.set("token", response.token);
      return fulfillWithValue(response);
    } else {
      parseError(error);
      return rejectWithValue("Something went wrong!");
    }
  }
);

export const AuthSlice = createSlice({
  name: "authlice",
  initialState,
  reducers: {
    actionLogout: (state) => {
      state.token = null;
      navigation.navigate("/");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state, action) => {
      state.loading = true;
      state.message = null;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.message = null;
      navigation.navigate("/home");
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.loading = false;
      state.message = "Please try again!";
    });
  },
});

export const { actionLogout } = AuthSlice.actions;

export default AuthSlice.reducer;
