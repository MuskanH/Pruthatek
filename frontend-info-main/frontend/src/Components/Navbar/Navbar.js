import React, { useState } from "react";
import { CgClose, CgList } from "react-icons/cg";
import list from "../BlogUpload/list.json";


const Navbar = ({ setTheme, theme, props }) => {

	const [search, setSearch] = useState('');
	const navbarLinks = [
		["Cars", "#"],
		["Education", "#"],
		["Wellness", "#"],
		["Tech", "#"],
		["Science", "#"],
		["News & Culture", "#"],
		["Money", "#"],
		["Home", "#"],
		["Other", "#"],
	];

	


	const [targetVisibility, setTargetVisibility] = useState({});

	const handleTriggerClick = (index) => {
		setTargetVisibility(prevVisibility => ({
		  ...prevVisibility,
		  [index]: !prevVisibility[index] // Toggle visibility for the clicked index
		}));
	  };

	const links = [
		{
			select: "Cars",
			submenu: true,
			sublinks: [{ Head: "Cars", sublink: [
				{ name: "Blog one", link: "/Cars" },
			    { name: "Blog twothreefour", link: "/Cars" },
				{ name: "Blog twofivesix", link: "/Cars" },
				{ name: "Blog twoseven", link: "/Cars" },
				{ name: "Blog twoeightnine", link: "/Cars" },
				{ name: "Blog twoeleven", link: "/Cars" },
				{ name: "Blog two", link: "/Cars" },
				{ name: "Blog two", link: "/Cars" },
				{ name: "Blog two", link: "/Cars" },
				{ name: "Blog two", link: "/Cars" },
				
			
			] }]
		},

		{
			select: "Education",
			submenu: true,
			sublinks: [{ Head: "Education", sublink: [

				{ name: "Blog one", link: "/Education" },
			    { name: "Blog twothreefour", link: "/Education" },
				{ name: "Blog twofivesix", link: "/Education" },
				{ name: "Blog twoseven", link: "/Education" },
				{ name: "Blog twoeightnine", link: "/Education" },
				{ name: "Blog twoeleven", link: "/Education" },
				{ name: "Blog two", link: "/Education" },
				{ name: "Blog two", link: "/Education" },
				{ name: "Blog two", link: "/Education" },
				{ name: "Blog two", link: "/Education" },
			] }]
		},

		{
			select: "Money",
			submenu: true,
			sublinks: [{ Head: "Money", sublink: [{ name: "Blog one" }] }]
		},

		{
			select: "News & Culture",
			submenu: true,
			sublinks: [{ Head: "News & Culture", sublink: [{ name: "Blog one" }] }]
		},
		{
			select: "Science",
			submenu: true,
			sublinks: [{ Head: "Science", sublink: [{ name: "Blog one" }] }]
		},
		{
			select: "Tech",
			submenu: true,
			sublinks: [{ Head: "Tech", sublink: [{ name: "Blog one" }] }]
		},
		{
			select: "Wellnes",
			submenu: true,
			sublinks: [{ Head: "Wellness", sublink: [{ name: "Blog one" }] }]
		},
		{
			select: "Home",
			submenu: true,
			sublinks: [{ Head: "Home", sublink: [{ name: "Blog one" }] }]
		},
		{
			select: "Other",
			submenu: true,
			sublinks: [{ Head: "Other", sublink: [{ name: "Blog one" }] }]
		},
	]

    

	return (
		<div className="lg:px-4 sticky top-0 bg-white  z-50 px-4 flex items-center justify-between  w-full dark:bg-[#101010]  py-4" >
			<div className="flex  items-center  gap-x-[10rem] gap-3">
				<a href="/" >
					<div className="flex flex-row justify-start items-center">
						<div className="w-40 ">
							<img src="/static/img/Pruthateknew.png" alt="" />
						</div>
						<div>
							<p className="lg:top-1 pt-0 relative dark:text-white text-[22px] font-Poppins ">.info</p>
						</div>
					</div>
				</a>

				<ul className="lg:flex flex-row  justify-center  items-center gap-x-10  whitespace-nowrap noscrollbar hidden">
					{links.map((link, index) => (
						<div key={index} onClick={() => handleTriggerClick(index)} className="trigger">
							
							<div
								className="trigger text-[16px] cursor-pointer relative after:content-[''] after:w-0 after:h-[2px] after:absolute after:-bottom-[5px] after:left-0 after:bg-gradient-to-r after:from-[#f05225] after:to-[#eea820] after:transition-all after:duration-300 hover:after:w-full">

								{link.select}

							</div>
							


								<div key={index}>
									 <div className={targetVisibility[index] ? "target fixed top-16 left-0 right-0 bottom-0" : "hidden"}>
									<div className="text-black dark:text-white  bg-white dark:bg-[#101010] border-2 border-x-transparent border-b-transparent border-t-[#f05225] text-start">
									<div className="pl-[374px]">	
									{link.sublinks.map((mysublinks) => (
									<div>
										<h1 className="text-[#f05225] text-[20px] py-4">{mysublinks.Head}</h1>
										<div className="grid grid-cols-4  gap-y-4 justify-between">
										{mysublinks.sublink.map((slink) => (
											
											<li>{slink.name}</li>
											
										))}
										</div>
									</div>
								))}
								</div>
                                    </div>
                                   </div>
								</div>
							
						</div>
					))}
				</ul>
				
			</div>
		
			

			<div className="bg-gradient-to-r from-[#0038ff] via-[#3a86ff] to-[#6dccff] p-[2px] text-lg rounded-lg relative">
					<div className=" dark:bg-[#101010] bg-white rounded-md px-1 lg:px-3 py-0.5 flex items-center justify-center ">
						<div className="hidden lg:block" id="searchBox">
							<input
								type="text"
								placeholder="Search"
								className="lg:bg-transparent dark:bg-[#101010] bg-white rounded-lg pl-2 pr-10 lg:p-0 py-1 lg:py-0 outline-none"
								onChange={(e)=>setSearch(e.target.value)
							}
							/>
							<CgClose
								className="lg:hidden absolute right-[6px] top-1/2 -translate-y-1/2 bg-white dark:bg-[#101010]"
								size={25}
								color={theme === "dark" ? "#ffffff" : "#000000"}
								onClick={() => {
									document
										.getElementById("searchBox")
										.setAttribute("class", "hidden");
								}}
							/>
						</div>
						{/* Search icon svg */}
						<div
							className={
								"cursor-pointer "
							}
							onClick={() => {
								if (window.innerWidth < 640) {
									document
										.getElementById("searchBox")
										.setAttribute(
											"class",
											"block flex items-center justify-center gap-x-3 absolute top-[45px] right-0 cursor-pointer p-[3px] rounded-lg bg-gradient-to-r from-[#0038ff] via-[#3a86ff] to-[#6dccff]"
										);
								} else {
									document
										.getElementById("searchBox")
										.setAttribute("class", "block");
								}
							}}
						>
							<svg
								width="22"
								height="21"
								viewBox="0 0 22 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle
									cx="8.65871"
									cy="7.92366"
									r="6.76271"
									stroke="url(#paint0_linear_1148_5902)"
									stroke-width="2"
								/>
								<path
									d="M15.4214 14.6865L20.896 19.839"
									stroke="url(#paint1_linear_1148_5902)"
									stroke-width="2"
									stroke-linecap="round"
								/>
								<defs>
									<linearGradient
										id="paint0_linear_1148_5902"
										x1="6.60191"
										y1="9.45887"
										x2="-2.70468"
										y2="3.4708"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#0038FF" />
										<stop offset="0.526042" stop-color="#3A86FF" />
										<stop offset="1" stop-color="#6DCCFF" />
									</linearGradient>
									<linearGradient
										id="paint1_linear_1148_5902"
										x1="17.3262"
										y1="17.8476"
										x2="13.6962"
										y2="15.366"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#0038FF" />
										<stop offset="0.526042" stop-color="#3A86FF" />
										<stop offset="1" stop-color="#6DCCFF" />
									</linearGradient>
								</defs>
							</svg>
						</div>
					</div>
				</div> 

				<div className="flex px-3 items-center gap-5">
				<div className="cursor-pointer">
					{theme === "light" ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={20}
							height={20}
							fill={theme === "dark" ? "#ffffff" : "#000000"}
							className="bi bi-moon-fill"
							viewBox="0 0 16 16"
							onClick={() => {
								setTheme(theme === "dark" ? "light" : "dark");
							}}
						>
							<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={22}
							height={22}
							fill={theme === "dark" ? "#ffffff" : "#000000"}
							className="bi bi-brightness-high-fill"
							viewBox="0 0 16 16"
							onClick={() => {
								setTheme(theme === "dark" ? "light" : "dark");
							}}
						>
							<path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
						</svg>
					)}
				</div>

				<div className="cursor-pointer block lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={25}
						height={25}
						fill="currentColor"
						className="bi bi-list"
						viewBox="0 0 16 16"
						onClick={() => {
							document
								.getElementById("mobileNavbar")
								.classList.remove("left-full");
							document.getElementById("mobileNavbar").classList.add("left-0");
						}}
					>
						<path
							fillRule="evenodd"
							d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
