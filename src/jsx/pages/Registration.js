import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../images/logo-full.png";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { registerUser } from "../../services/Owner-register";

function Register(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string(),
    password: Yup.string()
    .required("Password is required"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password confirmation is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
  
    const payload = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      password: values.password,
      password_confirmation: values.password_confirmation,
    };
  
    console.log("Sending data to API:", payload);
  
    try {
      const response = await registerUser(payload);
      console.log("Response from API:", response);
  
      if (response?.status) {
        navigate("/login");
      } else {
        setErrors({ submit: response?.msg || "Registration failed" });
      }
    } catch (error) {
      console.error("Error:", error);
      setErrors({
        submit: error?.response?.data?.msg || "Something went wrong",
      });
    }
  
    setSubmitting(false);
  };
  

  return (
    <div className="fix-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6">
            <div className="card mb-0 h-auto">
              <div className="card-body">
                <div className="text-center mb-3">
                  <Link to={"/dashboard"}>
                    <img src={logo} alt="" className="logo-auth" />
                  </Link>
                </div>
                <h4 className="text-center mb-4">Sign up your account</h4>
                {props.errorMessage && (
                  <div className="text-danger p-1 my-2">
                    {props.errorMessage}
                  </div>
                )}
                {props.successMessage && (
                  <div className="text-success p-1 my-2">
                    {props.successMessage}
                  </div>
                )}
                {errors.submit && (
                  <div className="text-danger p-1 my-2">{errors.submit}</div>
                )}
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, touched, errors }) => (
                    <Form>
                      <div className="form-group mb-4">
                        <label className="form-label">Username</label>
                        <Field
                          type="text"
                          className={`form-control ${
                            touched.name && errors.name ? "is-invalid" : ""
                          }`}
                          name="name"
                          placeholder="username"
                        />
                        {touched.name && errors.name && (
                          <div className="invalid-feedback">{errors.name}</div>
                        )}
                      </div>
                      <div className="form-group mb-4">
                        <label className="form-label">Email</label>
                        <Field
                          type="email"
                          className={`form-control ${
                            touched.email && errors.email ? "is-invalid" : ""
                          }`}
                          name="email"
                          placeholder="hello@example.com"
                        />
                        {touched.email && errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>
                      <div className="form-group mb-4">
                        <label className="form-label">Phone</label>
                        <Field
                          type="text"
                          className={`form-control ${
                            touched.phone && errors.phone ? "is-invalid" : ""
                          }`}
                          name="phone"
                          placeholder="Phone number"
                        />
                        {touched.phone && errors.phone && (
                          <div className="invalid-feedback">{errors.phone}</div>
                        )}
                      </div>
                      <div className="form-group mb-sm-4 mb-3">
                        <label className="form-label">Password</label>
                        <div className="position-relative">
                          <Field
                            type={showPassword ? "text" : "password"}
                            className={`form-control ${
                              touched.password && errors.password
                                ? "is-invalid"
                                : ""
                            }`}
                            name="password"
                          />
                          <span
                            className={`show-pass eye ${
                              showPassword ? "active" : ""
                            }`}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <i className="fa fa-eye-slash" />
                            <i className="fa fa-eye" />
                          </span>
                        </div>
                        {touched.password && errors.password && (
                          <div className="invalid-feedback">
                            {errors.password}
                          </div>
                        )}
                      </div>
                      <div className="form-group mb-sm-4 mb-3">
                        <label className="form-label">Confirm Password</label>
                        <Field
                          type={showPassword ? "text" : "password"}
                          className={`form-control ${
                            touched.password_confirmation &&
                            errors.password_confirmation
                              ? "is-invalid"
                              : ""
                          }`}
                          name="password_confirmation"
                        />
                        {touched.password_confirmation &&
                          errors.password_confirmation && (
                            <div className="invalid-feedback">
                              {errors.password_confirmation}
                            </div>
                          )}
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          disabled={isSubmitting}
                        >
                          Sign up
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
                <div className="new-account mt-3">
                  <p>
                    Already have an account?{" "}
                    <Link className="text-primary" to="/login">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading,
  };
};

export default connect(mapStateToProps)(Register);
