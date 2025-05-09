import { Field, Form, Formik } from "formik";
import React, { useRef, useEffect } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { OwnerVerifayCodeService } from "../../services/Verifay-code";

const SendCode = () => {
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  const initialValues = {
    code: ["", "", "", "", "", ""],
    // phone: "",
  };

  const validationSchema = Yup.object({
    code: Yup.array()
      .of(
        Yup.string().matches(/^\d$/, "Only digits allowed").required("Required")
      )
      .length(6, "Code must be 6 digits")
      .required("Verification code is required"),
  });

  useEffect(() => {
    const login =
      localStorage.getItem("omah email") || localStorage.getItem("omah phone");
    if (!login) {
      // Handle missing phone or email here
      navigate("/login"); // Redirect to login if phone or email is not found
    }
  }, [navigate]);

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const fullCode = values.code.join(""); // Join the code array into a single string
      console.log("Verification code:", fullCode);
      const phone = localStorage.getItem("omah phone");
      const token = localStorage.getItem("omah token")
      const phone_or_email =
        localStorage.getItem("omah email") ||
        localStorage.getItem("omah phone");

      if (!phone_or_email) {
        throw new Error("Phone or email is required.");
      }

      console.log("phone_or_email:", phone_or_email); // Log phone_or_email to ensure it's correct

      const payload = {
        code: fullCode, // Send the code as a string
        phone, // Send the phone or email
        token
      };

      // Now, proceed with the API call
      const response = await OwnerVerifayCodeService(payload);

      if (response.status) {
        // localStorage.setItem("verificationToken", response.token);
        // navigate("/reset-password");
      }
    } catch (error) {
      console.error("Verification error:", error);
      setErrors({ submit: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e, index, values, setFieldValue) => {
    const value = e.target.value.replace(/\D/g, "");
    if (!value && e.target.value !== "") return;

    const newCode = [...values.code];
    newCode[index] = value;
    setFieldValue("code", newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e, setFieldValue) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text/plain").replace(/\D/g, "");
    if (pasteData.length === 6) {
      const codeArray = pasteData.split("");
      setFieldValue("code", codeArray);
      inputRefs.current[5]?.focus();
    }
  };

  return (
    <div className="authincation h-100 p-meddle">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <h4 className="text-center mb-4">Verify Your Code</h4>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        isSubmitting,
                        setFieldValue,
                      }) => (
                        <Form>
                          <div className="form-group">
                            <div
                              className="d-flex justify-content-between mb-3"
                              onPaste={(e) => handlePaste(e, setFieldValue)}
                            >
                              {values.code.map((_, index) => (
                                <Field
                                  key={index}
                                  name={`code[${index}]`}
                                  type="text"
                                  inputMode="numeric"
                                  maxLength="1"
                                  className={`form-control text-center mx-1 ${
                                    touched.code?.[index] &&
                                    errors.code?.[index]
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  value={values.code[index]}
                                  onChange={(e) =>
                                    handleChange(
                                      e,
                                      index,
                                      values,
                                      setFieldValue
                                    )
                                  }
                                  onKeyDown={(e) => handleKeyDown(e, index)}
                                  innerRef={(el) =>
                                    (inputRefs.current[index] = el)
                                  }
                                  autoFocus={index === 0}
                                />
                              ))}
                            </div>
                            {errors.submit && (
                              <div className="alert alert-danger">
                                {errors.submit}
                              </div>
                            )}
                          </div>
                          <div className="text-center">
                            <button
                              type="submit"
                              className="btn btn-primary btn-block"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? "Verifying..." : "Verify Code"}
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                    {/* <div className="text-center mt-3">
                      <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => {
                          // Resend logic here if needed
                        }}
                      >
                        Resend Code
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendCode;
