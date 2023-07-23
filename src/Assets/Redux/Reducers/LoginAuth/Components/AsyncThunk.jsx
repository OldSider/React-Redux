import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../../Provider/AxiosApi";

export const loginAuth = createAsyncThunk(
  "getAuthLogin/getLoginValue",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await API.get("/informations");
      const { data } = response;
      const customer = data.find(
        (item) => item.email === email && item.userPassword === password
      );
      if (customer) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
