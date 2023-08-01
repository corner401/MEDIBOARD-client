import React from 'react';
import styles from '../css/login.module.css';

const LoginPage = () => {

  return (
    <div className={styles.login_stuff}>
        <div className={styles.overlay}></div>   
        <img src="./media/logo.png" alt="logo" id={styles.logo_img} /> 
        <div id={styles.signup_stuff}>            
            <h1 id={styles.service_name}> 서비스 명 </h1>  
            <h2 id={styles.login}>Login</h2>
            <div id={styles.box}>Email</div> 
            <div id={styles.box}>Password</div> 
            <a id={styles.sign_up_page} href="./signin.html">Sign Up</a>
        </div>
        <div id={styles.box_button}>Login </div> 
    </div>
  );
};

export default LoginPage;