import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    general: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };
  
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!inputs.username) {
      setErrors((prev) => ({ ...prev, username: "Please enter your username" }));
    }
    if (!inputs.password) {
      setErrors((prev) => ({ ...prev, password: "Please enter your password" }));
    }
    if (inputs.username && inputs.password) {
      try {
        await login(inputs);
        navigate("/");
      } catch (err) {
        if (err.response.status === 401) {
          setErrors((prev) => ({ ...prev, general: "Incorrect username or password" }));
        } else {
          setErrors((prev) => ({ ...prev, general: "Something went wrong, please try again" }));
        }
      }
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello There!</h1>
          <p>
            Welcome to Canva! Connect with friends and family, share your thoughts, photos, and memories with the world. Login to join the conversation and be part of the community.
          </p>
          <span>Do you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            {errors.username && <span className="error">{errors.username}</span>}
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
            {errors.general && <span className="error">{errors.general}</span>}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
