import React, { useEffect, useState } from 'react';

const Notice = () => {
  const[notice,setnotice]=useState([])
  const[send,setsend]=useState(false)

  const onblurhandler=(e)=>{
  const Notice={...notice}
  Notice[e.target.name]=e.target.value
  setnotice(Notice)
  }
  const{NoticeText}=notice

const onsave=(e)=>{
  fetch('https://brmc-server.herokuapp.com/postnotice',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
   body:JSON.stringify(notice)  
  })
  .then(result=>{
    // console.log(result);
    setsend(true)})
  .catch(error=>{console.log(error)})
e.preventDefault()
}
const [dldata,setdldata]=useState([])
const removethisnotice=(id)=>{
  fetch(`https://brmc-server.herokuapp.com/unpinAnotice/${id}`,{
    method:"DELETE"
  })
  // .then(res=>res.json())
  .then(result=>setdldata(result))
}

const [data,setdata]=useState([])
useEffect(()=>
fetch('https://brmc-server.herokuapp.com/getNotice')
.then(res=>res.json())
.then(result=>setdata(result))
,[dldata,send])

    return (
       <div>
       <div class="md:grid  md:px-10 md:py-10 md:gap-6">
         <div class="md:col-span-1">
      
     
     <div class="hidden sm:block" aria-hidden="true">
       <div class="py-5">
         <div class="border-t border-gray-200"></div>
       </div>
     </div>
     
     <div class="mt-10 sm:mt-0 md:pl-5">
       <div class="md:grid md:grid-cols-3 md:gap-6">
         <div class="md:col-span-1">
           <div class="px-4 sm:px-0">
             <h3 class="text-lg font-medium leading-6 text-gray-900">Add a notice</h3>
             <p class="mt-1 text-sm text-gray-600">
The Notices will be loading on the Homepage,so be carefull to post your sentence             </p>
           </div>
         </div>
         <div class="mt-5 md:mt-0 md:col-span-2">
           <form onSubmit={onsave}>
             <div class="shadow overflow-hidden sm:rounded-md">
               <div class="px-4 py-5 bg-white sm:p-6">
                 <div class="grid grid-cols-6 gap-6">
                   <div class="col-span-6 sm:col-span-3">
                     <label for="NoticeText" class="block text-sm font-medium text-gray-700">Write The Notice Bellow</label>
                     <input type="text" name="NoticeText" id="NoticeText" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-24 shadow-sm sm:text-sm border-gray-300 rounded-md" onBlur={onblurhandler}/>
                   </div>
     
                 
               
     
                 </div>
               </div>
               <div class="px-4 py-3 bg-gray-200 text-right sm:px-6">
                 <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                   Save
                 </button>
               </div>
             </div>
           </form>
           
<div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {/* Name */}
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statement
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
           {data.map(dta=>
             <tr>
             <td class="px-6 py-4 whitespace-nowrap">
               <div class="flex items-center">
                 <div class="flex-shrink-0 h-10 w-10 rounded-full  ">
                 <i style={{fontSize:"40px"}} class="fa fa-bullhorn" aria-hidden="true"></i>

                 </div>
                     
               </div>
             </td>
             <td class="px-6 py-4 whitespace-nowrap">
               <div class="text-sm text-gray-900">{dta.NoticeText}</div>

             </td>
             <td class="px-6 py-4 whitespace-nowrap">
               <span onClick={()=>removethisnotice(dta._id)} class="px-2  py-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 hover:bg-red-800 hover:text-white">
               <i style={{fontSize:"27px"}} class="fa fa-trash" aria-hidden="true"></i>

               </span>
             </td>
          
           </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

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

export default Notice;