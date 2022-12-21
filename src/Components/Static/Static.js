import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../App';
import '../Static/static.css'
import Updateacher from '../Teachers/Modal';
import StudentData from './StudentData';
const Static = () => {
  const [Loggedin,setLoggedin]=useContext(Context)
  // console.log(Loggedin)
  const[value,setvalue]=useState(null)
  const[value2,setvalue2]=useState([])

  const [dataUpdate,setdataUpdated]=useState([])
const realblurrhandler=(id)=>{
// console.log('o moyna to or laiga')
// const Value={...value}
//  Value[e.target.name]=e.target.value
 setvalue(id)
}
// console.log(value)
  const blurhandler=(e)=>{


const updatevacancy=document.getElementById('UpdatedVacancy').value
const number={...value2}
number.vacancyupdated=updatevacancy
setvalue2(number)
// console.log(number)

const formData = new FormData();
formData.append('Updated',updatevacancy) 

    fetch(`https://server-brmc.onrender.com/updatevacancy/${value}`,{
      method:'PATCH',
      // headers:{'Content-Type':'application/json'},
      body:formData
    })
    .then(result=>setdataUpdated(result))
e.preventDefault()
    
  }

  const [data,setdata]=useState([])
  useEffect(()=>
  fetch('https://server-brmc.onrender.com/gettvacancy')
  .then(res=>res.json())
  .then(result=>setdata(result))
  ,[])
  // console.log(data)

    return (
        <section class="text-gray-700 body-font" id="statics">
  <div class="container px-5 py-24 mx-auto">

    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full gow">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg gow">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
          <p class="leading-relaxed">Teachers</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full gow" >
      <Link to="/GetStudent">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg gow">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>

          <h2 class="title-font font-medium text-3xl text-gray-900">120</h2>
          <p class="leading-relaxed" >Students</p>
        </div>
         
        </Link>
      </div>
    
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full gow">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg gow">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">74</h2>
          <p class="leading-relaxed">Groups</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full gow">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg gow">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
          <p class="leading-relaxed">IIN Number</p>
        </div>
      </div>
    </div>
      
    
  </div>
  <div>

</div>
<div id="vacancy" class="p-4  w-full h-26d " style={{textAlign:"center"}}>
{data.map(dta=>

  <div class="border-2 justify-content-center  border-gray-200 px-4 py-6 rounded-lg dragin" >
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          
          {Loggedin.isAdmin ? 
          <form className="justify-center align-center flex" onSubmit={blurhandler}>
          <input type="number" className="title-font font-medium text-3xl flex w-1/2 justify-center align-center text-gray-900" name="UpdatedVacancy" id="UpdatedVacancy" onBlur={()=>realblurrhandler(dta._id)} defaultValue={dta.NoticeText}/>
          
          <div class="px-4 py-3 bg-gray-200 text-right sm:px-6">
                 <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                   Save
                 </button>
               </div>
          </form>          :
          <h2 class="title-font font-medium text-3xl text-gray-900">{dta.NoticeText}</h2>}
          <b class="leading-relaxed ">Vacant Seats</b>
        </div>
)}
        </div> 
</section>
    );
};

export default Static;