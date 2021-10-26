import React from "react";
import { useState } from "react";

import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../Context/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handelGooglesignIn } = useAuth();
  const { logIn, error, setError } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const Redirect_url = location.state?.from || "/shop";

  const clickSigninBtn = () => {
    handelGooglesignIn()
      .then((result) => {
        history.push(Redirect_url);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const clickLogin = () => {
    logIn(email, password).then((result) => {
      history.push(Redirect_url);
    });
  };

  const emailFildValue = (e) => {
    setEmail(e.target.value);
  };
  const passwordFildValue = (e) => {
    setPassword(e.target.value);
  };

  const ClickLoginButton = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Should be getter than 6 charecter");
    }
    clickLogin();
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h2>Please Login</h2>
        <form onSubmit={ClickLoginButton}>
          <input
            onBlur={emailFildValue}
            type="email"
            placeholder="Enter Your Email "
          />
          <br />
          <br />
          <input
            onBlur={passwordFildValue}
            type="password"
            placeholder="Enter Your Password "
          />
          <br />
          <br />
          <input type="submit" value="Login" />
        </form>
        <h5>{error}</h5>
        <p>
          New to ema john? <Link to="/signup">Registresion</Link>
        </p>
        <button onClick={clickSigninBtn}>Sign in with Google</button>
      </div>
    </div>
  );
};

export default Login;
