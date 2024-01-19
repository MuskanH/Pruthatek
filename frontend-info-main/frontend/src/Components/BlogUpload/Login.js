import React, { useState } from "react";
import Footer from "../Comon/Footer";
import Navbar from "../Comon/Navbar";
import axios from 'axios';
import "./Login.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const [eyeIcon, seteyeIcon] = useState(true);
  const visiblePass = (e) => {
    console.log(e);
    const userPassword = document.querySelector("#password");
    const type =
      userPassword.getAttribute("type") === "password" ? "text" : "password";
    userPassword.setAttribute("type", type);
    seteyeIcon(!eyeIcon);
  };

  const login = async (e, username, password) => {
    e.preventDefault();

    try {
      const response = await axios.post(process.env.REACT_APP_SERVER + "/blog_upload/login", {
        username: username,
        pass1: password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      );
      const token = response.data.token;
      localStorage.setItem('username', username);
      if(response.status === 200){
        navigate('/admin/blogupload')
      }
      // Store the token or perform other actions
    } catch (error) {
      // Handle login error
    }



    
  };



  return (
    <>
      {/* <Navbar /> */}

      <div
        className={
          "lg:mx-[34vw] md:mx-[28vw] mx-10 my-[2vw] p-[4vw] rounded-xl shadow-2xl dark:shadow-none " +
          (props.theme === "light" ? "glassmorphism-2" : "glassmorphism")
        }
      >
        <h2 className="text-center text-black dark:text-white mt-0 mb-[2vw] mx-0 p-0">
          Login
        </h2>
        <form action="" onSubmit={(e) => login(e, username, password)}>
          <div className="relative my-8">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="peer bg-transparent outline-none w-full pb-2.5 border-b dark:border-white border-black loginInputs"
              autocomplete="off"
              autofocus
              required
            />
            <label
              className="absolute pointer-events-none left-0 top-0 tracking-[1px] transition-all duration-300 loginLabels"
              htmlFor="username"
            >
              Username
            </label>
          </div>
          <div className="relative my-8">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer bg-transparent outline-none w-full pb-2.5 border-b dark:border-white border-black loginInputs"
              autocomplete="off"
              autofocus
              required
            />
            <label
              className="absolute pointer-events-none left-0 top-0 tracking-[1px] transition-all duration-300 loginLabels"
              htmlFor="password"
            >
              Password
            </label>
            {eyeIcon ? (
              <AiFillEye
                className="absolute text-black dark:text-white top-1.5 right-0"
                onClick={visiblePass}
              />
            ) : (
              <AiFillEyeInvisible
                className="absolute text-black dark:text-white top-1.5 right-0"
                onClick={visiblePass}
              />
            )}
          </div>
          <a href="/">
            <button
              type="submit"
              className="w-full lg:text-[1.1vw] text-white cursor-pointer mt-[1.4vw] px-[1.5vw] py-[1vw] rounded-[5px] border-[none] outline-0 bg-gradient-to-r from-[#F05225] to-[#EEA820] transition-[500ms] "
            >
              Log In
            </button>
          </a>
        </form>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Login;
