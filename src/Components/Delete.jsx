import React from "react";
import { useParams,useSearchParams } from "react-router-dom";

const Delete = ()=>{
console.log(useParams())
const {users} = useParams();
console.log(useSearchParams())


    return <h1>Delete user {users}</h1>
}

export default Delete;