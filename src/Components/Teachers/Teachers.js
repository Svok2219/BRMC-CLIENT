import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../App';
import Updateacher from './Modal';

const Teachers = () => {
  const [data,setdata]=useState([])
  useEffect(()=>
  fetch('https://brmc-server.herokuapp.com/getteachers')
  .then(res=>res.json())
  .then(result=>setdata(result))
  ,[])
  // console.log(data)
  
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [modalTeacher,setmodalTeacher] = React.useState([]);
  const [Loggedin,setLoggedin]=useContext(Context)

  function openModal(id) {
    if (Loggedin.isAdmin==true) {
      
    setIsOpen(true);
    setmodalTeacher(id)
    }

  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }

    return (
        <section id="teachers" class="text-gray-700 body-font px-10">

  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest"><u>OUR TEACHERS</u></h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
    </div>
    {data.length==0  && <div class="flex justify-center align-center">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2c110454-5b33-4416-bf9b-72992c7cb56f/d60eb1v-79212624-e842-4e55-8d58-4ac7514ca8e4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMmMxMTA0NTQtNWIzMy00NDE2LWJmOWItNzI5OTJjN2NiNTZmXC9kNjBlYjF2LTc5MjEyNjI0LWU4NDItNGU1NS04ZDU4LTRhYzc1MTRjYThlNC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.P1AQAZ6H1E-Xwu69xiwDXqfZ5h47ZZlXS4u86T6l8nk" alt="Loading data from server" class="rounded-full mx-auto  -top-20 w-56 h-56 shadow-2xl border-4 border-white"/>
                </div>}
   
    <div class="sm:flex flex-wrap -m-4">
      
    {data.map(dta=>

      <div class="p-4 lg:w-1/2 " >
        <div class="h-full flex sm:flex-row flex-col items-center  sm:justify-center justify-center text-center sm:text-left">
          <img alt="teacherImage" onClick={()=>openModal(dta)} class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" 
          src={`data:image/png;base64,${dta.TeacherImage.img}`}/>
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">{dta.TeacherName}</h2>
            <h3 class="text-gray-500 mb-3">{dta.TeacherSubject} Teacher</h3>
            <p class="mb-4">Email: {dta.TeacherEmail} <br/>Group: {dta.TeacherGroup}</p>
            <span class="inline-flex">
              <a  target="_blank" rel="noopener noreferrer" href={dta.FB || null} class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      )}
{/* {Loggedin.isAdmin &&  */}
<Updateacher modalIsOpen={modalIsOpen} modalTeacher={modalTeacher} closeModal={closeModal} />
{/* } */}


    </div>
  </div>
  
  </section>
    );
};

export default Teachers;