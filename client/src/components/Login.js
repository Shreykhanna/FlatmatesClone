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
            <form onSubmit={onSubmit}>
            <input type="text" onChange={event=>setUsername(event.target.value)}/>
            <input type="text" onChange={event=>setPassword(event.target.value)}/>
            <button >Login</button>
            </form>
        </div>
    )
}
