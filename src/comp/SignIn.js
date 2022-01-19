import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
import '../styles/signInStyles.scss';
// import axios from 'axios';
// import { alert, successAlert } from '../helpers/alerts';
// import registValidation from '../helpers/validation';

export default function SignIn() {
  //All useRef
  const loginUser = useRef(null);
  const loginPass = useRef(null);
  const RegistUser = useRef(null);
  const RepeatPass = useRef(null);
  const RegistPass = useRef(null);
  const RegistEmail = useRef(null);

  return (
    <div className="signIn-page">
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            checked
          />
          <label for="tab-1" className="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label for="tab-2" className="tab">
            Sign Up
          </label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label for="username" className="label">
                  Username
                </label>
                <input
                  ref={loginUser}
                  id="username"
                  type="text"
                  className="input"
                />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Password
                </label>
                <input
                  ref={loginPass}
                  type="password"
                  className="input"
                  data-type="password"
                />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign In" />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            <div className="sign-up-htm">
              <div className="group">
                <label for="user" className="label">
                  Username
                </label>
                <input
                  ref={RegistUser}
                  id="user"
                  type="text"
                  className="input"
                />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Password
                </label>
                <input
                  ref={RegistPass}
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Repeat Password
                </label>
                <input
                  ref={RepeatPass}
                  type="password"
                  className="input"
                  data-type="password"
                />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Email Address
                </label>
                <input ref={RegistEmail} type="text" className="input" />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign Up" />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <label for="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
