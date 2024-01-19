import React from 'react';
import Footer from '../Comon/Footer';
import Navbar from '../Comon/Navbar';
import './verification.css'
import { MdOutlineCancel } from 'react-icons/md'

const Verification = (props) => {
	const disappear = () => {
		document.getElementById("otp-sent-msg").classList.add("-translate-x-[200%]")
	}
	return (
		<>
			{/* <Navbar /> */}
			<div className={
				"lg:mx-[34vw] md:mx-[28vw] mx-10 my-[2vw] p-[4vw] rounded-xl overflow-hidden transition-all duration-300 " +
				(props.theme === "light" ? "glassmorphism-2" : "glassmorphism")
			}>
				<div className="bg-[rgba(4,128,0,0.329)] text-[green] flex justify-between items-center p-[1vw] rounded-[5px] transition-all duration-300" id='otp-sent-msg'>
					<p className="otp-sent text-sm md:tex-base"><span className="font-bold">Message:</span> OTP Sent On your Mail id</p>
					<MdOutlineCancel className='cursor-pointer' onClick={() => {
						document.getElementById("otp-sent-msg").classList.add("scale-0", "opacity-0")
						setTimeout(() => {
							document.getElementById("otp-sent-msg").classList.add("hidden")
							document.getElementById("resendOTPBtn").classList.remove("hidden")
						}, 300)
					}} />
				</div>
				<div className='transition-all duration-300 text-center hidden' id='resendOTPBtn' onClick={() => {
					document.getElementById("otp-sent-msg").classList.remove("hidden")
					document.getElementById("resendOTPBtn").classList.add("hidden")
					setTimeout(() => {
						document.getElementById("otp-sent-msg").classList.remove("scale-0", "opacity-0")
					}, 300)
				}}>
					<p className='cursor-pointer w-fit mx-auto'>Resend OTP</p>
				</div>
				<div className="relative my-8">
					<input type="text" id="OTP" className="peer bg-transparent outline-none w-full pb-2.5 border-b dark:border-white border-black loginInputs" autocomplete="off" autofocus required />
					<label className="absolute pointer-events-none left-0 top-0 tracking-[1px] transition-all duration-300 loginLabels" htmlFor='OTP'>Enter OTP</label>
				</div>
				<button type="submit" className="w-full lg:text-[1.1vw] text-white cursor-pointer mt-[1.4vw] px-[1.5vw] py-[1vw] rounded-[5px] border-[none] outline-0 bg-gradient-to-r from-[#F05225] to-[#EEA820] transition-[500ms]">Verify</button>
			</div>
			{/* <Footer /> */}
		</>
	);
}

export default Verification;