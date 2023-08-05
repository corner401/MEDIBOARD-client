import React, { useState, useEffect } from "react";
import styles from '../css/signup.module.css';
import { Formik, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/action/userAction";

const SignupPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((store) => store.userReducer.userId);

  useEffect(() => {
    if (userId) {
      navigate("/");
    }
  }, []);  

  const submit = async (values) => {
    const { email, password, repassword, job } = values || {};


    if (password !== repassword) {
      alert("패스워드가 다릅니다.");
      return;
    }

    let userInfo = {
      email: email,
      password: password,
      job: job
    };

    dispatch(registerUser(userInfo)).then((response) => {
      console.log(response);
      if (response.payload) {
        alert("회원가입 성공");
        navigate("/");        
      }
    });
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        repassword: "",
        job: ""
      }}
      onSubmit={submit}
    >
      {({ values, handleSubmit, handleChange }) => (
        <div className={styles.page_container}>
          <div className={styles.container}>
            <div className={styles.overlay}></div>   {/*  반투명 배경 블록 */}
            <div className={styles.logo_box}>
              <img src="./media/logo.png" alt="logo" id={styles.logo_img} />  {/* 로고 이미지 */}
              <h1 id={styles.service_name}> MEDIBOARD </h1> 
            </div>
            
						<div id={styles.form_box}>
            	<form onSubmit={handleSubmit}>
                          
                <h2 id={styles.title}>Sign Up</h2>
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
                <input
                  className={styles.input_text}
                  type="password"
                  name="repassword"
                  placeholder="Rewrite Password"
                  id="repassword"
                  value={values.repassword}
                  onChange={handleChange} />

								<div id={styles.sub_title}>사용자 유형</div>
                <div id="job-group">
                  <div id={styles.job_group} role="group" aria-labelledby="job-group">
                    <label>
                      <Field type="radio" name="job" value="사업가" />
                      <img className={styles.radio_img} src="./media/Entrepreneur_check.png" alt="사업가" id="job_1" />
                    </label>
                    <label>
                      <Field type="radio" name="job" value="의료진" />
                      <img className={styles.radio_img} src="./media/Medical_staff_check.png" alt="의료진" id="job_2" /> 
                    </label>
                    <label>
                      <Field type="radio" name="job" value="환자" />
                      <img className={styles.radio_img} src="./media/Patient_check.png" alt="환자" id="job_3" /> 
                    </label>
                    <label>
                      <Field type="radio" name="job" value="기타" />
                      <img className={styles.radio_img} src="./media/Other_check.png" alt="기타" id="job_4" />
                    </label>
                    {/* <div>Picked: {values.job}</div> */}
                  </div>
                </div>
                <button type="submit" id={styles.submit_button}>Sign Up</button> 
              
            	</form>
						</div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SignupPage;
