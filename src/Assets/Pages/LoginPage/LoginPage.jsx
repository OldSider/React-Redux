import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAuth } from "../../Redux/Reducers/LoginAuth/Components/AsyncThunk";
import {
  setEmail,
  setPassword,
} from "../../Redux/Reducers/LoginAuth/LoginAuth";
import { unwrapResult } from "@reduxjs/toolkit";

import "./Components/Style/LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authInfo = useSelector((state) => state.authLogin);

  const handleEmailInput = (event) => {
    dispatch(setEmail(event.target.value));
  };
  const handlePasswordInput = (event) => {
    dispatch(setPassword(event.target.value));
  };

  const handleLoginValidation = async () => {
    try {
      const resultAction = await dispatch(
        loginAuth({ email: authInfo.email, password: authInfo.password })
      );
      const loginResult = unwrapResult(resultAction);
      loginResult
        ? navigate("/homepage")
        : alert("Client not found, Try again ");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div>
          <h1>Login</h1>

          <div className="input-box">
            <input
              type="text"
              placeholder="Email"
              required
              value={authInfo.email}
              onChange={handleEmailInput}
            />
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={authInfo.password}
              onChange={handlePasswordInput}
            />
            <i className="bx bxs-lock-alt"></i>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link to={"#"} className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button className="btn" type="submit" onClick={handleLoginValidation}>
            Login
          </button>

          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <Link to={"/register"} className="register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
