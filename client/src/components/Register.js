import React, { useState } from 'react';
import {Button,TextField,InputAdornment,Input,IconButton} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default function Register() {
	const [ fullname, setFullname ] = useState();
	const [ username, setUsername ] = useState();
    const [ password, setPassword ] = useState();
    const [ confirmpassword, setConfirmPassword ] = useState();
    const [flag,setFlag]=useState(false);

	const onSubmitForm = async (event) => {
        event.preventDefault();
        const data={fullname:fullname,username:username,password:password,confirmpassword:confirmpassword}
        const response=await fetch("http://localhost:5000/register",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        });
        console.log(response);

    };
    const handleShowPassword=(event)=>{
        setFlag(true);
    }
	return (

		<div>
			<form>
				<div>
					<TextField  name="fullname" placeholder="Full Name" onChange={event=>setFullname(event.target.value)}/>
				</div>
				<div>
					<TextField  name="username" placeholder="User name" onChange={event=>setUsername(event.target.value)} />
				</div>
				<div>
					<Input  type="password"  placeholder="Password" onChange={event=>setPassword(event.target.value)} endAdornment={
                        <InputAdornment position="end">
                        <IconButton  onClick={handleShowPassword} edge="end">
                            {flag ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                        </InputAdornment>
                    }></Input>
			</div>
				<div>
					<TextField  type="password" name="confirmpassword" placeholder="Confirm Password" onChange={event=>setConfirmPassword(event.target.value)} />
				</div>
				<Button color="primary" onClick={onSubmitForm}>Register</Button>
			</form>
		</div>
	);
}
