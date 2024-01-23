import React, { useState, useRef, useEffect } from "react";
import { CgClose, CgList } from "react-icons/cg";
import list from "../BlogUpload/list.json";
import axios from "axios";
import "./Nav.css"
// import links from "./links.json"

const Navbar = ({ setTheme, theme, props }) => {
	const [blogData, setBlogData] = useState([]);

	// togglenav
	

	const [targetVisibility, setTargetVisibility] = useState(false);
	const [SelectedLinks, setSelectedLinks] = useState("");
	let selectedLinkIndex = useRef([]);
	let HeadersInLinks = useRef([]);

	

	function mainLinkFunctions(e) {


		let ad = document.querySelector("#selc");
	 
		let j = e.target.innerHTML;

		if (j == "Cars" || j == "Education" || j == "Money" || j == "News/Culture" || j == "Science" || j == "Tech" || j =="Wellness" || j == "Home" || j =="Other") {


			setTargetVisibility(true);
			setSelectedLinks(j);
			

		}
		else {
			setSelectedLinks('');
			setTargetVisibility(false);
		}
	}

	useEffect(() => {
		const fetchData = async () => {
		  try {
			const response = await axios.get(
			  process.env.REACT_APP_SERVER + `/blog/${HeadersInLinks.current}`
			);
			const fetchedBlogData = response.data;
			console.log(fetchedBlogData)
			setBlogData(fetchedBlogData);
		  } catch (error) {
			console.error("Error fetching blog data:", error);
		  }
		};
	
		fetchData();
	  }, []);

	  function mainHeaderFunctions(a) {
	 
		let tempObjectStore;

		links.map((element, index) => {

			if (element.select == a) {
	 
				HeadersInLinks.current = element.subl.Head;
				tempObjectStore = element.subl.slink;
			}
			else {

			}

		})

		selectedLinkIndex.current = tempObjectStore

	}


	// togglenav end



	const [search, setSearch] = useState('');
	const [results, setResults] = useState([]);

   const fetchData = (value) =>{
	fetch("https://jsonplaceholder.typicode.com/users")
	.then((response) => response.json())
	.then((json)=>{
		const filteredResults = json.filter((user)=>{
			return (
				value && user && user.name && user.name.toLowerCase().includes(value)
			);
		});
		setResults(filteredResults);
	});
   };

   const handleChange = (value)=>{
	   setSearch(value);
	   fetchData(value);
   }

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

	const links = 
	[
		{
			select: "Cars",
			submenu: true,
			subl:
			{
				Head: "Cars",
				slink: [
					{ name: "Blog one", link: "/Cars" },
				]
			}
		},

		{
			select: "Education",
			submenu: true,
			subl:
			{
				Head: "Education",
				slink: [
					{ name: "Blog one", link: "/Cars" },
					{ name: "Blog twothreefour", link: "/Cars" },
					{ name: "Blog twofivesix", link: "/Cars" },
					{ name: "Blog twoseven", link: "/Cars" },
					{ name: "Blog twoeightnine", link: "/Cars" },
					{ name: "Blog twoeleven", link: "/Cars" },
					{ name: "Blog two ", link: "/Cars" },
					{ name: "Blog two ", link: "/Cars" },
					{ name: "Blog two ", link: "/Cars" },
					{ name: "Blog two", link: "/Cars" },
				]
			}
		},

		{
			select: "Money",
			submenu: true,
			subl:
			{
				Head: "Money",
				slink: [
					{ name: "Blog one", link: "/Cars" },
					
				]
			}
		},

		{
			select: "News/Culture",
			submenu: true,
			subl:
			{
				Head: "News/Culture",
				slink: [
					{ name: "Blog one", link: "/Cars" },
					
				]
			}
		},
		{
			select: "Science",
			submenu: true,
			subl:
			{
				Head: "Science",
				slink: [
					{ name: "Blog one", link: "/Cars" },
					
				]
			}
		},
		{
			select: "Tech",
			submenu: true,
			subl:
			{
				Head: "Tech",
				slink: [
					{ name: "Blog one", link: "/Cars" },
					
				]
			}
		},
		{
			select: "Wellness",
			submenu: true,
			subl:
			{
				Head: "Wellness",
				slink: [
					{ name: "Blog one", link: "/Cars" },
					
				]
			}
		},
		{
			select: "Home",
			submenu: true,
			subl:
			{
				Head: "Home",
				slink: [
					{ name: "Blog one", link: "/Cars" },
					
				]
			}
		},
		{
			select: "Other",
			submenu: true,
			subl:
			{
				Head: "Other",
				slink: [
					{ name: "Blog one", link: "/Cars" },
					
				]
			}
		},
	]

    
	return (
		<div className="lg:px-4 sticky top-0 bg-white z-50 px-4 flex items-center justify-between  w-full dark:bg-[#101010]  py-4" >
			<div className="flex  items-center  gap-x-[10rem] gap-3">
				<a href="/" >
					<div className="flex flex-row justify-start -mr-[60px] items-center">
						<div className="w-40 ">
							<img src="/static/img/Pruthateknew.png" alt="" />
						</div>
						<div>
							<p className="lg:top-1 pt-0 relative dark:text-white text-[22px] font-Poppins ">.info</p>
						</div>
					</div>
				</a>

				<ul className="lg:flex flex-row  gap-x-10  whitespace-nowrap noscrollbar hidden">
					{/* {links.map((link, index) => (
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
										<a href={mysublinks.Head} className="text-[#f05225] text-[18px]  py-4">{mysublinks.Head}</a>
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
					))} */}

					
						{links.map((link) => {
						return (
							<>

								<div onClick={(e) => mainLinkFunctions(e)}  className="">
									<div id="parsele"
										className="text-[16px] cursor-pointer relative after:content-[''] after:w-0 after:h-[2px] after:absolute after:-bottom-[5px] after:left-0 after:bg-gradient-to-r after:from-[#f05225] after:to-[#eea820] after:transition-all after:duration-300 hover:after:w-full">
										{link.select}
									</div>


									<div id="selc" className={`${targetVisibility ? "" : "hid"}`}>
										<div className="fixed top-16 left-0 right-0 bottom-0" >

											<div className="text-black dark:text-white bg-white dark:bg-[#101010] border-2 border-x-transparent border-b-transparent border-t-[#f05225] text-start">
												<div className="pl-[316px] py-2">

													<div>
														<a href={HeadersInLinks.current} className="text-[#f05225] text-[20px]">

														{
																targetVisibility ? mainHeaderFunctions(SelectedLinks) : ""
															}
															{
																HeadersInLinks.current

															}


														</a>

														<div className="submenu grid text-black dark:text-white  grid-cols-4  gap-y-4 justify-between">
														{Object.keys(blogData).map((id, index)=>{
						                                  return(
															<a key={id} href={`blogs\?id=${blogData[index]["pk"]}`}>{blogData[index]["fields"]["title"]} </a>  
														  )
						                                   
												         })}

                                                              {/* {
																selectedLinkIndex.current.map((element) => {
																	return (
																		<>
																			<p>
																				{element.name}
																			</p>
																		</>
																	)
																})


															} */}
														</div>

													</div>

												</div>
											</div>
										</div>
									</div>

								</div>


							</>
						)

					}
					)


					}
				</ul>
				
			</div>
		
			
            <div className="flex flex-col">
			<div className="bg-gradient-to-r from-[#0038ff] via-[#3a86ff] to-[#6dccff] p-[2px] ml-[60px] md:ml-0 text-lg rounded-lg relative">
					<div className=" dark:bg-[#101010] bg-white rounded-md px-1 lg:px-3 py-0.5 flex items-center justify-center ">
						<div className="hidden lg:block" id="searchBox">
							<input
								type="text"
								placeholder="Search"
								value={search}
								className="lg:bg-transparent dark:bg-[#101010] bg-white rounded-lg pl-2 pr-10 lg:p-0 py-1 lg:py-0 outline-none"
								onChange={(e)=>handleChange(e.target.value)
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
								"cursor-pointer"
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
			<div className="results-list text-black dark:text-white dark:bg-[#101010] bg-white fixed top-16 ">
               {results.map((result, id)=>{
				return (
					<p className="result py-[6px] px-[10px]" key={id}>{result.name}</p>
				)
			   })}
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
