import React, { useState } from 'react';
import '../../main.css';
import logo from '../../images/mindcaptor_logo1.png';
import { useHistory, withRouter, Link } from 'react-router-dom';

export default function Signin({ isOpen, close }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const emailInputValue = (e) => {
    setEmail(e.target.value);
  };

  const passwordInputValue = (e) => {
    setPassword(e.target.value);
  };

  const handleSignin = () => {
    history.push('/Waiting');
  };

  return (
    <>
      {isOpen ? (
        <div className="container_singin">
          <div className="signin">
            <div className="close">
              <span
                type="button"
                aria-label="Close"
                className="signin_exit"
                onClick={close}
              >
                &times;
              </span>
            </div>
            <div className="signin_box">
              <box className="logo_box">
                <img src={logo} className="logo"></img>
              </box>
              <input
                name="email"
                className="signin_input"
                type="text"
                placeholder="이메일"
                onChange={emailInputValue}
              />
              <input
                name="password"
                className="signin_input"
                type="password"
                placeholder="패스워드"
                onChange={passwordInputValue}
              />
              <button className="signin_btn" onClick={handleSignin}>
                로그인
              </button>
            </div>
            <div className="social_box">
              <div className="social_btn">구글</div>
              <div className="social_btn">카카오</div>
              <div className="social_btn">네이버</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}