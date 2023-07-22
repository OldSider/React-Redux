import { Link } from "react-router-dom";
import "./Components/Style/LoginPage.css";

function LoginPage() {
  return (
    <>
      <div className="wrapper">
        <form action="%">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Email" required />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
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
        </form>
      </div>
    </>
  );
}

export default LoginPage;
