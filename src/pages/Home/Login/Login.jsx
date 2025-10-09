import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Login.css";

export const Login = () => {
  // ✅ Hàm validate thủ công
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Bắt buộc nhập email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Email không hợp lệ";
    }

    if (!values.password) {
      errors.password = "Bắt buộc nhập mật khẩu";
    } else if (values.password.length < 6) {
      errors.password = "Mật khẩu ít nhất 6 ký tự";
    }

    return errors;
  };

  // 📨 Hàm submit
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form values:", values);
    setTimeout(() => {
      alert(`Đăng nhập thành công với email: ${values.email}`);
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="login">
      <h2 className="dangnhap">Đăng nhập</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Email */}
            <div className="email">
              <h3 className="titleemail">Email</h3>
              <Field
                className="inputemail"
                type="email"
                name="email"
                placeholder="Nhập email"
              />
              <ErrorMessage
                className="erroremail"
                name="email"
                component="div"
              />
            </div>

            {/* Password */}
            <div className="pass">
              <h3 className="titlepass">Mật khẩu</h3>
              <Field
                className="inputpass"
                type="password"
                name="password"
                placeholder="Nhập mật khẩu"
              />
              <ErrorMessage
                className="errorpass"
                name="password"
                component="div"
              />
            </div>

            {/* Submit */}
            <button className="button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
