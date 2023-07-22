import { configureStore } from "@reduxjs/toolkit";
import {dataBaseSlice} from "../Reducers/GetDataBase/GetDataBaseSlice"

const store = configureStore({
  reducer: {
    getAll: dataBaseSlice.reducer,
  },
});

export default store;
