import React from "react";
import { Link } from "react-router-dom";

const Header = () =>{

return (
<div>
<header className='sm:flex sm:flex-row pt-2.5 max-w-500'>
<Link to="/">Home</Link>
<Link to="/user/list">List User</Link>
<Link to="/user/add">Add User</Link>
<Link to="/profile/edit">Edit Profile</Link>
</header>

</div>
)
}

export default Header;

