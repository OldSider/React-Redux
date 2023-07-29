import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createCustomerReducer } from "../../Redux/Reducers/CreateCustomer/Components/AsyncThunk";
import axios from "axios";
import validator from "validator";

import "./Components/Style/RegisterPage.css";

function RegisterPage() {
  const dispatch = useDispatch();
  const [zipCodeData, setZipCodeData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const watchPassword = watch("userPassword");
  const watchZipCode = watch("userZipCode");

  const verifyZipCode = async () => {
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${watchZipCode}/json/`
      );
      const data = response.data;
      setZipCodeData(data);
      setValue("userState", data.uf);
      setValue("userCity", data.localidade);
      setValue("userDistrict", data.bairro);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (data) => {
    dispatch(createCustomerReducer(data))
  };

  return (
    <>
      <div className="Register-wrapper">
        <h1>Register</h1>

        <div className="Register-block">
          <input
            type="text"
            placeholder="Full Name"
            {...register("fullName", { minLength: 3, required: true })}
            className={
              errors?.fullName?.type === "minLength" ||
              errors?.fullName?.type === "required"
                ? "error"
                : ""
            }
          />
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              validate: (value) =>
                validator.isEmail(value) || "Invalid email address",
            })}
            className={errors?.email ? "error" : ""}
          />
        </div>
        <div className="Register-block">
          <input
            type="number"
            placeholder="Phone"
            {...register("userPhone", { required: true })}
            className={errors?.userPhone?.type === "required" ? "error" : ""}
          />

          <input
            type="number"
            placeholder="Your ID"
            {...register("userId", { required: true })}
            className={errors?.userId?.type === "required" ? "error" : ""}
          />
        </div>
        <div className="Register-block">
          <input
            type="password"
            placeholder="Password"
            {...register("userPassword", { required: true })}
            className={errors?.userPassword?.type === "required" ? "error" : ""}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: true,
              validate: (value) => value === watchPassword,
            })}
            className={
              errors?.confirmPassword?.type === "required" ||
              errors?.confirmPassword?.type === "validate"
                ? "error"
                : ""
            }
          />
        </div>
        <div className="Register-block">
          <input
            type="text"
            placeholder="Gender"
            {...register("gender", { required: true })}
            className={errors?.gender?.type === "required" ? "error" : ""}
          />

          <input
            type="number"
            placeholder="Zip Code"
            {...register("userZipCode", { required: true })}
            className={errors?.userZipCode?.type === "required" ? "error" : ""}
            onBlur={verifyZipCode}
          />
        </div>
        <div className="Register-block">
          <input
            type="text"
            placeholder="State"
            {...register("userState", { required: true })}
            value={zipCodeData?.uf || ""}
            className={errors?.userState?.type === "required" ? "error" : ""}
          />

          <input
            type="text"
            placeholder="City"
            {...register("userCity", { required: true })}
            value={zipCodeData?.localidade || ""}
            className={errors?.userCity?.type === "required" ? "error" : ""}
          />
        </div>
        <div className="Register-block">
          <input
            type="text"
            placeholder="District"
            {...register("userDistrict", { required: true })}
            className={errors?.userDistrict?.type === "required" ? "error" : ""}
          />

          <input
            type="text"
            placeholder="House Number"
            {...register("userHouseNumber", { required: true })}
            className={
              errors?.userHouseNumber?.type === "required" ? "error" : ""
            }
          />
        </div>

        <div className="Register-btn">
          <button onClick={() => handleSubmit(onSubmit)()}>Register</button>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
