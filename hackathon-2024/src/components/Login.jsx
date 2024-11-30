import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { useFormik } from "formik";
import { AppContext } from "../App";
import "../styles/LoginPage.css";
import motherAndChild from "../video/motherAndChild.mp4"; // Import the video

export function Login() {
  const navigate = useNavigate();
  const { logged, setLogged } = useContext(AppContext);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setLogged(true);
      navigate("/landingPage");
    },
  });

  return (
    <div className="login-container">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={motherAndChild} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for dimming */}
      <div className="overlay"></div>

      {/* Login Form */}
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <label htmlFor="Email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="Username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <label htmlFor="Password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
