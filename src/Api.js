import {dataUrl} from './Config'

export const createUser = async(userData)=>{
const response = await fetch (
    `${dataUrl}/user`,
    {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(userData)
    }

)
const data = await response.json()

return data;
}

export const getUsers = async()=>{
const response = await fetch(
    `${dataUrl}/user`
)

const data = await response.json()

return data;
}

export const fetchUser = async(id)=>{
    const response = await fetch(
        `${dataUrl}/user/${id}`
    )
    
    const data = await response.json()
    
    return data;
    }


export const updateUsers = async(id,userData)=>{
const response = await fetch(
    `${dataUrl}/user/${id}`,
    {
        method:'PUT',
        body:JSON.stringify(userData),
        headers:{'Content-type':'application/json'}    
    }

)
const data = await response.json();
return data;
}
