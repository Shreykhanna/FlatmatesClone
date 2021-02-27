import React,{useEffect,useState} from 'react'

export default function Login() {
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();

    const onSubmit=async (event)=>{
        event.preventDefault();
        const response=await fetch('http://localhost:5000/login');

    }
    return (
        <div>
            <form class="login" onSubmit={onSubmit}>
            <div>
            <input type="text"  placeholder="Username" onChange={event=>setUsername(event.target.value)}/>
            </div>
            <div>
            <input type="text"  placeholder="Password" onChange={event=>setPassword(event.target.value)}/>
            <button >Login</button>
            </div>
           
            </form>
        </div>
    )
}
