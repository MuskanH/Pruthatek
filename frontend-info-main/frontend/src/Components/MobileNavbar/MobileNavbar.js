import React, { useState, useRef, useEffect } from "react";
import BlogList from '../BlogList/BlogList'
import list from "../BlogUpload/list.json";
import axios from "axios";

const MobileNavbar = () => {
	const [blogData, setBlogData] = useState([]);
	// togglenav


	const [targetVisibility, setTargetVisibility] = useState(false);
	const [SelectedLinks, setSelectedLinks] = useState("");
	let selectedLinkIndex = useRef([]);
	let HeadersInLinks = useRef([]);

  

	function mainLinkFunctions(e) {


		let ad = document.querySelector("#selc");
		let j = e.target.innerHTML;

		if (j == "Cars" || j == "Education" || j == "Money" || j == "News/Culture" || j == "Science" || j == "Tech" || j == "Wellness" || j == "Home" || j == "Other") {


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

	// const navbarLinks = [
	// 	["All", "#"],
	// 	["Cloud", "#"],
	// 	["Products", "#"],
	// 	["Mobile", "#"],
	// 	["Java", "#"],
	// 	["Big data & Bi", "#"],
	// 	["Software Devlopment", "#"],
	// 	["Ai", "#"],
	// 	["Other", "#"],
	// ]

	return (
		<div className='w-full h-screen fixed top-0 left-full overflow-y-hidden bg-white dark:bg-[#101010] px-4 py-3 block lg:hidden z-50 transition-all duration-300' id='mobileNavbar'>
			<div className='flex items-center justify-between'>
			<a href="/" >
				<div className="flex flex-row justify-start items-center">
					<div className="w-40 ">
					<img src="/static/img/Pruthateknew.png" alt="" />
					</div>
					<div>
					<p className="top-1  relative dark:text-white text-[22px] font-Poppins ">.info</p>
					</div>
					</div>
				</a>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={25}
					height={25}
					fill="currentColor"
					className="bi bi-x-lg cursor-pointer"
					viewBox="0 0 16 16"
					onClick={() => {
						document.getElementById("mobileNavbar").classList.add("left-full")
						document.getElementById("mobileNavbar").classList.remove("left-0")
					}}
				>
					<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
				</svg>
			</div>
			
			<div className='w-full h-full flex mt-10'>
				<ul className='flex flex-row overflow-x-scroll gap-5 relative'>
				{links.map((link) => {
						return (
							<>

								<div onClick={(e) => mainLinkFunctions(e)} className="">
									<div id="parsele"
										className="text-[16px] cursor-pointer">
										{link.select}
									</div>


									<div id="selc" className={`${targetVisibility ? "" : "hid"} `}>
										<div className="absolute bottom-0 left-0 right-0 top-10 " >

											<div className="pl-1">
												<div className="text-start">

													<div>
														<a href={HeadersInLinks.current} className="text-[#f05225] text-start text-[20px]">

															{
																targetVisibility ? mainHeaderFunctions(SelectedLinks) : ""
															}
															{
																HeadersInLinks.current

															}


														</a>

														<div className="submenu grid grid-cols-2 gap-y-2 justify-between">
															{Object.keys(blogData).map((id, index) => {
																if (blogData[index]["fields"].Category == SelectedLinks) {
																	return (
																		<a className="pt-[6px]" key={id} href={`blogs\?id=${blogData[index]["pk"]}`}>{blogData[index]["fields"]["title"]} </a>
																	)
																}
															})}
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
			
		</div>
	)
}

export default MobileNavbar