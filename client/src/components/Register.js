import React, { useEffect, useState } from 'react';

export default function Register() {
	const [ fullname, setFullname ] = useState();
	const [ username, setUsername ] = useState();
	const [ password, setPassword ] = useState();
	const [ confirmpassword, setConfirmPassword ] = useState();

	const onSubmitForm = async (event) => {
        event.preventDefault();
        console.log("enterd");
        const data={fullname:fullname,username:username,password:password,confirmpassword:confirmpassword}
        const response=await fetch("http://localhost:5000/register",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        });
        console.log(response);

	};
	return (

		<div>
			<form onSubmit={onSubmitForm}>
				<div>
					<input  name="fullname" placeholder="Full Name" onChange={event=>setFullname(event.target.value)}/>
				</div>
				<div>
					<input  name="username" placeholder="User name" onChange={event=>setUsername(event.target.value)} />
				</div>
				<div>
					<input  name="password" placeholder="Password" onChange={event=>setPassword(event.target.value)} />
				</div>
				<div>
					<input  name="confirmpassword" placeholder="Confirm Password" onChange={event=>setConfirmPassword(event.target.value)} />
				</div>
				<button>Register</button>
			</form>
		</div>
	);
}
