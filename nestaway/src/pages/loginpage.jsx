import { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Login(){
    const [email,setemail]= useState('');
    const [password, setpassword] = useState('');

    const loginuser = async(ev)=>{
        ev.preventDefault()
        try{
            await axios.post('/login',{
                email,
                password,
            })

            alert('User Log In Successful.')
        } 
        catch(error){
            alert('Login Failed.Try again later')
        }
    }

    return(
        <div className="mt-20 grow flex items-center justify-around">
            <div className="mb-64">

                <h1 className="text-4xl text-center font-bold ">Login</h1>
                <form className=" ml-90 mt-4 p-4 max-w-md mx-auto border" onSubmit={loginuser}>

                    <input type="email" placeholder="your@email.com" 
                        value={email} 
                        onChange={(e)=>setemail(e.target.value)} 
                    />
                    <input type="password" placeholder="password" 
                        value={password} 
                        onChange={(e)=>setpassword(e.target.value)} 
                    />
                    <button className="ml-1 mt-1 primary">Login</button>
                    <div className="mt-3 text-center text-gray-500"> 
                        Don't have an Account yet? <Link to={'/register'} className="underline font-semibold text-black">Register now</Link>
                    </div>

                </form>
            </div>
            
        </div>
    )
}

export default Login