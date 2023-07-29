import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../../Provider/AxiosApi";

export const createCustomerReducer = createAsyncThunk(
  "createCustomer/postCustomer",
  async (customerData, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/informations", customerData);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
