import { configureStore } from "@reduxjs/toolkit";
import { dataBaseSlice } from "../Reducers/GetDataBase/GetDataBaseSlice";
import { validationLoginSlice } from "../Reducers/LoginAuth/LoginAuth";
import { deleteSlice } from "../Reducers/DeleteCustomer/DeleteCustomerSlice";
import { updateCustomerSlice } from "../Reducers/UpdateCustomer/UpdateCustomers";
import { createCustomerSlice } from "../Reducers/CreateCustomer/CreateCustomer";

const store = configureStore({
  reducer: {
    getAll: dataBaseSlice.reducer,
    authLogin: validationLoginSlice.reducer,
    deleteUser: deleteSlice.reducer,
    updateUser: updateCustomerSlice.reducer,
    createUser: createCustomerSlice.reducer,
  },
});

export default store;
