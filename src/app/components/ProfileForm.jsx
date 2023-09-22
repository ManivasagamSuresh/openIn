'use client'
import React, { useState } from "react";
import {  Montserrat, Lato, Poppins, Figtree } from 'next/font/google'

const monteserat = Montserrat({ subsets: ['latin'] });
const figtree = Figtree({ 

  subsets: ['latin'] })



function ProfileForm({HandleOpen}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    Instagram: "",
    Youtube: "",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleNext = () => {
    setCurrentPage(2);
  };

  const handleBack = () => {
    setCurrentPage(1);
  };

  const handleDone = () => {
    console.log(formData); 
  };

  return (
    <div className="bg-profileTrans bg-opacity-75 text-black w-screen h-screen z-50 flex items-center justify-center ">
      <div className="bg-white h-fit w-11/12 md:w-7/12 lg:w-5/12  flex flex-col rounded-2xl shadow-xl">
        <div className={`header p-7 flex justify-between px-4 py-4 text-xl ${figtree.className} `}><span className="font-bold"> Add new profile</span> <span className="text-greySoft cursor-pointer" onClick={()=>{HandleOpen()}}>X</span></div>
        <hr className="text-greySoft opacity-50"/>
        <div className="main px-7 py-3">
          
            <div className="flex ">
              <div className={`flex-1 text-center ${figtree.className} font-semibold mt-2 mb-8 mr-2 ${currentPage === 1 ? "LineBlue":'Line'}  `}>Basic</div>
              <div className={`flex-1 text-center ${figtree.className} font-semibold mt-2 mb-8 ml-2 ${currentPage === 1 ? "Linee":'LineBlue'} `}>Social</div>
            </div>
          

          <form className="inputs flex flex-col ">
            {currentPage === 1 && (
              <div className="basic flex flex-col gap-5">
                <div className=" flex flex-col gap-2">
                  <label htmlFor="name" className={`${figtree.className}`}> Enter Name*</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Eg. John Doe"
                   className=" border border-greySoft  border-opacity-50 p-1 md:p-2 rounded"
                  />
                </div>
                <div className=" flex flex-col gap-2">
                  <label htmlFor="email" className={`${figtree.className}`}>Enter Email*</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Eg. John@xyz.com"
                    className=" border border-greySoft  border-opacity-50 p-1 md:p-2 rounded"
                  />
                </div>
                <div className=" flex flex-col gap-2">
                  <label htmlFor="phone" className={`${figtree.className}`}>Enter Phone*</label>
                  <input
                    id="phone"
                    type="number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Eg. 1234567890"
                    className=" border border-greySoft border-opacity-50 p-1 md:p-2 rounded"
                  />
                </div>
              </div>
            )}
            {currentPage === 2 && (
              <div className="social flex flex-col gap-5">
                <div className=" flex flex-col gap-2">
                  <label htmlFor="Instagram" className={`${figtree.className}`}>Instagram Link (Optional)  </label>
                  <input
                    id="Instagram"
                    type="text"
                    value={formData.Instagram}
                    onChange={handleInputChange}
                    placeholder="Eg...instagram.com/username"
                    className=" border border-greySoft  border-opacity-50 p-1 md:p-2 rounded"
                  />
                </div>
                <div className=" flex flex-col gap-2">
                  <label htmlFor="Youtube" className={`${figtree.className}`}>Youtube Link (Optional)</label>
                  <input
                    id="Youtube"
                    type="text"
                    value={formData.Youtube}
                    onChange={handleInputChange}
                    placeholder="Eg...youtebe/username"
                    className=" border border-greySoft  border-opacity-50 p-1 md:p-2 rounded"
                  />
                </div>
              </div>
            )}
          </form>
        </div>
        <div className="footer px-7 py-3 flex justify-end gap-5">
          {currentPage === 1 && (
            <button onClick={handleNext} className={`py-2 px-3 rounded-lg text-white bg-blueS ${figtree.className} cursor-pointer`}>Next</button>
          )}
          {currentPage === 2 && (
            <button onClick={handleBack} className={`py-2 px-3 rounded-lg text-white bg-blueS ${figtree.className} cursor-pointer`}>Back</button>
          )}
           {currentPage === 2 && (
            <button onClick={handleDone}className={`py-2 px-3 rounded-lg text-white bg-blueS ${figtree.className} cursor-pointer`}>Done</button>
          )}

          
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
