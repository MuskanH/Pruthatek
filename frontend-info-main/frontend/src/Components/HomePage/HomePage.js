import BlogList from '../BlogList/BlogList'
import axios from "axios";
import React, { useState, useEffect } from "react";

const HomePage = (props) => {
	const [blogData, setBlogData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					process.env.REACT_APP_SERVER + "/blog/"
				);
				const fetchedBlogData = response.data;
				console.log(fetchedBlogData[0])
				setBlogData(fetchedBlogData[0]);
			} catch (error) {
				console.error("Error fetching blog data:", error);
			}
			finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);
	if (loading) {
		// You can show a loading spinner or message here
		return <p>Loading...</p>;
	}


	return (
		<div className="flex flex-col items-center py-10">
			{/*======================================first blogs image======================= */}
			<div
				style={{
					backgroundImage: "url('/static/img/bg.png')",
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			>
				<div className="lg:px-20 px-10 lg:flex flex-row items-center lg:my-5 mb-32 mt-4">
					<div className="border-2 w-[18.688rem] h-[10.526rem] lg:w-[50%] lg:h-[25%] rounded-lg overflow-hidden">
						<img
							className="rounded-lg transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
							src={process.env.REACT_APP_SERVER + "/media/" + blogData["fields"]["thumbnail"]}
							alt="Bonnie "
						/>
					</div>
					<div
						className={
							"w-[18rem]  translate-x-[2rem] translate-y-[-6rem] lg:w-[38%] h-fit border-[#F05225] border-2 absolute lg:translate-x-[36rem] lg:translate-y-[-0.3rem] rounded-xl " +
							(props.theme === "light" ? "glassmorphism-2" : "glassmorphism")
						}
					>
						<div className="p-5 flex flex-col lg:gap-y-5">
							<h1 className="font-semibold text-description lg:text-[28px] capitalize">
								{blogData["fields"]["title"]}
							</h1>
							<span className="lg:text-description text-[0.75rem]">
								{blogData["fields"]["timestamp"]}
							</span>
							<p className="lg:text-subtitle capitalize text-[0.8rem]">
								{blogData["fields"]["chead0"].slice(0, 200)}...
							</p>
							<a href={`blogs\?id=${blogData["pk"]}`} className="text-subtitle text-gradient cursor-pointer">
								Read more
							</a>
						</div>
						{/* Animated Square */}
						<div className="absolute -top-28 -right-28 square  xl:block hidden">
							<img src="/static/img/square.svg" alt="" />
						</div>
						<div className="absolute -bottom-12 -right-16 w-28 square-2 xl:block hidden">
							<img src="/static/img/square.svg" alt=""  />
						</div>
						{/* <div className="absolute -bottom-10 -right-32 square-2  xl:block hidden">
							<img src="/static/img/square.svg" alt="" width={"60%"} />
						</div> */}
					</div>
				</div>
			</div>
			<BlogList theme={props.theme} />
		</div>
	)
}

export default HomePage