import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { AuthContext } from "../../contexts/AuthContext";

const SignupSchema = Yup.object().shape({
  email: Yup.string().required("bắt buộc nhập"),
  password: Yup.string().required("bắt buộc nhập"),
});

const Login = () => {
  const { login, isLoading, isError } = useContext(AuthContext);

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    login(values.email, values.password);
  };

  return (
    <div className="content-login">
      <div className="login">
        <div className="login_left">
          <h1>ANONYSTICK</h1>
          <h2>= DEVELOPER BLOG =</h2>
        </div>
        <div className="login_right">
          <h2 className="dangnhap">Đăng Nhập</h2>
          <Formik
            initialValues={{
              email: "Lindsey22@hotmail.com",
              password: "LaazSPXb1XnxJUn",
            }}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                {/* Email */}
                <div className="login_email">
                  <h3 className="login_titleemail">Email</h3>
                  <Field
                    className="login_inputemail"
                    type="email"
                    name="email"
                    placeholder="Nhập email"
                  />
                  <ErrorMessage
                    className="login_erroremail"
                    name="email"
                    component="div"
                  />
                </div>

                {/* Password */}
                <div className="login_pass">
                  <h3 className="login_titlepass">Mật khẩu</h3>
                  <Field
                    className="login_inputpass"
                    type="password"
                    name="password"
                    placeholder="Nhập mật khẩu"
                  />
                  <ErrorMessage
                    className="login_errorpass"
                    name="password"
                    component="div"
                  />
                </div>

                {isError && <div>Tai khoan hoac mat khau khong chinh xac </div>}
                {/* Submit */}
                <button
                  className="login_button"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Đang Đăng Nhập..." : "Đăng Nhập"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default Login;
