import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
// import { FaXTwitter } from "react-icons/fa6";
// import { BsTwitterX } from "react-icons/bs";
import './Footer.css'
function Footer({ theme }) {
	
	return (
		<div className="flex justify-between flex-col lg:flex-row w-full p-10 lg:px-14 px-10 dark:bg-black bg-white">
			<a href="/" >
				<div className="flex flex-row justify-center items-center">
					<div className="w-32 lg:pb-2">
						<img src="/static/img/Pruthateknew.png" alt="" />
					</div>
					<div>
						<p className="lg:pb-1  lg:pt-0 md:pt-2 pt-1 dark:text-white text-[22px] font-Poppins ">.info</p>
					</div>
				</div>
				{/* <div className="flex flex-row justify-center items-center">
					<div className="w-44 lg:pb-1">
					<img src="/img/Pruthateknew.png" alt="" />
					</div>
					<div>
						<p className="pt-4 text-[12px]">.info</p>
					</div>
					</div> */}
			</a>
			<div className="my-5 lg:my-0">
				<h2 className="font-semibold lg:text-[1vw]">ABOUT</h2>
				<a className='lg:text-[1vw] block my-[1.3vw] dark:bg-white bg-black bg-clip-text text-transparent tracking-widest hover:bg-gradient-to-r hover:from-[#ffe32d] hover:to-[#ff6d2d] transition-all duration-300' href="#">About Company</a>
				<a className='lg:text-[1vw] block my-[1.3vw] dark:bg-white bg-black bg-clip-text text-transparent tracking-widest hover:bg-gradient-to-r hover:from-[#ffe32d] hover:to-[#ff6d2d] transition-all duration-300' href="#">Newsletter</a>
				<a className='lg:text-[1vw] block my-[1.3vw] dark:bg-white bg-black bg-clip-text text-transparent tracking-widest hover:bg-gradient-to-r hover:from-[#ffe32d] hover:to-[#ff6d2d] transition-all duration-300' href="#">Sitemap</a>
				<a className='lg:text-[1vw] block my-[1.3vw] dark:bg-white bg-black bg-clip-text text-transparent tracking-widest hover:bg-gradient-to-r hover:from-[#ffe32d] hover:to-[#ff6d2d] transition-all duration-300' href="#">Carrers</a>
				<a className='lg:text-[1vw] block my-[1.3vw] dark:bg-white bg-black bg-clip-text text-transparent tracking-widest hover:bg-gradient-to-r hover:from-[#ffe32d] hover:to-[#ff6d2d] transition-all duration-300' href="#">Help Center</a>
				<a className='lg:text-[1vw] block my-[1.3vw] dark:bg-white bg-black bg-clip-text text-transparent tracking-widest hover:bg-gradient-to-r hover:from-[#ffe32d] hover:to-[#ff6d2d] transition-all duration-300' href="#">Licensing</a>
			</div>
			<div className="mb-5 lg:mb-0">
				<h2 className="font-semibold lg:text-[1vw]">POLICIES</h2>
				<a className='lg:text-[1vw] block my-[1.3vw] dark:bg-white bg-black bg-clip-text text-transparent tracking-widest hover:bg-gradient-to-r hover:from-[#ffe32d] hover:to-[#ff6d2d] transition-all duration-300' href="#">Privacy Policy</a>
				<a className='lg:text-[1vw] block my-[1.3vw] dark:bg-white bg-black bg-clip-text text-transparent tracking-widest hover:bg-gradient-to-r hover:from-[#ffe32d] hover:to-[#ff6d2d] transition-all duration-300' href="#">Term of Use</a>
				<a className='lg:text-[1vw] block my-[1.3vw] dark:bg-white bg-black bg-clip-text text-transparent tracking-widest hover:bg-gradient-to-r hover:from-[#ffe32d] hover:to-[#ff6d2d] transition-all duration-300' href="#">Cookie Settings</a>
				<a className='lg:text-[1vw] block my-[1.3vw] dark:bg-white bg-black bg-clip-text text-transparent tracking-widest hover:bg-gradient-to-r hover:from-[#ffe32d] hover:to-[#ff6d2d] transition-all duration-300' href="#">Do Not Sell My Information</a>
			</div>
			<div className="lg:w-[16vw]">
				<h2 className="font-semibold lg:text-[1vw]">FOLLOW</h2>
				<div className="flex justify-between flex-row lg:text-[1.7vw] mt-[2vw]">
					<FaFacebookF className="hover:cursor-pointer hover:translate-y-[-5px] hover:text-[rgb(0,38,255)] transition-transform duration-[600ms]" title="visit our Facebook Page" />
					<FaInstagram className="hover:cursor-pointer hover:translate-y-[-5px] hover:text-[rgb(255,0,200)] transition-transform duration-[600ms]" title="visit our Instagram Page" />
					<FaLinkedin className="hover:cursor-pointer hover:translate-y-[-5px] hover:text-[rgb(0,38,255)] transition-transform duration-[600ms]" title="visit our LinkedIn Page" />
					{/* {theme === "light" ? (
						<svg
							width="12" height="12" viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg"
							fill={theme === "dark" ? "#ffffff" : "#000000"}
							className="bi bi-moon-fill"
							onClick={() => {
								setTheme(theme === "dark" ? "light" : "dark");
							}}
						>
							<path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="white" />
						</svg>
					) : (
						<svg
							width="12" height="12" viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg"
							fill={theme === "dark" ? "#ffffff" : "#000000"}
							className="bi bi-brightness-high-fill"
							onClick={() => {
								setTheme(theme === "dark" ? "light" : "dark");
							}}
						>
							<path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="white" />
						</svg>
					)} */}
					{/* <FaXTwitter className="hover:cursor-pointer hover:translate-y-[-5px] hover:text-[rgb(0,38,255)] transition-transform duration-[600ms]" title="visit our LinkedIn Page" /> */}
					{ 
					 theme === "light" ? (
						<img
						src="/static/img/logoblack.png"
						className="md:w-[10%] md:h-[10%]  w-[6%] h-[6%]"
						alt="White Theme"
					  />
) : (
	<img
	src="/static/img/logoblack.png"
	className="md:w-[10%] md:h-[10%] w-[5%] h-[5%] filter brightness-0 invert"
	alt="White Theme"
  />

//   <img
//     src="/static/img/logo.svg"
//     className="w-[10%] h-[10%] filter brightness-0 invert"
//     alt="White Theme"
//   />
)}
					{/* <img src='/static/img/logowhite.png' className='w-[10%] h-[10%] light:text-black  ' /> */}
					{/* <img src='/static/img/logoblack.png' className='w-[10%] h-[10%]  ' /> */}
					{/* <BsTwitterX className="hover:cursor-pointer hover:translate-y-[-5px] hover:text-[rgb(0,38,255)] transition-transform duration-[600ms]" title="visit our Twitter Page" /> */}
					<FaYoutube className="hover:cursor-pointer hover:translate-y-[-5px] hover:text-red-500 transition-transform duration-[600ms]" title="visit our Youtube Page" />
				</div>
				<p className="lg:text-[1.1vw] mt-[3vw]">&copy; 2023 PruthaTek.info . All rights reserved .</p>
			</div>
		</div>
	);
}

export default Footer;