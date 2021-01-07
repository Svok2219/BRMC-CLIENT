import React, { useContext, useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import ReactModal from 'react-modal';
import { Context } from '../../App';
import '../Static/StudentData.css'

const StudentData = ({}) => {
  const [serachby,setsearchby]=useState([])
const blurhandler=(e)=>{
const SEARCHBY={...serachby}
SEARCHBY[e.target.name]=e.target.value
setsearchby(SEARCHBY)
}
const[studentData,setstudentData]=useState([])
const[send,setsend]=useState(false)
const[got,setgot]=useState(false)
const sending= ()=>{
  setsend(true)

}
const[error,seterror]=useState(null)
  const onsubmithandler=(e)=>{
    e.preventDefault()

    fetch(`https://brmc-server.herokuapp.com/getstudentsbyroll?Roll=${serachby.RollNumber}`)
    .then(res=>res.json())
    .then(result=>{
      if (result.length==1) {
        setstudentData(result);setgot(true);setsend(false);seterror(false)
      }
      else{setsend(false);setgot(false);seterror(true)}
      })
  }
  // console.log(studentData)
    return (
         <section className="min-h-screen flex  bg-gray-300   flex justify-center align-center">
 <div class="w-full ">
          <form onSubmit={onsubmithandler} class="bg-white shadow-lg  rounded pb-6 ">
            <div
              class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-12"
            >
Serch Your Student Data
            </div>
            <div class="mb-4 md:px-20  justify-between w-full">
              <div className="flex justify-center align-center mb-4">
                <div className="">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Student's name
              </label>
              <input
                class="shadow appearance-none border rounded  py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                name="Name"
                v-model="form.email"
                onBlur={blurhandler}
                type="text"
                
                autofocus
                placeholder="Student's Name"
              />
              </div>
              </div>
              <div className="flex justify-center align-center  mt-4">
                <div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2 "
                for="username"
              >
                Roll Number
              </label>
              <input type="number"  class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight w-full focus:outline-none focus:shadow-outline "
                name="RollNumber"
                // v-model="form.email"
                onBlur={blurhandler}
                
                required
                autofocus
                placeholder="Roll"/>
                </div>
                </div>
            </div>
      
            <div class="flex items-center  align-center justify-center ">
              <button onClick={sending} class="px-4 py-2 rounded text-white inline-block shadow-lg bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700" type="submit">Search</button>
            
            </div>
          </form>
          <div class=" mx-auto my-40">
        <div>
          {send  && <div class="flex justify-center">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2c110454-5b33-4416-bf9b-72992c7cb56f/d60eb1v-79212624-e842-4e55-8d58-4ac7514ca8e4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMmMxMTA0NTQtNWIzMy00NDE2LWJmOWItNzI5OTJjN2NiNTZmXC9kNjBlYjF2LTc5MjEyNjI0LWU4NDItNGU1NS04ZDU4LTRhYzc1MTRjYThlNC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.P1AQAZ6H1E-Xwu69xiwDXqfZ5h47ZZlXS4u86T6l8nk" alt="Loading data from server" class="rounded-full mx-auto  -top-20 w-56 h-56 shadow-2xl border-4 border-white"/>
                </div>
}
{ !send && error &&
                <div class="bg-white relative shadow-xl w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
        
                <div class="flex justify-center">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrVIFoCsrjz86ECQ3s3gmNsmOKqvMfS4xBw&usqp=CAU" alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-white"/>
                </div>
                
                <div class="mt-16">
                  
                    <h1 class="font-bold text-center text-3xl text-gray-900">UnRegisted Student</h1>
                    <p class="text-center text-sm text-gray-400 font-medium">The Buds Residential Model College</p>
                    <p>
                        <span>
                            
                        </span>
                    </p>
                    <div class="my-5">
                   
                            
                            <a  class="text-indigo-200 block text-center font-bold leading-6 px-6 py-3 bg-indigo-600">
                            Class Undeined   
                            </a>          
                    </div>
                    <div class="flex justify-evenly my-5">
                        <a  class="bg font-bold text-sm text-blue-800 w-full text-center py-3 hover:bg-blue-800 hover:text-white hover:shadow-lg">Roll:</a>
                        
                        
                        <a  class="bg font-bold text-sm text-blue-400 w-full text-center py-3 hover:bg-blue-400 hover:text-white hover:shadow-lg">Undefiend</a>
                        <a  class="bg font-bold text-sm text-yellow-600 w-full text-center py-3 hover:bg-yellow-600 hover:text-white hover:shadow-lg">Group:</a>
                      
                        <a  class="bg font-bold text-sm text-gray-600 w-full text-center py-3 hover:bg-gray-600 hover:text-white hover:shadow-lg">Undefiend</a>
                    </div>

                 
                </div>
            </div>
                }
                
        {studentData.length==1 && got &&  
          studentData.map(dta=> <div class="bg-white relative shadow-xl w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
        
                <div class="flex justify-center">
                    { <img  src={`data:image/png;base64,${dta.Photo.img}`} alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-white"/> ||  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrVIFoCsrjz86ECQ3s3gmNsmOKqvMfS4xBw&usqp=CAU" alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-white"/>}
                </div>
                
                <div class="mt-16">
                  {
                    <h1 class="font-bold text-center text-3xl text-gray-900"> || {dta.Name} || </h1> || 
                    <h1 class="font-bold text-center text-3xl text-gray-900">UnRegisted Student</h1>}
                    <p class="text-center text-sm text-gray-400 font-medium">The Buds Residential Model College</p>
                    <p>
                        <span>
                            
                        </span>
                    </p>
                    <div class="my-5">
                    {                        <a  class="text-indigo-200 block text-center font-bold leading-6 px-6 py-3 bg-indigo-600">
                           Class {dta.Class}   
                            </a> ||
                            
                            <a  class="text-indigo-200 block text-center font-bold leading-6 px-6 py-3 bg-indigo-600">
                            Class Undeined   
                            </a>}             
                    </div>
                    <div class="flex justify-evenly my-5">
                        <a  class="bg font-bold text-sm text-blue-800 w-full text-center py-3 hover:bg-blue-800 hover:text-white hover:shadow-lg">Roll:</a>
                        {
                        <a  class="bg font-bold text-sm text-blue-400 w-full text-center py-3 hover:bg-blue-400 hover:text-white hover:shadow-lg">{dta.Roll}</a> ||
                        
                        <a  class="bg font-bold text-sm text-blue-400 w-full text-center py-3 hover:bg-blue-400 hover:text-white hover:shadow-lg">Undefiend</a>}
                        <a  class="bg font-bold text-sm text-yellow-600 w-full text-center py-3 hover:bg-yellow-600 hover:text-white hover:shadow-lg">Group:</a>
                      {  <a  class="bg font-bold text-sm text-gray-600 w-full text-center py-3 hover:bg-gray-600 hover:text-white hover:shadow-lg">{dta.Group}</a> ||
                        <a  class="bg font-bold text-sm text-gray-600 w-full text-center py-3 hover:bg-gray-600 hover:text-white hover:shadow-lg">Undefiend</a>}
                    </div>

                 
                </div>
            </div>)
}
         
        </div>
    </div>

          </div>
              </section>
        
         
    );
};

export default StudentData;