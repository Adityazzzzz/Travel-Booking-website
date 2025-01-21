import { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Register(){
    const [name,setname]= useState('');
    const [email,setemail]= useState('');
    const [password,setpassword]= useState('');

    const registeruser=async(ev)=>{
        ev.preventDefault()
        try{
            await axios.post('/register',{
                name,
                email,
                password,
            })
            alert('Registration Successful. Now you can login ')
        } 
        catch(error){
            alert('Registration Failed.')
        }
    }


    return(
        <div className="mt-20 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center font-bold ">Register</h1>

                <form className=" ml-90 mt-4 p-4 max-w-md mx-auto border" onSubmit={registeruser}>
                    <input type="text" placeholder="name" 
                        value={name} 
                        onChange={(e)=>setname(e.target.value)}
                    />
                    <input type="email" placeholder="your@email.com" 
                        value={email} 
                        onChange={(e)=>setemail(e.target.value)}
                    />
                    <input type="password" placeholder="password"  
                        value={password} 
                        onChange={(e)=>setpassword(e.target.value)}
                    />
                    <button className="ml-1 mt-1 primary">Register</button>
                    <div className="mt-3 text-center text-gray-500"> 
                        already have an account? <Link to={'/login'} className="underline font-semibold text-black">Login </Link>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Register