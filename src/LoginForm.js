import React from 'react';
import styles from './LoginForm.css';

const LoginForm = () => (
  <form className={styles.loginform} action="">
    <div className={styles.imgcontainer}>
      <img className={styles.avatar} src="avatar.png" alt="Avatar" />
    </div>

    <div className={styles.container}>
      <label htmlFor="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required />

      <label htmlFor="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required />

      <button type="submit">Login</button>
      <input type="checkbox" checked="checked" /> Remember me
    </div>

    <div className={styles.container} style={{ backgroundColor: '#f1f1f1' }}>
      <button className={styles.cancelbtn} type="button">Cancel</button>
      <span className={styles.psw}>Forgot <a href="">password?</a></span>
    </div>
  </form>
);

LoginForm.propTypes = {
};

export default LoginForm;
