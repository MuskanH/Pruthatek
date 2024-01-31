
import React, { useState, useEffect } from "react";

import axios from "axios";

const Money = (props) => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_SERVER + "/blog/money"
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

  return (
    
    <div className="my-5 flex flex-row flex-wrap items-center justify-center gap-x-10 gap-y-5 lg:px-20 px-10 w-full">
      {Object.keys(blogData).map((id, index) => {

        { console.log(blogData[index]) }
         
        if (blogData[index]["fields"].Category == "Money"){
            return (
                <a href={`blogs\?id=${blogData[index]["pk"]}`}>
                  <div
                    key={id}
                    className={
                      "hover:shadow-none hover:border-[#F05225] border-transparent border-[1px] hover:border-[1px] transition-all duration-500 ease-in-out hover:bg-gradient-to-b rounded-lg cursor-pointer " +
                      (props.theme === "light" ? "glassmorphism-2" : "glassmorphism")
                    }
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                  >
                    <div className="w-[260px] h-[380px] p-3 rounded-md">
                      <div className="flex flex-row justify-between  items-center">
                        <div className="flex flex-row justify-start items-center space-x-3">
                          <img
                            className="w-[15%] h-[15%] dark:border-[2px] dark:bg-white  border-[2px] object-cover border-black rounded-full dark:border-white "
                            src="/static/img/UserProfile.png"
                            alt="owner"
                          />
                          <div className=" font-normal text-[13px] capitalize ">
                            <h1>{blogData[index]["fields"]["author"]}</h1>
                          </div>
                        </div>
                        <div className="border-[1px] rounded-full py-1 whitespace-nowrap px-2">
                          <h5 className=" flex items-center font-normal lg:text-description text-[10px]">
                            {blogData[index]["fields"]["timeStamp"]}
                          </h5>
                        </div>
                      </div>
                      <div className="mt-4 mb-2 h-fit overflow-hidden rounded-lg">
                        <img
                          className="w-full h-[50%] mb-1 rounded-md transition duration-300 ease-in-out hover:scale-105"
                          src={process.env.REACT_APP_SERVER + "/media/" + blogData[index]["fields"]["thumbnail"]}
                          alt="Bonnie "
                        />
                      </div>
                      <div className="">
                        <h1 className="p-1 text-subtitle not-italic font-medium capitalize">
                          {blogData[index]["fields"]["title"]}
                        </h1>
                      </div>
                      <div className="">
                        <p className="p-1 text-description not-italic font-light capitalize">
                          {blogData[index]["fields"]["chead0"].slice(0, 100)}...
                        </p>
                      </div>
                      <a key={id} href={`blogs\?id=${blogData[index]["pk"]}`} className=" text-orange-400 font-semibold text-end ">
                        <h1 className="text-subtitle">Read More</h1>
                      </a>
                    </div>
                  </div>
                </a>
              );
        }
        
      
      })}
    </div>
  );
};

export default Money;
