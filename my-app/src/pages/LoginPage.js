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
          <div className={styles.container}>
            <div className={styles.overlay}></div>   
            <div className={styles.logo_box}>
              <img src="./media/logo.png" alt="logo" id={styles.logo_img} /> 
              <h1 id={styles.service_name}> MEDIBOARD </h1>  
            </div>
                        
            <div id={styles.form_box}>            
              <form onSubmit={handleSubmit}>    
                <h2 id={styles.title}>Login</h2>
                <input
                  className={styles.input_text}
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="email"
                  value={values.email}
                  onChange={handleChange} />
                <input
                  className={styles.input_text}
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  value={values.password}
                  onChange={handleChange} />
                <div id={styles.sign_up_page}>
                  <a id={styles.link_text} href="./signup">Sign Up</a>
                </div>
                <button type="submit" id={styles.submit_button}>Login</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default LoginPage;
