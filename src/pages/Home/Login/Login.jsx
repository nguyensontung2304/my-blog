import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "quá ngắn")
    .max(10, "quá dài")
    .required("bắt buộc nhập"),
  lastName: Yup.string()
    .min(2, "quá ngắn")
    .max(10, "quá dài")
    .required("bắt buộc nhập"),
  email: Yup.string()
    .email("email không đúng định dạng")
    .required("bắt buộc nhập"),
  password: Yup.string()
    .min(8, "mật khẩu ít nhất phải có 8 ký tự")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("bắt buộc nhập"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "mật khẩu phải trùng khớp"
  ),
});

export const Login = () => {
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
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form values:", values);
    setTimeout(() => {
      alert(`Đăng nhập thành công với email: ${values.email}`);
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="tong_login content-login">
      <div className="login">
        <h2 className="dangnhap">Đăng nhập</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
            firstName: "",
            lastName: "",
          }}
          // validate={validate}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="ten">
                {/* firstName */}
                <div className="firstName">
                  <h3 className="titlefirstName">FirstName</h3>
                  <Field
                    className="inputfirstName"
                    type="firstName"
                    name="firstName"
                    placeholder="Nhập firstName"
                  />
                  <ErrorMessage
                    className="errorfirstName"
                    name="firstName"
                    component="div"
                  />
                </div>

                {/* lastName */}
                <div className="lastName">
                  <h3 className="titlelastName">LastName</h3>
                  <Field
                    className="inputlastName"
                    type="lastName"
                    name="lastName"
                    placeholder="Nhập lastName"
                  />
                  <ErrorMessage
                    className="errorlastName"
                    name="lastName"
                    component="div"
                  />
                </div>
              </div>

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
    </div>
  );
};
