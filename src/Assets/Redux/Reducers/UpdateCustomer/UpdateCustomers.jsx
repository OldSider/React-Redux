import { createSlice } from "@reduxjs/toolkit";
import { updateCustomers } from "./Components/AsyncThunk";

export const updateCustomerSlice = createSlice({
  name: "updateDataBase",
  initialState: {
    data: [],
    isSuccess: false,
    loading: false,
    message: "",
  },
  extraReducers(builder) {
    builder.addCase(updateCustomers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateCustomers.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.isSuccess = true;
      state.data = state.data.map((customer) =>
        customer.id === payload.id ? payload : customer
      );
    });
    builder.addCase(updateCustomers.rejected, (state, { payload }) => {
      state.message = payload;
      state.isSuccess = false;
      state.loading = false;
    });
  },
});
