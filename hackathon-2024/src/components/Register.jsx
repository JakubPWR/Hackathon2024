import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { useFormik } from "formik";
import { AppContext } from "../App";
<<<<<<< HEAD
=======
import axios from "axios";
>>>>>>> a6d31863c8132e2de56849afa5e758410b73767d
import "../styles/LoginPage.css";
export function Register() {
  const navigate = useNavigate(); // Use useNavigate here
  const { logged, setLogged } = useContext(AppContext);
  const formik = useFormik({
    initialValues: {
<<<<<<< HEAD
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setLogged(true);
      navigate("/landingPage"); // Use navigate instead of history.push
=======
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
      console.log(values.firstName);
      console.log(typeof values.firstName);
      console.log(typeof values.email);
      axios
        .post(
          "https://hackaton2024api.azurewebsites.net/api/account/register",
          {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
          }
        )
        .then((response) => {
          alert(response);
        });
      //   navigate("/landingPage");
>>>>>>> a6d31863c8132e2de56849afa5e758410b73767d
    },
  });

  return (
    <div className="content-container">
      <form className="login-form" onSubmit={formik.handleSubmit}>
<<<<<<< HEAD
        <label htmlFor="Email">Email Address</label>
=======
        <label htmlFor="firstName">FirstName</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <label htmlFor="lastName">LastName</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <label htmlFor="email">Email</label>
>>>>>>> a6d31863c8132e2de56849afa5e758410b73767d
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
<<<<<<< HEAD
        <label htmlFor="Username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <label htmlFor="Password">Password</label>
=======
        <label htmlFor="password">Password</label>
>>>>>>> a6d31863c8132e2de56849afa5e758410b73767d
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
<<<<<<< HEAD

=======
        <label htmlFor="confirmPassword">ConfirmPassword</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        ></input>
>>>>>>> a6d31863c8132e2de56849afa5e758410b73767d
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>If you dont have an account go to register</p>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>
    </div>
  );
}
