import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../App';
import StudentData from '../Static/StudentData';

const Addstudent = ({}) => {
    var FormData = require('form-data');

    const[teacherdata,setteacherdata]=useState([])
    const[file,setfile]=useState(null)
  
    const[send,setsend]=useState(false)
    const[studentdataposted,setstudentdataposted]=useState([])
    const[studentdataerror,setstudentdataerror]=useState([])

    const onblurhandler=(e)=>{
  const tcherdata={...teacherdata}
   tcherdata[e.target.name]=e.target.value
   setteacherdata(tcherdata)
    }
    const changehandler=(e)=>{
      const File=e.target.files[0]
      setfile(File)
    }

    const{Name,Class,RollNumber}=teacherdata
    // console.log(file,teacherdata)
    const [sending,setsending]=useState(false)

  const onsave=(e)=>{
    var form = new FormData();
    const Group =document.getElementById('Group').value
    form.append('StudentName', Name);
    form.append('StudentClass', Class);
    form.append('StudentRoll', RollNumber);
    form.append('StudentGroup', Group);
    form.append('Image', file);
    // form.append('my_field', 'my value');
  
    fetch('https://server-brmc.onrender.com/poststudent',{
      method:'POST',
      body:form
    })
    .then(res=>res.json())
    .then(result=>{setsending(false);setstudentdataposted(result)})
    .catch(error=>{console.log(error);setsending(false);setstudentdataerror(error)})
  e.preventDefault()
  }
  const[studentdatadeleted,setstudentdatadeleted]=useState([])

// console.log(studentdata)

const deletestudent=(id)=>{
  fetch(`https://server-brmc.onrender.com/deletestudent/${id}`,{
    method:'DELETE'
  })
  .then(result=>{setstudentdatadeleted(result);setsending(true)})
  }

  // console.log(studentdatadeleted)
  const [Loggedin,setLoggedin]=useContext(Context)
// const {studentdata}=Loggedin
console.log(Loggedin)


const[studentdata,setstudentdata]=useState([])
useEffect(()=>{
fetch('https://server-brmc.onrender.com/getstudents')
.then(res=>res.json())
.then(result=>{setstudentdata(result);

})
},[])

const onsend=()=>{
setsending(true)
}
console.log(studentdata)
    return (
        <div>
  <div class="md:grid  md:px-10 md:py-10 md:gap-6">
    <div class="md:col-span-1">
 

<div >
  <div class="py-5">
    
{studentdataposted.insertedCount==true &&
<div class="text-center text-indigo-400 " >
 <b className="text-gray-700 t font-weight-bold text-center">ডাটা পাঠান হয়েছে সাকসেসফুলি,Refressh the page to see changes</b>
 </div>
  } 
  
{studentdataerror && studentdataposted.insertedCount==false && 
<div class="text-center text-red-400 py-5" >
 <b className="text-gray-700 t font-weight-bold text-center">an Error happend,Please Retry after a short time</b>
 </div>
  } 
 {sending &&  
<div class="text-center text-lg text-indigo-400 " >
    <span >Getting...Result....Wait</span>
  
  </div>
   } 
    <div class="border-t border-gray-200"></div>
  </div>
</div>

<div class="mt-10 sm:mt-0 md:pl-5">
  <div class="md:grid md:grid-cols-3 md:gap-6">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      
{studentdata.length==0 ?
                <div class="flex align-center justify-center">
           <img style={{width: "9rem", height: "9rem"}} src="https://media2.giphy.com/media/RJzm826vu7WbJvBtxX/giphy.gif" alt="Student Data Loading,please wait a while....................." /> 
           </div>
            :
        <table class="min-w-full divide-y divide-gray-200">
          
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {/* Name */}
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Class
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Roll
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Group
              </th>
              
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {/* Group */}
              </th>
            </tr>
          </thead>
          
          <tbody class="bg-white divide-y divide-gray-200">

            {
           studentdata.map(dta=>
            <tr>
            <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex-shrink-0 h-16 w-16">
                   <img class="h-16 w-16 rounded-full"  src={`data:image/png;base64,${dta.Photo.img}`} alt=""/>
                 </div> 
                 
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">
                  {dta.Name}
                  </div>

            </td>
           
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">
                  {dta.Class}
                  </div>

            </td>

            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">
                  {dta.Roll}
                  </div>

            </td>
            
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">
                  {dta.Group}
                  </div>

            </td>
            <td class="px-6 py-4 whitespace-nowrap" onClick={()=>deletestudent(dta._id)}>
              <span
               // onClick={()=>removethisnotice(dta._id)} 
               
               class="px-2  py-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 hover:bg-red-800 hover:text-white">
              <i style={{fontSize:"27px"}} class="fa fa-trash" aria-hidden="true"></i>

              </span>
            </td>
         
          </tr>
          )
           }
          
          </tbody>
        </table>}
      </div>
    </div>
  </div>
    <div class="mt-5 pl-5 md:mt-0 md:col-span-2">
      <form onSubmit={onsave}>
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="Name" class="block text-sm font-medium text-gray-700">Full name</label>
                <input type="text" name="Name" id="Name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onBlur={onblurhandler}/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="Class" class="block text-sm font-medium text-gray-700">Class</label>
                <input type="text" name="Class" id="Class" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onBlur={onblurhandler}/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="RollNumber" class="block text-sm font-medium text-gray-700">Roll Number</label>
                <input type="text" name="RollNumber" id="RollNumber" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onBlur={onblurhandler}/>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="Group" class="block text-sm font-medium text-gray-700">Select Group</label>
                <select id="Group" name="Group" autocomplete="Group" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onBlur={onblurhandler}>
                <option>Select a Group</option>
                  <option>Science</option>
                  <option>Buisness Studies</option>
                  <option>Humanities</option>

                </select>
              </div>

              <div className="col-span-6 sm:col-span-4">
              <label class=" block text-sm font-medium text-gray-700">
                Cover photo
              </label>
              <div class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md ">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" onChange={changehandler} name="file-upload" type="file" class="sr-only"/>
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          

            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button onClick={onsend} type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Add Student
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

<div class="hidden sm:block" aria-hidden="true">
  <div class="py-5">
    <div class="border-t border-gray-200"></div>
  </div>
</div>

</div>
  </div>
</div>

    );
};

export default Addstudent;