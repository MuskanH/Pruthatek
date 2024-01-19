import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../Comon/Footer";
import Navbar from "../Comon/Navbar";
import "./DetailedBlog.css";
import axios from "axios";
import ReactPlayer from "react-player/youtube";

const DetailedBlog = (props) => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const fetchData = async () => {
      try {
        
        const response = await axios.get(
          process.env.REACT_APP_SERVER + "/blog/blogpost?id=" + id
        );
        const fetchedBlogData = response.data;
        console.log(fetchedBlogData);
        setBlogData(fetchedBlogData);
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

  
  console.log(props);
  // const blogData = props.location.state
  return (
    <>
      <div className='pt-4 px-6 md:px-10 lg:px-10  '>
        <div className="lg:w-[55vw] mx-auto my-[3vw]">

          {/* heading */}
          <div className='flex flex-row items-center justify-center'>
            <div className="">
              <h1 className='dark:text-white px-2 text-[10px] md:text-[16] lg:text-[16px] font-normal leading-normal'> Home  </h1>
            </div>
            <span> <FaArrowRight size={14} className='ml-2 dark:text-white' /></span>
            <div className="">
              <h1 className='dark:text-white px-2 text-[10px] md:text-[16] lg:text-[16px] font-normal leading-normal'>Blogs  </h1>
            </div>
            <span> <FaArrowRight size={14} className='ml-2 dark:text-white' /></span>
            <div className="px-2">
              <h1 className='dark:text-white text-[10px] md:text-[16] lg:text-[16px] text-center font-normal leading-normal'></h1>
            </div>






          </div>
          {/* heading main title  */}
          <div className='my-10 text-center '>
            <h1 className='text-[14px] lg:text-[25px] font-bold leading-normal text-[#ff6d2d]'>{blogData[0]['fields']['title']}</h1>
          </div>


          {/* written by */}

          <div className="flex    items-center justify-between">
            <div className="text-[16px] font-normal   leading-normal text-[#ff6d2d]">
              <h1> Written By {blogData[0]['fields']['author']} </h1>
            </div>
            <div className="text-[16px] font-normal  leading-normal text-[#ff6d2d]">
              <span>{blogData[0]['fields']['timeStamp']}</span>
            </div>

          </div>

          <div className=" py-5  ">
            <p className="dark:text-white  text-justify text-[16px] md:px-10 lg:px-0 font-normal leading-normal">
              <strong className='dark:text-white'> {blogData[0]['fields']['head0']} </strong>{blogData[0]['fields']['chead0']}
            </p>
          </div>

          {/* images  */}

          <div className="flex items-center justify-center my-5">
            <img src={process.env.REACT_APP_SERVER + "/media/" + blogData[0]["fields"]["cimages0"]} />
          </div>

          <div className=" py-5 dark:text-white ">
            <p className="dark:text-white text-justify text-[16px] font-normal md:px-10 lg:px-0 leading-normal">
              <strong> {blogData[0]['fields']['head1']}</strong> {blogData[0]['fields']['chead1']}
            </p>
          </div>

          {/* images  */}

          <div className="flex items-center justify-center my-5">
            <img src={process.env.REACT_APP_SERVER + "/media/" + blogData[0]["fields"]["cimages1"]} />
          </div>
          <div className=" py-5  ">
            <p className=" text-justify text-[16px] font-normal md:px-10 lg:px-0 leading-normal dark:text-white">
              <strong className="dark:text-white"> {blogData[0]['fields']['head2']}</strong> {blogData[0]['fields']['chead2']}
            </p>
          </div>

          {/* images  */}

          <div className="flex items-center justify-center my-5">
            <img src={process.env.REACT_APP_SERVER + "/media/" + blogData[0]["fields"]["cimages2"]} />
          </div>

          {/* video */}

          <div className="flex items-center justify-center relative">
            {/* <video
        className="mx-auto my-10 md:my-20 absolute lg:-top-[30rem] lg:left-[45rem] lg:z-40  md:-top-[15rem] md:left-[30rem] md:z-40"
        width="200 lg:360 md:200"
        height="200 lg:360 md:200"
        controls
      >
        <source
          src="https://www.example.com/your-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>  */}
      <div
            className="lg:w-[22vw] md:w-[50%] w-[80%] fixed lg:left-[76vw] md:left-[45vw] left-10 md:bottom-[1vw] bottom-4 rounded-xl transition-all duration-300"
            id="blogVideoContainer"
          >
            <div
              className={
                "absolute -right-2 -top-3 rounded-full p-1 cursor-pointer " +
                (props.theme === "light" ? "glassmorphism-2" : "glassmorphism")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
                onClick={() => {
                  document
                    .getElementById("blogVideoContainer")
                    .classList.add("scale-0", "opacity-0");
                }}
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </div>
            <ReactPlayer
              url="https://www.youtube.com/embed/Nv8upm_RGNM"
              className="rounded-xl overflow-hidden"
              playing={true}
              loop={true}
              controls={true}
              muted={true}
              height="false"
              width="false"
            />
          </div>
        </div>


        </div>
      </div>
    </>

  );
};

export default DetailedBlog;
