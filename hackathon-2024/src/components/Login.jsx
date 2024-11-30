import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { useFormik } from "formik";
import "../styles/LoginPage.css";
import { AppContext } from "../App";
import LandingPage from "./LandingPage";

export function Login() {
  const navigate = useNavigate(); // Use useNavigate here
  const { logged, setLogged } = useContext(AppContext);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setLogged(true);
      navigate("/landingPage"); // Use navigate instead of history.push
    },
  });

  return (
    <>
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
    </>
  );
}
