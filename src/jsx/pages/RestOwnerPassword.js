import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { OwnerSendCodeService } from "../../services/Owner-forgotpassword";
import { useNavigate } from "react-router-dom";

const RestOwnerPassword = () => {
  const navigate = useNavigate();
  const initialValues = {
    phone_or_email: "",
  };
  const validationSchema = Yup.object({
    phone_or_email: Yup.string().required("Email or phone is required"),
  });
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const data = {
        login: values.phone_or_email,
      };
      const response = await OwnerSendCodeService(data);
      console.log(response)
      navigate("/SendCode");
    } catch (error) {
      console.error("send code error:", error);
      setErrors({ submit: error.message });
      alert(
        error.message || "send code failed. Please check your credentials."
      );
    } finally {
      setSubmitting(false);
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
                    <h4 className="text-center mb-4">Forgot Password</h4>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      <Form>
                        <div className="form-group">
                          <label>
                            <strong>Email</strong>
                          </label>
                          <Field
                            type="email"
                            name="phone_or_email"
                            placeholder="Enter email"
                            className="form-control mt-2"
                            defaultValue="hello@example.com"
                          />
                        </div>
                        <div className="text-center">
                          <input
                            type="submit"
                            value="SUBMIT"
                            className="btn btn-primary btn-block"
                          />
                        </div>
                      </Form>
                    </Formik>
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
export default RestOwnerPassword;
