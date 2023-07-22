import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    // check if any field is empty
    const { username, email, password, name } = inputs;
    if (!username || !email || !password || !name) {
      setErr("Please fill all fields.");
      return;
    }
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      setSuccess(true);
      setErr(null);
    } catch (err) {
      if (err.response.data === "User already exists.") {
        setErr("User already exists.");
      }
      setSuccess(false);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>CANVA</h1>
          <p>
            Welcome to our CANVA! We're excited to have you join us. Signing up
            is quick and easy - just fill in your details and you'll be ready to
            go.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            {err && (
              <span style={{ color: "red" }}>
                {err}
              </span>
            )}
            {success && (
              <span style={{ color: "green" }}>
                Registration successful!
              </span>
            )}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
