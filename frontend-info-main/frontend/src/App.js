import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./Components/Home/Components/Home";
import DetailedBlog from "./Components/Detailed_Blog/Detailed_blog";
import BlogUpload from "./Components/BlogUpload/blogUpload";
import Login from "./Components/BlogUpload/Login";
import Verification from "./Components/BlogUpload/verification";
import home from "./Components/BlogUpload/home";
import CreateUser from "./Components/Admin/CreateUser";
import Allblogs from "./Components/Admin/Allblogs";
import AdminLogin from "./Components/Admin/Login";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import MobileNavbar from "./Components/MobileNavbar/MobileNavbar";
import Footer from "./Components/Comon/Footer"
import UnderReview from "./Components/BlogUpload/UnderReview";
import RejectedBlogs from "./Components/RejectedBlogs/RejectedBlogs";
import PublishedBlogs from "./Components/PublishedBlogs/PublishedBlogs";
import Drafts from "./Components/Drafts/Drafts";
import DeletedBlogs from "./Components/DeletedBlogs/DeletedBlogs";
import ApprovedBlogs from "./Components/ApprovedBlogs/ApprovedBlogs";

function App() {

	const [theme, setTheme] = useState("dark")

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark")
		}
		else {
			document.documentElement.classList.remove("dark")
		}
	}, [theme])

	useEffect(() => {
		AOS.init({
			duration: 1400,
			offset: 150,
		});
	});

	return (
		<div className="bg-white dark:bg-[#101010] text-black dark:text-white">
			<Router>
				<Navbar setTheme={setTheme} theme={theme} />
				<MobileNavbar />
				<Routes>
					<Route index element={<HomePage theme={theme} />} />
					<Route path="/blogs" element={<DetailedBlog theme={theme} />} />
					{/* <Route path="Blog/:title" element={<DetailedBlog />} /> */}
					{/* <Route path="blogupload/home" element={<home />} /> */}
					<Route path="/login" element={<Login theme={theme} />} />
					<Route path="/verification" element={<Verification theme={theme} />} />
					<Route path="/admin/blogupload" element={<BlogUpload theme={theme} />} />
					<Route path="/admin/create-user" element={<CreateUser theme={theme} />} />
					<Route path="/admin/allblogs" element={<Allblogs theme={theme} />} />
					<Route path="/admin/under-review" element={<UnderReview theme={theme} />} />
					<Route path="/admin/rejected" element={<RejectedBlogs theme={theme} />} />
					<Route path="/admin/published" element={<PublishedBlogs theme={theme} />} />
					<Route path="/admin/draft" element={<Drafts theme={theme} />} /> 
					<Route path="/admin/deleted" element={<DeletedBlogs theme={theme} />} />
					<Route path="/admin/approved" element={<ApprovedBlogs theme={theme} />} />
					{/* <Route path="admin/login" element={<AdminLogin />} /> */}
					{/* <Route path="home" element={<Home />} /> */}
				</Routes>
				<Footer theme={theme} />
			</Router>
		</div>
	);
}

export default App;