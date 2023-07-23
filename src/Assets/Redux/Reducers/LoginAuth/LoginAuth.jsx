import { createSlice } from "@reduxjs/toolkit";

export const validationLogin = createSlice({
  name: "getLogin",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {},
});
