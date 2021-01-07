import React, { useContext, useEffect, useState } from 'react';

import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Context } from '../../App';

  Modal.setAppElement('#root')
  
const Updateacher = ({modalIsOpen,closeModal,modalTeacher}) => {
  //  console.log(modalTeacher)
 const [updatingvalue,setupdatingvalue]=useState([])
 const [updatingvalueFile,setupdatingvalueFile]=useState(null)
 
 const [Loggedin,setLoggedin]=useContext(Context)
//  console.log(Loggedin)
//  const modalTeacher=Loggedin.Teacher


  const [dataUpdate,setdataUpdated]=useState([])
  const [sending,setsending]=useState(false)

  const blurrHandler=(e)=>{
    const datas={...updatingvalue}
    datas[e.target.name]=e.target.value
    setupdatingvalue(datas)
  }
  const onChange=(e)=>{
const file=e.target.files[0]
setupdatingvalueFile(file)
  }
const updateHanlder=(e)=>{
  e.preventDefault()
const Group =document.getElementById('Group').value
const Email =document.getElementById('email_address').value
const Name =document.getElementById('full_name').value
const Subject =document.getElementById('subject').value

  const formData = new FormData();
formData.append('Name',Name) 
formData.append('Email',Email)
formData.append('Subject',Subject)
formData.append('Group',Group) 
formData.append('File',updatingvalueFile) 



// console.log(updatingvalueFile,Group,Email,Name,Subject)

    fetch(`https://brmc-server.herokuapp.com/updateTeacher/${modalTeacher._id}`,{
      method:'PATCH',
      // headers:{'Content-Type':'application/json'},
      body:formData
    })
    .then(res=>res.json())
    .then(result=>{
      setdataUpdated(result.modifiedCount)

      // if (result==0) {

        setsending(false)
      // setdataUpdated(result)
      }
    // }
      )

}
const onstate=()=>{
  setsending(true)
    }
// console.log(modalTeacher.TeacherEmail)
const{TeacherName,TeacherEmail,TeacherGroup,TeacherSubject}=modalTeacher
console.log(dataUpdate)
    return (
        <div>
        {/* <button onClick={openModal}>Open Modal</button> */}
        <Modal
          isOpen={modalIsOpen}
        //   onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          
          contentLabel="Example Modal"
        className="">
 <button className="text-center flex align-center justify-center text-red-900" onClick={closeModal} ><i class="fas  fa-window-close text-center text-red-900" style={{fontSize:"22px"}}></i></button>
          <h1 style={{fontSize:"25px"}} className="text-center  text-indigo-700 text-lg" >Respected Admin</h1>
          
          <div style={{fontSize:"20px"}} className="text-center">Update Teacher's Data From here</div>
          <br/>
          <div className="flex align-center justify-center">
            
{dataUpdate==1 && <b className="text-gray-700 font-weight-bold text-center">ডাটা পাঠান হয়েছে সাকসেসফুলি,Refressh the page to see changes</b>}
{sending && <div class="text-center text-indigo-400 py-5" >
  <div>
    <span >Loading...</span>
  </div>
  </div>}
          </div>
{/* {modalTeacher.map(modalTeacher=> */}
          <div class="mt-5 md:mt-0 md:col-span-2">
      <form onSubmit={updateHanlder}>
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3" >
                <label for="full_name" class="block text-sm font-medium text-gray-700">Full name</label>
                <input type="text" defaultValue={TeacherName} name="full_name" id="full_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onBlur={blurrHandler}/>
              </div>

              <div class="col-span-6 sm:col-span-3" >
                <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" defaultValue={TeacherSubject} name="subject" id="subject" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onBlur={blurrHandler}/>
              </div>

              <div class="col-span-6 sm:col-span-4" >
                <label for="email_address" class="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" defaultValue={TeacherEmail} name="email_address" id="email_address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={blurrHandler} />
              </div>

              <div class="col-span-6 sm:col-span-3" >
                <label for="Group" class="block text-sm font-medium text-gray-700">Select Group</label>
                <select id="Group" name="Group" autocomplete="Group" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
                <option defaultValue={TeacherGroup}>{TeacherGroup}</option>
                  <option>Science</option>
                  <option>Buisness Studies</option>
                  <option>Humanities</option>

                </select>
              </div>

              <div className="col-span-6 sm:col-span-4" >
              <label class=" block text-sm font-medium text-gray-700">
                Cover photo
              </label>
              <div class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md ">
                <div class="space-y-1 text-center">
                  {updatingvalueFile ? <p className="text-md text-yellow-400">{updatingvalueFile.name}</p> : <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  }
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload"  name="file-upload" type="file" class="sr-only" onChange={onChange}/>
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
            <button onClick={onstate} type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
    {/* )} */}
        </Modal>
      </div>

    );
};

export default Updateacher;