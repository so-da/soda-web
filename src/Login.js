import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="login-box">
        <h2>Social Login Button</h2>
        <button className="social-button" id="facebook-connect"> <span>Connect with Facebook</span></button>
        <button className="social-button" id="google-connect"> <span>Connect with Google</span></button>
        <button className="social-button" id="twitter-connect"> <span>Connect with Twitter</span></button>
        <button className="social-button" id="linkedin-connect"> <span>Connect with LinkedIn</span></button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps)(Login);