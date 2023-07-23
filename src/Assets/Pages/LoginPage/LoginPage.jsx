import { useState } from "react";
import { Link } from "react-router-dom";

import "./Components/Style/LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
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
