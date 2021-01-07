import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../App';
import Addstudent from '../Add student/Addstudent';
import Addadmin from '../Add/Addadmin';
import AddTeacher from '../AddTeacher/AddTeacher';
import Nomatch from '../Nomatch/Nomatch';
import Notice from '../Notice/Notice';

const DashBoard = () => {
  const [Loggedin,setLoggedin]=useContext(Context)
  const signout=()=>{
    const loggedin={...Loggedin}
loggedin.issigned=false
setLoggedin(loggedin)
  }
  const [menu,setmenu]=useState(false)
  const Menu=()=>{
    setmenu(!menu)
  }

  const [state,setstate]=useState({
    admin:true,
    teacher:false,
    notice:false,
    student:false
    
  })
  const admin =()=>{
   const state1={
     admin:true,
    teacher:false,
    notice:false,
    student:false}
    setstate(state1)

   }
   const teachers =()=>{
    const state2={
      admin:false,
     teacher:true,
     notice:false,
     student:false}
     setstate(state2)
    }
    const notice =()=>{
      const state1={
        admin:false,
       teacher:false,
       notice:true,
       student:false}
       setstate(state1)
      }

      const students =()=>{
        const state4={
          admin:false,
         teacher:false,
         notice:false,
         student:true
        }
         setstate(state4)
        }
        
//     const[studentdata,setstudentdata]=useState([])
//     useEffect(()=>{
//     fetch('https://brmc-server.herokuapp.com/getstudent')
//     .then(res=>res.json())
//     .then(result=>setstudentdata(result))
//     },[])
// console.log(studentdata)
    return (
<div>

   <nav class="bg-gray-800 ">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <Link to="/Home">
            <img class="h-12 rounded-full w-12" src="data:image/jpeg;base64,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" alt="Workflow"/></Link>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>

              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={admin}>Add Admin</a>

              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={teachers}>Add Teachers</a>

              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={notice}>Add Notice</a>

              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={students}>Students</a>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
         

            <div class="ml-3 relative">
              <div>
                <button class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white "data-toggle="collapse" data-target="#windu" id="usermenu" aria-haspopup="true" onClick={Menu}>
                  <span class="sr-only">Open user menu</span>
                  {/* {console.log(Loggedin.image )} */}
                  {Loggedin.image ?  <img class="h-8 w-8 rounded-full" src={`${Loggedin.image}`} alt=""/> : <div className="w-8 h-8 rounder-full">
 <i style={{fontSize:"30px"}} class="fas w-8 h-8 fa-user "></i>
                  </div>}
                 
                </button>
              </div>
             {menu ? <div class=" origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 collapse navbar-collapse" role="menu" aria-orientation="vertical" aria-labelledby="#usermenu" id="windu">
              

              <a href="#" class="block px-4 py-2 text-lg text-center text-gray-900 hover:bg-gray-100" role="menuitem" onClick={signout}>Sign out</a>
              
            {Loggedin.name ?  <a class="block px-4 py-2 text-center text-sm text-gray-700 hover:bg-gray-100" role="menuitem" >{Loggedin.name}</a>:  <a class="block px-4 py-2 text-center text-sm text-gray-700 hover:bg-gray-100" role="menuitem" >Admin</a>}
              
              <a class="block px-4 text-center py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">{Loggedin.email}</a>
            </div> :  <div class="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 collapse navbar-collapse" role="menu" aria-orientation="vertical" aria-labelledby="#usermenu" id="windu">
              

              <a href="#" class="block px-4 py-2 bg-indigo-900 text-sm text-gray-50 hover:bg-gray-100" role="menuitem" onClick={signout}>Sign out</a>
              
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" >Admin</a>
              
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Forest@gump.com</a>
            </div>}
             
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">

        </div>
      </div>
    </div>

    <div class=" md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">

        <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={admin}>Add Admin</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"onClick={teachers}>Add Teacher</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={notice}>Add Notice</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={students}>Students</a>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            
                  {/* {console.log(Loggedin.image )} */}
                  {Loggedin.image ?  <img class="h-8 w-8 rounded-full" src={`${Loggedin.image}`} alt=""/> :
                  <div className="w-r h-8 rounder-full">
 <i style={{fontSize:"40px"}} class="fas fa-user "></i>
                  </div>}
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">{Loggedin.name}</div>
            <div class="text-sm font-medium leading-none text-gray-400">{Loggedin.email}</div>
          </div>
      
        </div>
        <div class="mt-3 px-2 space-y-1">
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 " onClick={signout}>Sign out</a>
        </div>
      </div>
    </div>
  </nav>

  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold leading-tight text-gray-900">
Admin Page
      </h1>
    </div>
  </header>
  <main>
    <div class=" mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-full">
          {state.teacher && <AddTeacher/>}
          {state.admin && <Addadmin/>}
          {state.notice && <Notice/>}
          {state.student && <Addstudent />}
        </div>
      </div>
    </div>
  </main> 
</div>

    );
};

export default DashBoard;