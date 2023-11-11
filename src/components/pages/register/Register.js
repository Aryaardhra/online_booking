import { useState } from "react";
import "../register/register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    if (credentials.username && credentials.email && credentials.password) {
      try {
        const res = await axios.post("/auth/register", credentials);
        navigate("/login");
      } catch (error) {
        setError("username or email already exist");
      }
    } else {
      setError("please Fill all the information");
    }
  };
  return (
    <div className="register">
      <div className="recontainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="reinput"
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="reinput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="reinput"
        />
        <div className="rebuttons">
          <button onClick={handleClick} className="rebutton">
            Register
          </button>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="rebutton"
          >
            Login
          </button>
        </div>
        {error}
      </div>
    </div>
  );
};
export default Register;