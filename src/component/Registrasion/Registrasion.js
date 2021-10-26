import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import useAuth from '../Context/useAuth';

const Registrasion = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password,setPassword]=useState("")
  const {
    user,
    handelGooglesignIn,
    RegistresionByemailPassword,
    setError,
    error,
   
  } = useAuth();
  const handelChangeEmailfild = (e) => {
    setEmail(e.target.value)
  }
  const handelChangeNamefild = (e) => {
    setName(e.target.value)
  }
  const handelChangePasswordfild = (e) => {
    setPassword(e.target.value)
  }



  const submitForm = (e) => {
    e.preventDefault()


    if (password.length < 6) {
      setError("Password Should be getter than 6 charecter")
    }
    RegistresionByemailPassword(email, password, name)
    
}


    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <h2>Please Registrasion</h2>
          <form onSubmit={submitForm}>
            <input onBlur={handelChangeNamefild} type="text" placeholder="Enter Your Name " />
            <br />
            <br />
            <input onBlur={handelChangeEmailfild} type="email" placeholder="Enter Your Email " />
            <br />
            <br />
            <input onBlur={handelChangePasswordfild} type="password" placeholder="Enter Your Password " />
            <br />
            <br />
            <input type="submit" value="Registrasion" />
                </form>
          <h5>{error}</h5>
                <p>Already register? <Link to="/login"> Login</Link></p>
                <button onClick={()=>handelGooglesignIn()} >Sign in with Google</button>
        </div>
      </div>
    );
};

export default Registrasion;