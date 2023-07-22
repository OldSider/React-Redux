import { createSlice } from "@reduxjs/toolkit";
import { getDataBase } from "./Components/AsyncThunk";

export const dataBaseSlice = createSlice({
  name: "dataBaseGet",
  initialState: {
    data: [],
    isSuccess: false,
    loading: false,
    message: "",
  },
  reducer: {},
  extraReducers(builder) {
    builder.addCase(getDataBase.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDataBase.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.isSuccess = true;
    });
    builder.addCase(getDataBase.rejected, (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    });
  },
});
