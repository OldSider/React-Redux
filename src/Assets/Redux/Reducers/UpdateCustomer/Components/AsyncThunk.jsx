import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../../Provider/AxiosApi";

export const updateCustomers = createAsyncThunk(
  "dataBaseUpdate/updateCustomers",
  async ({ customerId, customerData }, { rejectWithValue }) => {
    try {
      const { data } = await API.put(
        `/informations/${customerId}`,
        customerData
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
