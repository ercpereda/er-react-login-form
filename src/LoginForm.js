import React from 'react';
import classnames from 'classnames';
import styles from './LoginForm.css';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      usernameErrorMessage: '',
      passwordErrorMessage: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.validate = this.validate.bind(this);
    this.validateUsername = this.validateUsername.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.validate()) {
      this.props.onSubmit({
        username: this.state.username,
        password: this.state.password
      });
    }
  }

  updateUsername(e) {
    this.setState({ username: e.target.value });
  }

  updatePassword(e) {
    this.setState({ password: e.target.value });
  }

  validate() {
    const validUsername = this.validateUsername();
    const validPassword = this.validatePassword();

    return validUsername && validPassword;
  }

  validateUsername() {
    if (!this.state.username) {
      this.setState({ usernameErrorMessage: 'Username required' });
      return false;
    }

    this.setState({ usernameErrorMessage: '' });
    return true;
  }

  validatePassword() {
    if (!this.state.password) {
      this.setState({ passwordErrorMessage: 'Password required' });
      return false;
    }

    this.setState({ passwordErrorMessage: '' });
    return true;
  }

  render() {
    const usernameInputClass = classnames({
      [styles.error]: this.state.usernameErrorMessage
    });
    const passwordInputClass = classnames({
      [styles.error]: this.state.passwordErrorMessage
    });

    return (
      <form onSubmit={this.handleSubmit} className={styles.loginform}>
        <div className={styles.imgcontainer}>
          <img className={styles.avatar} src="avatar.png" alt="Avatar" />
        </div>

        <div className={styles.container}>
          <label htmlFor="uname"><b>Username</b></label>
          <input className={usernameInputClass} type="text" placeholder="Enter Username" name="uname" onChange={this.updateUsername} />
          <p className={styles.errorMessage}>{this.state.usernameErrorMessage}</p>

          <label htmlFor="psw"><b>Password</b></label>
          <input className={passwordInputClass} type="password" placeholder="Enter Password" name="psw" onChange={this.updatePassword} />
          <p className={styles.errorMessage}>{this.state.passwordErrorMessage}</p>

          <button type="submit">Login</button>
          <input type="checkbox" checked="checked" /> Remember me
        </div>

        <div className={styles.container} style={{ backgroundColor: '#f1f1f1' }}>
          <button className={styles.cancelbtn} type="button">Cancel</button>
          <span className={styles.psw}>Forgot <a href="">password?</a></span>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: React.PropTypes.func
};

export default LoginForm;
