import React,{useState,useEffect} from "react";

import { fetchUser,updateUsers} from "../Api";
import { useSearchParams,useNavigate} from "react-router-dom";

const Edit = () => {
    const nav = useNavigate();

    const [param] = useSearchParams();
    const initialState = {
        id: '',
        fname:'',
        dob: '',
        gender: '',
        picurl: '',
    }
    const [formData, setFormData] = useState(initialState);
    const id  = param.get("id")
    const loadUsers = async () => {
        const response = await fetchUser(id);
        setFormData(response)
        console.log(response)
    }

    useEffect(() => {
        loadUsers();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    
    const [dialogHidden,setDialogHidden] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        
        const response = updateUsers(id,formData)
        console.log(response)
        setDialogHidden(false)
        setTimeout(()=>{
            setDialogHidden(true)
            nav('/')
        },2000)
        
    }
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value,
        });
        
    };

    return (
        <div className="px-4 py-4 w-full ">
            <p className="text-base lg:text-xl font-bold font-lato">Edit an user</p>
            <form onSubmit={handleSubmit} >
                <div className="flex flex-row w-1/2 lg:w-1/3 pt-4 select-none">
                    <label className="w-1/2 text-sm lg:text-base font-bold h-8 py-1" htmlFor="id" >Student ID</label>
                    <input 
                     onChange={handleChange} 
                     value={formData.id}
                     className="text-sm lg:text-base bg-blue-300 focus:bg-lime-300 px-2 h-8 w-1/2" 
                     type="text" 
                     required 
                     id="id" 
                     name="id"
                     readOnly
                     />
                </div>
                <div className="flex flex-row w-1/2 lg:w-1/3 pt-4 select-none">
                    <label className="w-1/2 text-sm lg:text-base font-bold h-8 py-1" htmlFor="fname" >Full Name</label>
                    <input 
                     onChange={handleChange} 
                     value={formData.fname}
                     className="text-sm lg:text-base bg-blue-300 focus:bg-lime-300 px-2 h-8 w-1/2" 
                     type="text" 
                     required 
                     id="fname" 
                     name="fname"/>
                </div>
                <div className="flex flex-row w-1/2 lg:w-1/3 pt-4 select-none">
                    <label className="w-1/2 text-sm lg:text-base font-bold h-8 py-1" htmlFor="dob">Date of Birth</label>
                    <input 
                     onChange={handleChange} 
                     value={formData.dob}
                     className="text-sm lg:text-base bg-blue-300 focus:bg-lime-300 px-2 h-8 w-1/2" 
                     type="date" 
                     required 
                     id="dob" 
                     name="dob"/>
                </div>
                <div className="flex flex-row w-1/2 lg:w-1/3 pt-4 select-none">
                    <label className="w-1/2 text-sm lg:text-base font-bold h-8 py-1" htmlFor="gender">Gender</label>
                    <select 
                    onChange={handleChange}
                    value={formData.gender}
                    className="text-sm lg:text-base bg-blue-300 focus:bg-lime-300 px-2 h-8 w-1/2"  
                    required id="gender" 
                    name="gender">
                        <option>Select...</option>
                        <option value="Male">Male</option>
                        <option value="Male">Female</option>
                    </select>
                </div>
                <div className="flex flex-row w-1/2 lg:w-1/3 pt-4 select-none">
                    <label className="w-1/2 text-sm lg:text-base font-bold h-8 py-1" htmlFor="picurl">Profile Picture</label>
                    <input 
                     onChange={handleChange} 
                     value={formData.picurl}
                     className="text-sm lg:text-base bg-blue-300 focus:bg-lime-300 px-2 h-8 w-1/2" 
                     type="text" 
                     required 
                     id="picurl"
                    name="picurl"/>
                </div>
                <div className="flex flex-row w-1/2 lg:w-1/3 pt-4 select-none">
                <button type="submit" className="text-sm lg:text-base px-4 py-2 bg-blue-600 text-white" >Submit</button>
                </div>
            </form>
            <dialog className="fixed top-0 flex-col items-center border rounded-md" style={{display:dialogHidden?'none':'flex'}}>
            <p className="text-xl  px-4 py-2 tracking-wider">Alert !</p>
            <p className="text-xl  px-4 py-2 tracking-wider">User has been modified successfully</p>
            </dialog>
        </div>

    )

}

export default Edit;