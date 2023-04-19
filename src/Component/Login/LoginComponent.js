import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./LoginComponent.css";

export default function LoginComponent(props) {
  const { studentData, saveStudentData, saveLogindata } = props;



  console.log('student data', studentData);
  const initialValues = { username: "", email: "", password: "" };
  const loginvalues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [loginValues, setLogin] = useState(loginvalues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [login, LoginSucess] = useState(true);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...loginValues, [name]: value })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    saveStudentData(formValues);
    LoginSucess(false);
    setFormValues(initialValues);
  };

  const handleLogin = () => {
    LoginSucess(false);
    saveLogindata(loginValues);
  }


  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    else if (values.message) {
      errors.email = "Email is All ready exists";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      {!login && <form onSubmit={handleLogin}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          {/* <p>{formErrors.username}</p> */}
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={loginvalues.email}
              onChange={handleLoginChange}
            />
          </div>
          {/* <p>{formErrors.email}</p> */}
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginvalues.password}
              onChange={handleLoginChange}
            />
          </div>
          {/* <p>{formErrors.password}</p> */}
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>}


      {login && <form onSubmit={handleSubmit}>
        <h1>Sign Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>}

    </div>


  );
}

LoginComponent.propTypes = {
  saveStudentData: PropTypes.func,
  saveLogindata: PropTypes.func,
  studentData: PropTypes.instanceOf(Object),
};
LoginComponent.defaultProps = {
  studentData: {},
  saveStudentData: () => { },
  saveLogindata: () => { }
};
