import React, { useState } from 'react';

const Addadmin = () => {
  const [adminEmail,addadminEmail]=useState([])
  const blurrHandler=(e)=>{
  const adminEmailID={...adminEmail}
  adminEmailID[e.target.name]=e.target.value
  addadminEmail(adminEmailID)
  }

  const[gotresult,setresult]=useState([])
const onsave =(e)=>{
  fetch('https://brmc-server.herokuapp.com/postadmins',{
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
   body:JSON.stringify(adminEmail)   
  })
  .then(res=>res.json())
  .then(result=>{
    // console.log(result)
    ;setsending(false);setresult(result)})
  .catch(error=>console.log(error))
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
    
{gotresult.insertedCount==true &&
<div class="text-center text-indigo-400 " >
 <b className="text-gray-700 t font-weight-bold text-center">ডাটা পাঠান হয়েছে সাকসেসফুলি,Refressh the page to see changes</b>
 </div>
  } 
  
{gotresult.insertedCount==false &&
<div class="text-center text-red-400 " >
 <b className="text-gray-700 t font-weight-bold text-center">an Error happend,Please Retry after a short time</b>
 </div>
  } 
 {sending &&  
<div class="text-center text-lg text-indigo-400 py-5" >
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
        <h3 class="text-lg font-medium leading-6 text-gray-900">Add an Admin</h3>
        <p class="mt-1 text-sm text-gray-600">
          Use this email as a Admin/Controller email like u are using now
        </p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form onSubmit={onsave}>
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first_name" class="block text-sm font-medium text-gray-700">Enter Email</label>
                <input type="text" name="AdminEmail" id="first_name" autocomplete="given-name" onBlur={blurrHandler} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

            
          

            </div>
          </div>
          <div class="px-4 py-3 bg-gray-200 text-right sm:px-6">
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

export default Addadmin;