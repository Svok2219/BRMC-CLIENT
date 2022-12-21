import React, { useEffect, useState } from 'react';
import '../Marquee/Marquee.css'
const Marquee = () => {
  const [data,setdata]=useState([])
  useEffect(()=>
  fetch('https://server-brmc.onrender.com/getNotice')
  .then(res=>res.json())
  .then(result=>setdata(result))
  ,[])
  // console.log(data)
    return (
        <div>
            
  <div class="continer ">
      <div class="ticker flex justify-center ">
        <div class="title lg:px-12">
          <button><h3>Notice Board</h3></button>
          </div>
        <div class="news  text-white bg-gray-900 py-2">
          <marquee>
            {/* <p> */}
{data.map(dta=>dta.NoticeText)}
{/* </p> */}
          </marquee>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Marquee;