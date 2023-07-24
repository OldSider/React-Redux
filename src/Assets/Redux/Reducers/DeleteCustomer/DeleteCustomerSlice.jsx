import { createSlice } from "@reduxjs/toolkit";
import { deleteCustomer } from "./Components/AsyncThunk";

export const deleteSlice = createSlice({
  name: "dataBaseDelete",
  initialState: {
    data: [],
    isSuccess: false,
    loading: false,
    message: "",
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(deleteCustomer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteCustomer.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = state.data.filter((customer) => customer.id !== payload);
      state.isSuccess = false;
    });
  },
});
