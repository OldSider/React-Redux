import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../../Provider/AxiosApi";

export const loginAuth = createAsyncThunk(
  "getAuthLogin/getLoginValue",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await API.get("/informations");
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
