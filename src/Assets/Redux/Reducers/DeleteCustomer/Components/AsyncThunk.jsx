import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../../Provider/AxiosApi";

export const deleteCustomer = createAsyncThunk(
  "dataBaseDelete/deleteCustomer",
  async (customerId) => {
    try {
      await API.delete(`/informations/${customerId}`);
    } catch (error) {
      console.error(error);
    }
  }
);
