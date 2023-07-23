import { createSlice } from "@reduxjs/toolkit";

export const validationLoginSlice = createSlice({
  name: "getLogin",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setEmail, setPassword } = validationLoginSlice.actions;
