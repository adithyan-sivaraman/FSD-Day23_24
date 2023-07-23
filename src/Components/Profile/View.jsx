/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { fetchUser } from "../../Api";
import { useSearchParams } from "react-router-dom";

const View = () => {
    
    
    const [params] = useSearchParams();
    const id = params.get("id")
    const initialState = {
      id: '',
      fname:'',
      dob: '',
      gender: '',
      picurl: '',
  }
  const [formData, setFormData] = useState(initialState);
    const loadUsers = async () => {
        const response = await fetchUser(id);
        setFormData(response)
        
    }

    useEffect(() => {
        loadUsers();
    }, [])

    

    return (
      <div className="px-4 py-4 w-full ">
          <p className="text-base lg:text-xl font-bold font-lato">Add an user</p>
          <form>
              <div className="flex flex-row w-1/2 lg:w-1/3 pt-4 select-none">
                  <label className="w-1/2 text-sm lg:text-base font-bold h-8 py-1" htmlFor="id" >Student ID</label>
                  <input 
                   
                   value={formData.id}
                   className="text-sm lg:text-base bg-blue-300 focus:bg-lime-300 px-2 h-8 w-1/2" 
                   type="text" 
                   readOnly
                   id="id" 
                   name="id"
                   />
              </div>
              <div className="flex flex-row w-1/2 lg:w-1/3 pt-4 select-none">
                  <label className="w-1/2 text-sm lg:text-base font-bold h-8 py-1" htmlFor="fname" >Full Name</label>
                  <input 
                   
                   value={formData.fname}
                   className="text-sm lg:text-base bg-blue-300 focus:bg-lime-300 px-2 h-8 w-1/2" 
                   type="text" 
                   readOnly
                   id="fname" 
                   name="fname"/>
              </div>
              <div className="flex flex-row w-1/2 lg:w-1/3 pt-4 select-none">
                  <label className="w-1/2 text-sm lg:text-base font-bold h-8 py-1" htmlFor="dob">Date of Birth</label>
                  <input 
                   
                   value={formData.dob}
                   className="text-sm lg:text-base bg-blue-300 focus:bg-lime-300 px-2 h-8 w-1/2" 
                   type="date" 
                   readOnly
                   id="dob" 
                   name="dob"/>
              </div>
              <div className="flex flex-row w-1/2 lg:w-1/3 pt-4 select-none">
                  <label className="w-1/2 text-sm lg:text-base font-bold h-8 py-1" htmlFor="gender">Gender</label>
                  <select 
                 
                  value={formData.gender}
                  className="text-sm lg:text-base bg-blue-300 focus:bg-lime-300 px-2 h-8 w-1/2"  
                  readOnly
                  id="gender" 
                  name="gender">
                  <option value={formData.gender}>{formData.gender}</option>
                  </select>
              </div>
              <div className="flex flex-row w-1/2 lg:w-1/3 pt-4 select-none">
                  <label className="w-1/2 text-sm lg:text-base font-bold h-8 py-1" htmlFor="picurl">Profile Picture</label>
                 <img src={formData.picurl} alt=""></img>
              </div>
              
          </form>
     
      </div>

  )

}

export default View;