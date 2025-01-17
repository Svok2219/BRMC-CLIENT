import React, { useState } from 'react';

const AddTeacher = () => {
  var FormData = require('form-data');

  const[teacherdata,setteacherdata]=useState([])
  const[file,setfile]=useState(null)

 const onblurhandler=(e)=>{
const tcherdata={...teacherdata}
 tcherdata[e.target.name]=e.target.value
 setteacherdata(tcherdata)
  }
  const changehandler=(e)=>{
    const File=e.target.files[0]
    setfile(File)
  }
  const[result,setresult]=useState([])

  const{full_name,subject,email_address,Group,FB}=teacherdata
  // console.log(file,teacherdata)
  const[studentdataerror,setstudentdataerror]=useState(false)

const onsave=(e)=>{
  var form = new FormData();
  form.append('Name', full_name);
  form.append('Subject', subject);
  form.append('Email', email_address);
  form.append('Group', Group);
  form.append('Facebook', FB);
  form.append('Image', file);
  // form.append('my_field', 'my value');

  fetch('https://server-brmc.onrender.com/postteachers',{
    method:'POST',
    body:form
  })
  .then(res=>res.json())
  .then(result=>{console.log(result);setresult(result);setstudentdataerror(false);setsending(false)})
  .catch(error=>{console.log(error);setsending(false);setstudentdataerror(true)})
e.preventDefault()
}

const [sending,setsending]=useState(false)
const onsend=()=>{
setsending(true)
}
    return (
 
<div>
  <div class="md:grid  md:px-10 md:py-10 md:gap-6">
    <div class="md:col-span-1">
 

<div class="" aria-hidden="">
  <div class="py-5">
    
{result==true &&
<div class="text-center text-indigo-400 " >
 <b className="text-gray-700 t font-weight-bold text-center">ডাটা পাঠান হয়েছে সাকসেসফুলি,Refressh the page to see changes</b>
 </div>
  } 
  
{result==false && studentdataerror &&
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
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Teacher's Information</h3>
        <p class="mt-1 text-sm text-gray-600">
          Use a permanent address where you can receive mail.
        </p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form onSubmit={onsave}>
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="full_name" class="block text-sm font-medium text-gray-700">Full name</label>
                <input type="text" name="full_name" id="full_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onBlur={onblurhandler}/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" name="subject" id="subject" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onBlur={onblurhandler}/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="email_address" class="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" name="email_address" id="email_address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onBlur={onblurhandler}/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="FB" class="block text-sm font-medium text-gray-700">FB url link</label>
                <input type="text" name="FB" id="FB"  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onBlur={onblurhandler}/>
              </div>
              <div class="col-span-6 sm:col-span-3">
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
                {file ? <p className="text-md text-yellow-400">{file.name}</p> : <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
}
                 
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
              Save
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

export default AddTeacher;