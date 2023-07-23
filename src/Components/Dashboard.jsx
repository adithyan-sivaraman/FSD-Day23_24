import React, { useEffect, useState } from "react";
import { getUsers } from "../Api";
import { Link,useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [users, setUser] = useState([]);
    const nav = useNavigate();
    const loadUsers = async () => {
        const response = await getUsers();
        setUser(response)
        
    }

    useEffect(() => {
        loadUsers();
    }, [])
    const handleClick=()=>{
        
        nav('/user/add')
    }
    

    return (
        <div className="flex flex-col ">
            <p className="text-lg lg:text-xl font-extrabold px-4 mt-4">Dashboard</p>
            <table className="mt-4 ml-4 mr-4 !border-collapse w-5/6 sm:w-4/5 ">
             <thead>
             <tr className="hover:bg-lime-300 bg-gray-200">
             <th className="text-base lg:text-base border border-white">ID</th>
             <th className="text-base lg:text-base border border-white">Name</th>
             <th className="text-base lg:text-base border border-white">DOB</th>
             <th className="text-base lg:text-base border border-white">Gender</th>
             <th className="text-base lg:text-base border border-white">Image</th>
             <th className="text-base lg:text-base border border-white">Edit User</th>
             <th className="text-base lg:text-base border border-white">View Profile</th>
             
             </tr>
             </thead>
             <tbody>
             {users.length > 0 ? (
               // Render the table rows when users array has data
               users.map((user) => (
                 <tr key={user.id} className="hover:bg-lime-300">
                   <td className="text-base lg:text-base border-2 border-blue-50 px-4 py-1 w-1/20">{user.id}</td>
                   <td className="text-base lg:text-base border-2 border-blue-50 px-4 py-1 w-1/6">{user.fname}</td>
                   <td className="text-base lg:text-base border-2 border-blue-50 px-4 py-1 w-1/8">{user.dob}</td>
                   <td className="text-base lg:text-base border-2 border-blue-50 px-4 py-1 w-1/10">{user.gender}</td>
                   <td className="text-base lg:text-base border-2 border-blue-50 px-4 py-1 w-1/10 text-center"><img src={user.picurl} alt="" width="120" height="120"></img></td>
                   <td className="text-base lg:text-base border-2 border-blue-50 py-1 w-1/10 text-center">
                     <Link to={`/user/edit/?id=${user.id}`}>
                       <i className="fa-solid fa-pen-to-square"></i>
                     </Link>
                   </td>
                   <td className="text-base lg:text-base border-2 border-blue-50  py-1 w-1/10  text-center">
                     <Link to={`/profile/view/?id=${user.id}`}>
                     <i class="fa-regular fa-eye "></i>
                     </Link>
                   </td>
                 </tr>
               ))
             ) : (
               // Render a single row with a single cell spanning all columns when users array is empty
               <tr className="hover:bg-lime-300">
             <td onClick={handleClick}
             className="text-base lg:text-base border-2 border-blue-50 px-4 py-3 underline font-extrabold tracking-wide" colSpan="6">
               No User Records Exists... Click here to Add New User
             </td>
                 
               </tr>
             )}
           </tbody>
            </table>
        </div>

    )

}

export default Dashboard;