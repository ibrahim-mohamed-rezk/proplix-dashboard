import React from "react";
import { connect, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

// Images
import logo from "../../images/logo-full.png";
import loginbg from "../../images/pic1.png";
import { OwnerLoginService } from "../../services/Owner-login";
import {
  LOGIN_CONFIRMED_ACTION,
  loginConfirmedAction,
} from "../../store/actions/AuthActions";

function OwnerLogin(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    phone_or_email: "",
    password: "",
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    phone_or_email: Yup.string().required("Email or phone is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const loginData = {
        login: values.phone_or_email,
        password: values.password,
      };

      const response = await OwnerLoginService(loginData);
      console.log(response);
      if (values.rememberMe) {
        localStorage.setItem("omah email", values.phone_or_email);
        localStorage.setItem("omah password", values.password);
      }
      localStorage.setItem("omah phone", response.data.phone);

      localStorage.setItem("omah token", response.token);
      localStorage.setItem("admin_name", response.data.name);
      dispatch(
        loginConfirmedAction({
          token: response.token,
          user: response.data,
        })
      );
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      setErrors({ submit: error.message });
      alert(error.message || "Login failed. Please check your credentials.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="authincation d-flex flex-column flex-lg-row flex-column-fluid">
      <div className="login-aside text-center d-flex flex-column flex-row-auto">
        <div className="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
          <div className="text-center mb-4 pt-5">
            <img src={logo} alt="" width="200" />
          </div>
          <h3 className="mb-2">Welcome back!</h3>
          <p>
            User Experience & Interface Design
            <br />
            Strategy SaaS Solutions
          </p>
        </div>
        <div
          className="aside-image"
          style={{ backgroundImage: `url(${loginbg})` }}
        ></div>
      </div>

      <div className="container flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
        <div className="d-flex justify-content-center h-100 align-items-center">
          <div className="authincation-content style-2">
            <div className="row no-gutters">
              <div className="col-xl-12 tab-content">
                <div id="sign-in" className="auth-form form-validation">
                  {props.errorMessage && (
                    <div className="bg-red-300 text-red-900 border border-red-900 p-1 my-2">
                      {props.errorMessage}
                    </div>
                  )}
                  {props.successMessage && (
                    <div className="bg-green-300 text-green-900 border border-green-900 p-1 my-2">
                      {props.successMessage}
                    </div>
                  )}

                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting, errors, touched }) => (
                      <Form className="form-validate">
                        <h3 className="text-center mb-4 text-black">
                          Sign in your account
                        </h3>

                        <div className="form-group mb-3">
                          <label className="mb-1" htmlFor="login">
                            <strong>Email</strong>
                          </label>
                          <Field
                            type="text"
                            name="phone_or_email"
                            className={`form-control ${
                              touched.phone_or_email && errors.phone_or_email
                                ? "is-invalid"
                                : ""
                            }`}
                            placeholder="Type Your Email or Phone"
                          />
                          {touched.phone_or_email && errors.phone_or_email && (
                            <div className="text-danger fs-12">
                              {errors.phone_or_email}
                            </div>
                          )}
                        </div>

                        <div className="form-group mb-3">
                          <label className="mb-1" htmlFor="password">
                            <strong>Password</strong>
                          </label>
                          <Field
                            type="password"
                            name="password"
                            className={`form-control ${
                              touched.password && errors.password
                                ? "is-invalid"
                                : ""
                            }`}
                            placeholder="Type Your Password"
                          />
                          {touched.password && errors.password && (
                            <div className="text-danger fs-12">
                              {errors.password}
                            </div>
                          )}
                        </div>

                        <div className="form-row d-flex justify-content-between mt-4 mb-2">
                          <div className="form-group mb-3">
                            <div className="custom-control custom-checkbox ms-1">
                              <Field
                                type="checkbox"
                                name="rememberMe"
                                className="form-check-input"
                                id="basic_checkbox_1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="basic_checkbox_1"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div
                            style={{ cursor: "pointer" }}
                            className="font-bold text-primary"
                            onClick={() => navigate("/ForgotPassword")}
                          >
                            Forgot Password
                          </div>
                        </div>

                        <div className="text-center form-group mb-3">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            disabled={isSubmitting || props.showLoading}
                          >
                            {isSubmitting || props.showLoading
                              ? "Signing In..."
                              : "Sign In"}
                          </button>
                        </div>

                        {errors.submit && (
                          <div className="text-danger text-center mb-3">
                            {errors.submit}
                          </div>
                        )}
                      </Form>
                    )}
                  </Formik>

                  <div className="new-account mt-3">
                    <p>
                      Don't have an account ?
                      <Link className="text-primary ms-2" to="/page-register">
                        Sign up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  errorMessage: state.auth.errorMessage,
  successMessage: state.auth.successMessage,
  showLoading: state.auth.showLoading,
});

export default connect(mapStateToProps)(OwnerLogin);
