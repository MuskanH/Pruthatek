import axios from "axios";
import SideAd from './SideAd'
import React, { useState, useEffect } from "react";



const products = [
   {
      pname: "Top Head Phones",
      pdesc: "Rockerz 551 ANC",
      pprice: "3299 at Boat",
      plink: "https://www.boat-lifestyle.com/products/rockerz-551-anc-noise-cancelling-headphone",
   },
   {
      pname: "Top Head Phones",
      pdesc: "Rockerz 551 ANC",
      pprice: "3299 at Boat",
      plink: "https://www.boat-lifestyle.com/products/rockerz-551-anc-noise-cancelling-headphone",
   },
   {
      pname: "Top Head Phones",
      pdesc: "Rockerz 551 ANC",
      pprice: "3299 at Boat",
      plink: "https://www.boat-lifestyle.com/products/rockerz-551-anc-noise-cancelling-headphone",
   },
   {
      pname: "Top Head Phones",
      pdesc: "Rockerz 551 ANC",
      pprice: "3299 at Boat",
      plink: "https://www.boat-lifestyle.com/products/rockerz-551-anc-noise-cancelling-headphone",
   },
   {
      pname: "Top Head Phones",
      pdesc: "Rockerz 551 ANC",
      pprice: "3299 at Boat",
      plink: "https://www.boat-lifestyle.com/products/rockerz-551-anc-noise-cancelling-headphone",
   },
   {
      pname: "Top Head Phones",
      pdesc: "Rockerz 551 ANC",
      pprice: "3299 at Boat",
      plink: "https://www.boat-lifestyle.com/products/rockerz-551-anc-noise-cancelling-headphone",
   },
   {
      pname: "Top Head Phones",
      pdesc: "Rockerz 551 ANC",
      pprice: "3299 at Boat",
      plink: "https://www.boat-lifestyle.com/products/rockerz-551-anc-noise-cancelling-headphone",
   },
   {
      pname: "Top Head Phones",
      pdesc: "Rockerz 551 ANC",
      pprice: "3299 at Boat",
      plink: "https://www.boat-lifestyle.com/products/rockerz-551-anc-noise-cancelling-headphone",
   },
   
   
]

const SideContent = (props) => {
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

          </div>
            {/* experience box end */}
       </div>

       {/* ads box start */}
       <div className='rounded md:flex md:flex-row md:flex-wrap border-slate-300 h-fit dark:text-white text-black lg:w-[900px] md:w-[730px] w-[380px] border-[1px] m-4'>
        

        {products.map((product)=>{
         return(
            <div className='lg:w-[400px] h-[100px] w-[340px] md:w-[314px] mx-6 mt-6 mb-2 flex border-b-slate-300 border-b-[1px]'>
            <div className='pt-6'>
              <div className='w-[50px] h-[50px] bg-slate-400'></div>
            </div>
            <div className='flex justify-between dark:text-white text-black'>
               <div className='flex flex-col pl-4'>
               <p className='text-[14px] font-semibold pt-[30px] text-start lg:w-[154px] w-[154px] md:w-[150px] truncate'>{blogData[0]['fields']['head1']}</p>
               <p className='text-start text-[14px] text-[#737373]'>{product.pdesc}</p>
               </div>
               <div>
               <div className='border-[#f05225] border-[1px] flex justify-center items-center text-[12px] lg:ml-[34px] md:ml-[0px] ml-[10px] mt-8  rounded bg-transparent w-[110px] lg:w-[140px] md:w-[100px] h-[32px]'>
                <a href={product.plink} target="_blank">&#8377;{product.pprice}</a> 
               </div>
               <a href="#{{blogData[0]['fields']['head1']}}" className="text-[12px] lg:ml-[64px] md:ml-[15px] ml-[30px] mt-6">View Details</a>
               </div>
            </div>
          
         </div>
         )
        })}
      
      
      
      
       </div>
       {/* ads box end */}
    </div>

  
    </>
  )
}

export default SideContent
