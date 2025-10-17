import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";

const SignupSchema = Yup.object().shape({
  email: Yup.string().required("bắt buộc nhập"),
  password: Yup.string().required("bắt buộc nhập"),
});

const Login = () => {
  // // ✅ Hàm validate thủ công
  // const validate = (values) => {
  //   const errors = {};

  //   if (!values.email) {
  //     errors.email = "Bắt buộc nhập email";
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //     errors.email = "Email không hợp lệ";
  //   }

  //   if (!values.password) {
  //     errors.password = "Bắt buộc nhập mật khẩu";
  //   } else if (values.password.length < 6) {
  //     errors.password = "Mật khẩu ít nhất 6 ký tự";
  //   }

  //   return errors;
  // };

  // 📨 Hàm submit
  //   const handleSubmit = (values, { setSubmitting }) => {
  //     console.log("Form values:", values);
  //     setTimeout(() => {
  //       alert(`Bạn đã đăng nhập thành công với email: ${values.email}`);
  //       setSubmitting(false);
  //     }, 1000);
  //   };
  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    const users = JSON.parse(sessionStorage.getItem("users")) || [];

    let newErrors = {}; // lưu lỗi

    // Tìm user theo email
    const user = users.find((u) => u.email === values.email);

    // Nếu không có user => cả email & password đều coi là sai
    if (!user) {
      newErrors.email = "Email không chính xác";
      newErrors.password = "Mật khẩu không chính xác";
    } else {
      // Nếu có user nhưng sai mật khẩu
      if (user.password !== values.password) {
        newErrors.password = "Mật khẩu không chính xác";
      }
    }

    // Nếu có lỗi thì hiển thị cả hai
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitting(false);
      return;
    }

    // ✅ Đăng nhập thành công
    setTimeout(() => {
      alert(
        `✅ Đăng nhập thành công! Xin chào ${user.firstName} ${user.lastName}`
      );
      sessionStorage.setItem("loggedInUser", JSON.stringify(user));
      setSubmitting(false);
    }, 1000);
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
              email: "",
              password: "",
            }}
            // validate={validate}
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

                {/* Submit */}
                <button
                  className="login_button"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Đang Đăng Nhập..." : "Đăng Nhập"}
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
