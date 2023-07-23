import { configureStore } from "@reduxjs/toolkit";
import { dataBaseSlice } from "../Reducers/GetDataBase/GetDataBaseSlice";
import { validationLoginSlice } from "../Reducers/LoginAuth/LoginAuth";

const store = configureStore({
  reducer: {
    getAll: dataBaseSlice.reducer,
    authLogin: validationLoginSlice.reducer,
  },
});

export default store;
