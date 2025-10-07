import React, { useEffect } from "react";
import $ from "jquery";
import "./Login.css";

function Login() {
  useEffect(() => {
    // code jQuery chạy sau khi component mount
    $("form").on("submit", function (e) {
      e.preventDefault(); // ngăn form submit reload page

      const getName = $("input.name").val();
      const getEmail = $("input.email").val();

      if (!getName) {
        $("p#name").text("Vui Lòng Nhập Họ Và Tên");
      } else {
        $("p#name").text("");
      }

      if (!getEmail) {
        $("p#email").text("Vui Lòng Nhập Địa Chỉ Email");
      } else {
        $("p#email").text("");
      }

      if (getEmail && getName) {
        alert("đăng nhập thành công");
      }
    });

    // Cleanup khi component unmount
    return () => {
      $("form").off("submit");
    };
  }, []);

  return (
    <form>
      <div className="login">
        <div>
          <input className="name" placeholder="Họ và Tên" />
          <p className="text_name" id="name" style={{ color: "red" }}></p>
        </div>
        <div>
          <input className="email" placeholder="Email" />
          <p className="text_email" id="email" style={{ color: "red" }}></p>
        </div>
        <button className="button_login" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
