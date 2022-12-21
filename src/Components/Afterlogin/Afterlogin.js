import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../App';
import DashBoard from '../Dashboard/DashBoard';
import Nomatch from '../Nomatch/Nomatch';

const Afterlogin = () => {
    const [Loggedin,setLoggedin]=useContext(Context)

    const [data,setdata]=useState([])
      const{email}=Loggedin
      console.log(email)
  useEffect(()=>
  fetch(`https://server-brmc.onrender.com/getadmins?AdminEmail=${email}`)
  .then(res=>res.json())
  .then(result=>{
    if (result.length == 0) {
    const add={...Loggedin}
    add.isAdmin=false
    setLoggedin(add)
}
else{
    const add2={...Loggedin}
    add2.isAdmin=true
    setLoggedin(add2)
}})
  ,[])
  console.log(data)
    return (
        <div>
            {Loggedin.isAdmin ? <DashBoard/> :<Nomatch/>}

        </div>
    );
};

export default Afterlogin;