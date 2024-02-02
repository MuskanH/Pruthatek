import React, { useState, useRef, useEffect } from "react";
import { CgClose, CgList } from "react-icons/cg";
import list from "../BlogUpload/list.json";
import axios from "axios";
import "./Nav.css"

// import links from "./links.json"

const Navbar = ({ setTheme, theme, props }) => {
	const [blogData, setBlogData] = useState([]);

	const [searchBlog, setSearchBlog] = useState([]);
	const [category, setCategory] = useState([]);

	//language
	const [isScrolled, setIsScrolled] = useState();
	const [selectedLanguage, setSelectedLanguage] = useState("EN");

	window.onload = function () {


		// Google translate
		const googleTranslateElementInit = () => {
			new window.google.translate.TranslateElement(
				{
					pageLanguage: "en",
					autoDisplay: true,
				},
				"google_translate_element"
			);
		};
		var addScript = document.createElement("script");
		addScript.setAttribute("src", "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
		document.body.appendChild(addScript);
		window.googleTranslateElementInit = googleTranslateElementInit;
		setInterval(() => {
			try {

				document.getElementById(":1.container").style.transform = "scale(0)";
				document.getElementById(":1.container").parentElement.style.transform = "scale(0)";
				document.getElementsByTagName("body")[0].style.top = "0px";
				document.getElementById("google_translate_element").style.transform = "scale(0)";
			} catch (e) { }
		}, 500);
	};

	//language end

	// togglenav


	const [targetVisibility, setTargetVisibility] = useState(false);
	const [SelectedLinks, setSelectedLinks] = useState("");
	let selectedLinkIndex = useRef([]);
	let HeadersInLinks = useRef([]);



	function mainLinkFunctions(e) {
		let ad = document.querySelector("#selc");
		let j = e.target.innerHTML;

		if (j == "Cars" || j == "Education" || j == "Money" || j == "News/Culture" || j == "Science" || j == "Tech" || j == "Wellness" || j == "Home" || j == "Other" || j == "Voitures") {
			setTargetVisibility(!targetVisibility);
			setSelectedLinks(j); 
		}
		else {
			setTargetVisibility(targetVisibility);
			setSelectedLinks('');
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

	useEffect(() => {
		const fetchcat = async () => {
			try{
				const responsecat = await axios.get(
					process.env.REACT_APP_SERVER + "/blog/fetchcategory/"
				);
				const fetchcategorydata = responsecat.data;
				console.log(fetchcategorydata);
				setCategory(fetchcategorydata);
			}
			catch(error){
				console.log(error);
			}
		};
		fetchcat();
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
					<div className="flex flex-row justify-start -mr-[90px] items-center">
						<div className="w-40 ">
							<img src="/static/img/Pruthateknew.png" alt="" />
						</div>
						<div>
							<p className="lg:top-1 pt-0 relative dark:text-white text-[22px] font-Poppins ">.info</p>
						</div>
					</div>
				</a>

				<div className="lg:flex flex-row  gap-x-9  whitespace-nowrap noscrollbar hidden">
					{links.map((link) => {
						return (
							<>
								<div onClick={(e) => mainLinkFunctions(e)} className="relative">
									<div id="parsele"
										className="text-[16px] cursor-pointer relative after:content-[''] after:w-0 after:h-[2px] after:absolute after:-bottom-[5px] after:left-0 after:bg-gradient-to-r after:from-[#f05225] after:to-[#eea820] after:transition-all after:duration-300 hover:after:w-full">
										{link.select}
									</div>


									<div id="selc" className={`fixed top-16 left-0 right-0 bottom-0 text-black dark:text-white bg-white dark:bg-[#101010] drop-shadow-md border-2 border-x-transparent border-b-transparent border-t-[#f05225] text-start pl-[286px] py-2 transiction-all duration-300 h-fit max-h-[400px] ${targetVisibility? "scale-y-90 opacity-100" : "scale-y-0 opacity-0" }`}>
										<a href={HeadersInLinks.current} className="text-[#f05225] font-bold text-start text-[20px]">
											{
												targetVisibility ? mainHeaderFunctions(SelectedLinks) : ""
											}
											{
												HeadersInLinks.current
											}
										</a>

										<div className="submenu grid text-black dark:text-white  grid-cols-4 pt-3 gap-y-4 justify-between">
											{Object.keys(blogData).map((id, index) => {
												if (blogData[index]["fields"].Category == SelectedLinks) {
													return (
														<a key={id} href={`blogs\?id=${blogData[index]["pk"]}`}>{blogData[index]["fields"]["title"]} </a>
													)
												}
											})}
										</div>
									</div>

								</div>
							</>
						)}
					)}
				</div>

			</div>


			<div className="flex flex-col" onClick={() => {
				document.getElementById("languageOverlay").classList.add("scale-y-0");
				document.getElementById("languageOverlay").classList.add("opacity-0");
			}}>
				<div className="relative">
					<div className="bg-gradient-to-r from-[#0038ff] via-[#3a86ff] to-[#6dccff] p-[2px] lg:ml-[30px] md:ml-[50px] ml-[90px] text-lg rounded-lg relative">
						<div className=" dark:bg-[#101010] bg-white rounded-md px-1 lg:px-3 py-0.5 flex items-center justify-center ">
							<div className="hidden lg:block" id="searchBox">

								<input type="text" placeholder="Search" id="navSearchBar"
									onKeyUp={() => {
										let navSearchBar = document.getElementById("navSearchBar").value;

										if (navSearchBar.length > 0) {
											document.getElementById("searchOverlay").classList.remove("scale-y-0");
											document.getElementById("searchOverlay").classList.remove("opacity-0");
											axios.get(process.env.REACT_APP_SERVER + "/blog/searchDatabase/?searchQuery=" + navSearchBar).then((res) => {
												let data = res["data"]["data"];
												setSearchBlog(data["posts"]);
											});
										} else {
											document.getElementById("searchOverlay").classList.add("scale-y-0");
											document.getElementById("searchOverlay").classList.add("opacity-0");
										}
									}}
									className={"lg:bg-transparent dark:bg-[#101010] bg-white rounded-lg pl-2  dark:text-white text-black lg:p-0 py-1 lg:py-0 outline-none "}
								/>

								<CgClose
									className="lg:hidden absolute right-[6px] top-1/2 -translate-y-1/2 bg-white dark:bg-[#101010]"
									size={25}
									color={theme === "dark" ? "#ffffff" : "#000000"}
									onClick={() => {
										setSearchBlog([]);
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
												"block flex items-center justify-center gap-x-3  absolute top-[45px]  cursor-pointer p-[3px] rounded-lg bg-gradient-to-r from-[#0038ff] via-[#3a86ff] to-[#6dccff]"
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
							{/* Search icon svg end */}
						</div>
					</div>
					{/* Search Result */}
					<div id="searchOverlay" className="absolute md:top-[40px] top-24 md:right-0 md:w-[269px] w-[227px] scale-y-0 opacity-0 origin-top  mt-5 bg-white/90 backdrop-blur rounded-lg transition-all duration-300 shadow-lg z-50">
						{searchBlog.map((id, index) => (
							<a href={`blogs\?id=${searchBlog[index]["pk"]}`} key={id} className="flex items-center gap-8 px-2 py-2 border-b border-[rgba(166,166,166,0.3)] last-of-type:border-none">
								<div className="flex items-center gap-2">
									<a href={`blogs\?id=${searchBlog[index]["pk"]}`} key={id} className="text-black discriptionTruncate-1 text-kijeka-blue text-sm font-medium w-full">{searchBlog[index]["title"]}</a>
								</div>
							</a>
						))}


						{() => {
							if (searchBlog.length > 0) {
								return <hr />;
							}
						}}

					</div>
					{/* Search Result End*/}
				</div>

			</div>

			{/* Language selector */}
			<div className="absolute top-0 left-0 scale-0 -translate-y-[400%] w-0 h-0">
				<div id="google_translate_element"></div>
			</div>

			<div className="flex items-center gap-1 relative cursor-pointer">
				{/* language */}
				<div
					className="flex items-center gap-1"
					onClick={() => {
						document.getElementById("languageOverlay").classList.toggle("scale-y-0");
						document.getElementById("languageOverlay").classList.toggle("opacity-0");

					}}
					onBlur={() => {
						document.getElementById("languageOverlay").classList.add("scale-y-0");
						document.getElementById("languageOverlay").classList.add("opacity-0");
					}}
				>


					<svg width="22" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.9375 14.4556C9.39558 17.6218 10.4931 19.8517 11.7742 19.8517C13.0553 19.8517 14.1528 17.6218 14.6108 14.4556C13.7119 14.3439 12.7601 14.283 11.7742 14.283C10.7882 14.283 9.83642 14.3439 8.9375 14.4556Z" fill="#004B95" />
						<path d="M8.78352 9.23462C8.73446 9.85182 8.70801 10.4923 8.70801 11.151C8.70801 11.8096 8.73446 12.4501 8.78352 13.0673C9.73112 12.9524 10.7324 12.8915 11.7747 12.8915C12.817 12.8915 13.8182 12.9524 14.7658 13.0673C14.8149 12.4501 14.8413 11.8096 14.8413 11.151C14.8413 10.4923 14.8149 9.85182 14.7658 9.23462C13.8182 9.3495 12.817 9.41041 11.7747 9.41041C10.7324 9.41041 9.73112 9.3495 8.78352 9.23462Z" fill="#004B95" />
						<path d="M14.5586 19.4781C16.711 18.8852 18.5422 17.6244 19.7597 15.9604C18.8094 15.4281 17.5632 14.994 16.1234 14.7009C15.8451 16.586 15.3302 18.284 14.5586 19.4781Z" fill="#004B95" />
						<path d="M8.99013 19.4782C8.2181 18.2841 7.70366 16.5861 7.42536 14.7007C5.98556 14.9938 4.73896 15.4279 3.78906 15.9602C5.00691 17.6245 6.83771 18.8857 8.99013 19.4782Z" fill="#004B95" />
						<path d="M8.99013 2.82397C6.83771 3.41681 5.00653 4.67767 3.78906 6.34164C4.73935 6.8739 5.98556 7.308 7.42536 7.60111C7.70366 5.71609 8.21848 4.018 8.99013 2.82397Z" fill="#004B95" />
						<path d="M3.05237 14.7539C4.18512 14.1236 5.61687 13.6262 7.26482 13.305C7.20541 12.5957 7.17474 11.8728 7.17474 11.1506C7.17474 10.4284 7.20541 9.7055 7.26482 8.99653C5.61687 8.67528 4.18512 8.17757 3.05237 7.54761C2.50114 8.64569 2.19141 9.8649 2.19141 11.1506C2.19141 12.4363 2.50114 13.6555 3.05237 14.7539Z" fill="#004B95" />
						<path d="M11.7742 2.44946C10.4931 2.44946 9.39558 4.6794 8.9375 7.84557C9.83642 7.9573 10.7882 8.0182 11.7742 8.0182C12.7601 8.0182 13.7119 7.9573 14.6108 7.84557C14.1528 4.6794 13.0553 2.44946 11.7742 2.44946Z" fill="#004B95" />
						<path d="M20.4966 7.54736C19.3639 8.17768 17.9321 8.67503 16.2842 8.99628C16.3436 9.7056 16.3743 10.4285 16.3743 11.1507C16.3743 11.8729 16.3436 12.5958 16.2842 13.3047C17.9321 13.626 19.3639 14.1237 20.4966 14.7537C21.0479 13.6556 21.3576 12.4364 21.3576 11.1507C21.3576 9.86501 21.0479 8.6458 20.4966 7.54736Z" fill="#004B95" />
						<path d="M14.5586 2.82397C15.3306 4.018 15.8451 5.71609 16.1234 7.60146C17.5632 7.30835 18.8098 6.87426 19.7597 6.34199C18.5418 4.67767 16.711 3.41646 14.5586 2.82397Z" fill="#004B95" />
					</svg>




					<p className="text-kijeka-blue  hidden md:block" >{selectedLanguage}</p>


					<svg width="10" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block">
						<path d="M5.55998 8.76855L10.5087 0.986159H0.61127L5.55998 8.76855Z" fill="#004B95" />
					</svg>


				</div>
				{/* languageoverlay */}
				<div
					className="bg-white/70 backdrop-blur absolute top-10 md:-left-[50%] -left-[170%] scale-y-0 opacity-0 origin-top transition-all duration-300 w-max min-w-[100px] rounded-lg"
					id="languageOverlay"
					onMouseLeave={() => {
						document.getElementById("languageOverlay").classList.add("scale-y-0");
						document.getElementById("languageOverlay").classList.add("opacity-0");
					}}
				>
					<p
						onClick={() => {
							let language = "en";
							let elementGoogle = document.getElementById("google_translate_element");
							elementGoogle.getElementsByTagName("select")[0].value = language;
							elementGoogle.getElementsByTagName("select")[0].dispatchEvent(new Event("change"));
							document.getElementById(":1.container").style.transform = "scale(0)";
							document.getElementById("google_translate_element").style.transform = "scale(0)";
							setSelectedLanguage("EN");
						}}
						className="px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:tracking-[1px] text-kijeka-blue cursor-pointer text-sm font-medium"
					>
						English
					</p>
					<p
						onClick={() => {
							let language = "fr";
							let elementGoogle = document.getElementById("google_translate_element");
							elementGoogle.getElementsByTagName("select")[0].value = language;
							elementGoogle.getElementsByTagName("select")[0].dispatchEvent(new Event("change"));
							document.getElementById(":1.container").style.transform = "scale(0)";
							document.getElementById("google_translate_element").style.transform = "scale(0)";
							setSelectedLanguage("FR");
						}}
						className="px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:tracking-[1px] text-kijeka-blue cursor-pointer text-sm font-medium"
					>
						French
					</p>

					<p
						onClick={() => {
							let language = "zh-CN";
							let elementGoogle = document.getElementById("google_translate_element");
							elementGoogle.getElementsByTagName("select")[0].value = language;
							elementGoogle.getElementsByTagName("select")[0].dispatchEvent(new Event("change"));
							document.getElementById(":1.container").style.transform = "scale(0)";
							document.getElementById("google_translate_element").style.transform = "scale(0)";
							setSelectedLanguage("CH");
						}}
						className="px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:tracking-[1px] text-kijeka-blue cursor-pointer text-sm font-medium"
					>
						Chinese
					</p>
					<p
						onClick={() => {
							let language = "ar";
							let elementGoogle = document.getElementById("google_translate_element");
							elementGoogle.getElementsByTagName("select")[0].value = language;
							elementGoogle.getElementsByTagName("select")[0].dispatchEvent(new Event("change"));
							document.getElementById(":1.container").style.transform = "scale(0)";
							document.getElementById("google_translate_element").style.transform = "scale(0)";
							setSelectedLanguage("AR");
						}}
						className="px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:tracking-[1px] text-kijeka-blue cursor-pointer text-sm font-medium"
					>
						Arabic
					</p>
				</div>
			</div>
			{/* Language selector end */}
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
