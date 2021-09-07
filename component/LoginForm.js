import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import LoginErrorAlert from "./LoginErrorAlert";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [ errMsg ,setErrMsg ] =  useState( false )


  const validate = () => {
    if (email == null || password == null) {
      return false;
    } else {
      return true;
    }
  };
  const doLogin = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      axios
        .post("http://localhost:3005/login", { email, password })
        .then((response) => {
          console.log( response )
          if (response.data.authorized) {
            localStorage.setItem("savedToken", response.data.token);
            router.push("http://localhost:3000/mern-full-stack-development");
          }
        })
        .catch( err =>{
          if( err.response.data.authorized === false ){
            setErrMsg( true )
          }  
        }
        )
    }
  };

  return (
    <div className=" login-container p-5 ">
      { errMsg ? 
        <LoginErrorAlert setErrMsg={setErrMsg} />
        : null
        }
    
      <form onSubmit={doLogin}>
        <h6 className="text-4xl font-semibold pl-1 relative ">Login</h6>
        <div className="md:my-6 my-1 relative">
          <label className="" htmlFor="email">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            name="fullname"
            className="appearance-none rounded-md w-full py-4 px-3 my-2 contact-input-form  focus:outline-none focus:shadow-outline"
            placeholder="Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {/* <small className="text-red-600 absolute -bottom-3.5 left-0 ">
            {this.state.fullnameError}
          </small> */}
        </div>
        <div className="md:my-2 my-1 relative">
          <label className="" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="appearance-none rounded-md  contact-input-form w-full py-4 px-3 my-2  focus:outline-none focus:shadow-outline"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {/* <small className="text-red-600 absolute -bottom-3.5 left-0">
            {this.state.emailError}
          </small> */}
        </div>

        <button
          className="btn-still w-full xl:text-2xl lg:text-xl text-md font-extrabold py-3  px-6 lg:mt-8 mt-4 text-white rounded-md  shadow-var"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
