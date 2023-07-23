import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  setEmail,
  setPassword,
} from "../../Redux/Reducers/LoginAuth/LoginAuth";

import "./Components/Style/LoginPage.css";

function LoginPage() {
  const dispatch = useDispatch();
  const authInfo = useSelector((state) => state.authLogin);

  const handleEmailInput = (event) => {
    dispatch(setEmail(event.target.value));
  };
  const handlePasswordInput = (event) => {
    dispatch(setPassword(event.target.value));
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

          <button className="btn" type="submit">
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
