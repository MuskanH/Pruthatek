import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../Comon/Footer";
import Navbar from "../Comon/Navbar";
import "./DetailedBlog.css";
import axios from "axios";
import ReactPlayer from "react-player/youtube";
import SideAd from "../SideContent/SideAd";

const DetailedBlog = (props) => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adData, setAdData] = useState([]);
  const [linkId, setLinkId] = useState();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const fetchad = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_SERVER + "/blog/adfetch/?id=" + id
        );
        const fetchadsData = response.data;
        // console.log("ads :");
        // console.log(fetchadsData);
        setAdData(fetchadsData)
      }
      catch (e) {
        console.log(e);
      }
    };
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_SERVER + "/blog/blogpost?id=" + id
        );
        const fetchedBlogData = response.data;
        // console.log("data :");
        // console.log(fetchedBlogData);
        setBlogData(fetchedBlogData);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
      finally {
        setLoading(false);
      }
    };
    fetchad();
    fetchData();
  }, []);
  if (loading) {
    // You can show a loading spinner or message here
    return <p>Loading...</p>;
  }


  // console.log(props);


  // const blogData = props.location.state


  // console.log(adData[0].pk)


  const onclick = (index) => {
    setLinkId(adData[index]["fields"]["product_name"]);
    // setTimeout(() => {
    //   setLinkId("")
    // }, 1000);
  }
  console.log(linkId)
  return (
    <>
      <div className='lg:flex lg:flex-row flex flex-col justify-center'>
        <SideAd />
        <div className='lg:flex lg:flex-col flex flex-col md:flex md:flex-row mx-auto lg:mx-0'>
          {/* author box start */}
          <div className='rounded border-slate-300 w-[260px] h-[248px] border-[1px] m-4 dark:text-white text-black'>
            <p className='text-[14px] font-semibold p-4 text-start '>Updated {blogData[0]['fields']['timeStamp']}</p>
            <div className='w-[40px] h-[40px] mx-4 rounded-full bg-slate-500'></div>
            <p className='text-[14px] font-medium p-4 text-start'>Written By {blogData[0]['fields']['author']}</p>
            <p className='text-[12px] font-medium px-4 text-[#737373] text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat incidunt impedit corrupti et rem aspernatur alias molestias tempora! Non..</p>
          </div>
          {/* author box end */}

          {/* experience box start */}
          <div className='rounded border-slate-300 w-[260px] h-[248px] border-[1px] m-4'>
            <div className="w-20  m-4">
              <img src="/static/img/Pruthateknew.png" alt="" />
            </div>

            <div className="flex">
              <div className="mx-4 dark:text-white text-black font-semibold text-[12px]">
                <p className="text-start mx-5">3+</p>
                <p className="text-start w-[60px]">Years of Experience</p>
              </div>

              <div className="mx-4 dark:text-white text-black font-semibold text-[12px]">
                <p className="text-start mx-6">5</p>
                <p className="text-start w-[60px]">Products Delivered</p>
              </div>

              <div className="mx-4 dark:text-white text-black font-semibold text-[12px]">
                <p className="text-start mx-3">30+</p>
                <p className="text-start w-[60px]">Clients</p>
              </div>
            </div>

            <p className=" text-black font-medium bg-slate-200 text-[12px] rounded-md text-start p-3 m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat incidunt impedit corrupti et rem aspernatur alias. <a href="Pruthatek.com" className="underline text-blue-400">Pruthatek.com</a></p>
          </div>
          {/* experience box end */}
        </div>

        {/* ads box start */}


        <div className='rounded md:flex md:flex-row md:flex-wrap border-slate-300 h-fit dark:text-white text-black lg:w-[900px] md:w-[730px] w-[380px] border-[1px] m-4'>
          {Object.keys(adData).map((id, index) => {

            // console.table([adData[index]["pk"]]);

            return (
              <div key={id} className='lg:w-[400px] h-[100px] w-[340px] md:w-[314px] mx-6 mt-6 mb-2 flex border-b-slate-300 border-b-[1px]'>
                <div className='pt-6'>
                  <div className='w-[50px] h-[50px]'>
                    <img src={process.env.REACT_APP_SERVER + "/media/" + adData[index]['fields']['image']} />
                  </div>
                </div>
                <div className='flex justify-between dark:text-white text-black'>
                  <div className='flex flex-col pl-4'>
                    <p className='text-[14px] font-semibold pt-[30px] text-start lg:w-[154px] w-[154px] md:w-[150px] truncate'>{adData[index]['fields']['product_name']}</p>
                    <p className='text-start text-[14px] text-[#737373]'>{adData[index]['fields']['description']}</p>
                  </div>
                  <div>
                    <div className='border-[#f05225] border-[1px] flex justify-center items-center text-[12px] lg:ml-[34px] md:ml-[0px] ml-[10px] mt-8  rounded bg-transparent w-[110px] lg:w-[140px] md:w-[100px] h-[32px]'>
                      <a href={adData[index]['fields']['link']} target="_blank">&#8377;{adData[index]['fields']['price']}</a>
                    </div>
                    <a href={`#${index}`} onClick={() => onclick(index)}
                      className="text-[12px] lg:ml-[64px] md:ml-[15px] ml-[30px] mt-6">View Details</a>
                  </div>
                </div>

              </div>
            )

          })}


        </div>

        {/* ads box end */}
      </div>
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

          <div className="flex items-center justify-between">
            <div className="text-[16px] font-normal   leading-normal text-[#ff6d2d]">
              <h1> Written By {blogData[0]['fields']['author']} </h1>
            </div>
            <div className="text-[16px] font-normal  leading-normal text-[#ff6d2d]">
              <span>{blogData[0]['fields']['timeStamp']}</span>
            </div>

          </div>

          {/* paragraph zero */}
          <div id="0" className="py-5">
            <p className="dark:text-white  text-justify text-[16px] md:px-10 lg:px-0 font-normal leading-normal">
              <strong className='dark:text-white'> {blogData[0]['fields']['head0']} </strong>{blogData[0]['fields']['chead0']}
            </p>
            <div className="flex items-center justify-center my-5">
              <img src={process.env.REACT_APP_SERVER + "/media/" + blogData[0]["fields"]["cimages0"]} />
            </div>
          </div>
          {/* paragraph zero end*/}

          {/* paragraph one */}
          <div id="1" className="py-5 dark:text-white ">
            <p className="dark:text-white text-justify text-[16px] font-normal md:px-10 lg:px-0 leading-normal">
              <strong> {blogData[0]['fields']['head1']}</strong> {blogData[0]['fields']['chead1']}
            </p>
            <div className="flex items-center justify-center my-5">
              <img src={process.env.REACT_APP_SERVER + "/media/" + blogData[0]["fields"]["cimages1"]} />
            </div>
          </div>
          {/* paragraph one end*/}


          {/* paragraph two*/}
          <div id="2" className=" py-5  ">
            <p className=" text-justify text-[16px] font-normal md:px-10 lg:px-0 leading-normal dark:text-white">
              <strong className="dark:text-white"> {blogData[0]['fields']['head2']}</strong> {blogData[0]['fields']['chead2']}
            </p>
            <div className="flex items-center justify-center my-5">
              <img src={process.env.REACT_APP_SERVER + "/media/" + blogData[0]["fields"]["cimages2"]} />
            </div>
          </div>
          {/* paragraph two end*/}

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
