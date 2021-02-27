import React from 'react'

export default function AdForm() {
    const onSubmit=()=>{

    }
    return (
        <div>
            <form onSubmit={onSubmit}> 
            <input type="text" placeholder="Description"/>
            <input type="text" placeholder="Features"/>
            
            </form>
        </div>
    )
}
