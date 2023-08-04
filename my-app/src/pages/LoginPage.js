import React, { useState, useEffect } from "react";
import styles from '../css/login.module.css';
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/action/userAction";

const LoginPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((store) => store.userReducer.userId);


  useEffect(() => {
    if (userId) {
      navigate("/");
    }
  }, []);  

  const submit = async (values) => {
    const { email, password } = values || {};

    let userInfo = {
      email: email,
      password: password,
    };

    dispatch(loginUser(userInfo)).then((response) => {
      console.log(response);
      if (response.payload) {
        // 로그인 성공
        alert("로그인 성공");
        navigate("/");
      }
    });
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={submit}
    >
      {({ values, handleSubmit, handleChange }) => (
        <div className={styles.page_container}>
          <div className={styles.login_stuff}>
            <div className={styles.overlay}></div>   
            <img src="./media/logo.png" alt="logo" id={styles.logo_img} /> 
            <form onSubmit={handleSubmit}>
              <div id={styles.signup_stuff}>            
                <h1 id={styles.service_name}> MEDIBOARD </h1>  
                <h2 id={styles.login}>Login</h2>
                <input
                  className={styles.box}
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="email"
                  value={values.email}
                  onChange={handleChange} />
                <input
                  className={styles.box}
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  value={values.password}
                  onChange={handleChange} />
                <a id={styles.sign_up_page} href="./signup">Sign Up</a>
                <button type="submit" id={styles.box_button}>Login</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default LoginPage;