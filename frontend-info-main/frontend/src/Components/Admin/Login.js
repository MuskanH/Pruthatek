import React,{useState} from 'react';
import Footer from '../Comon/Footer';
import Navbar from '../Comon/Navbar';
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'

function AdminLogin(props) {
    const [eyeIcon,seteyeIcon] = useState(true)
    const visiblePass = (e) =>{
        console.log(e);
        const userPassword = document.querySelector("#password")
        const type = userPassword.getAttribute('type') === 'password' ? 'text' : 'password'
        userPassword.setAttribute('type',type)
        seteyeIcon(!eyeIcon)
    }
    return (
        <>
            {/* <Navbar /> */}
            <div class="w-[30vw] box-border shadow-[0_15px_25px_rgba(0,0,0,0.5)] mx-auto my-[3vw] p-[4vw] rounded-[10px]
  bg-[#00000099]">
                <h2 className="text-center text-white  mt-0 mb-[2vw] mx-0 p-0">Admin Login</h2>
                <form action="">
                    <div class="relative">
                        <input className=" w-full text-base text-white tracking-[1px] mb-[30px] px-0 py-2.5 border-b-white border-[none] border-b border-solid outline-0 bg-transparent" type="text" id="username" required />
                        <label className="absolute tracking-[1px] text-base text-white transition-[0.5s] px-0 py-2.5 left-0 top-0" for="username">Username</label>
                    </div>
                    <div class="relative">
                        <input className=" w-full text-base text-white tracking-[1px] mb-[30px] px-0 py-2.5 border-b-white border-[none] border-b border-solid  outline-0 bg-transparent" type="password" id="password" required />
                        <label className="absolute tracking-[1px] text-base text-white transition-[0.5s] px-0 py-2.5 left-0 top-0" for="password">Password</label>
                        {eyeIcon ? <AiFillEye className="eye" onClick={visiblePass}/> : <AiFillEyeInvisible className="eye" onClick={visiblePass}/>  }
                    </div>
                    <button type="submit"  className="w-full text-[1.1vw] text-white cursor-pointer mt-[1.4vw] px-[1.5vw] py-[1vw] rounded-[5px] border-[none] outline-0  bg-[#227be3]">Log In</button>
                </form>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default AdminLogin;