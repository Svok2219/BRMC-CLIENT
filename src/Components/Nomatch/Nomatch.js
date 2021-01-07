import React from 'react';

const Nomatch = () => {
    return (
        <div className="min-h-screen flex items-center gow justify-center bg-gray-700 py-8 px-8">
                 <div className="px-5 py-5 border-2 gow border-white">
         <div className="px-10 py-10 border-2 border gow gray-50">
           <div className="text-center border-2 border-blue-700 py-10 px-10">
            <h2 style={{fontSize:"50px"}}>404 Alert</h2>
            <br/>
            <b className="text-yellow-200">this page might be <span className="text-yellow-700" > <b style={{fontSize:"25px"}}>restricated</b> </span>  or No such vaild page u are searching of</b>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Nomatch;