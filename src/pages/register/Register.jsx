import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Register.css";

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
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Mật khẩu phải có ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt"
    )
    .required("bắt buộc nhập"),
  passwordConfirmation: Yup.string()
    .required("bắt buộc nhập")
    .oneOf([Yup.ref("password")], "mật khẩu phải trùng khớp"),
});

const Register = () => {
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

    // 🔹 3️⃣ Lấy danh sách người dùng hiện có trong localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // 🔹 4️⃣ Kiểm tra xem email đã tồn tại chưa
    const userExists = existingUsers.some(
      (user) => user.email === values.email
    );

    if (userExists) {
      alert("❌ Email này đã được đăng ký trước đó!");
      setSubmitting(false);
      return;
    }

    // 🔹 5️⃣ Tạo đối tượng user mới (chỉ lưu các trường cần thiết)
    const newUser = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };

    // 🔹 6️⃣ Thêm user mới vào danh sách và lưu lại vào localStorage
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // 🔹 7️⃣ Thông báo & reset form
    setTimeout(() => {
      alert(
        `Bạn đã đăng ký thành công với:
        email: ${values.email} 
        password của bạn là: ${values.password}`
      );
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="content-register">
      <div className="register">
        <h2 className="dangky">Đăng Ký</h2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmation: "",
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

              {/* nhập lại Password */}
              <div className="passConfirmation">
                <h3 className="titlepassConfirmation">Nhập Lại Mật khẩu</h3>
                <Field
                  className="inputpassConfirmation"
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Nhập lại mật khẩu mật khẩu"
                />
                <ErrorMessage
                  className="errorpassConfirmation"
                  name="passwordConfirmation"
                  component="div"
                />
              </div>

              {/* Submit */}
              <button className="button" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Đang Đăng Ký..." : "Đăng Ký"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Register;
