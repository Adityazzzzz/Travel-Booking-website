import { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import Loader from '@/components/loader'; 

function Register(){
    const [name,setname]= useState('');
    const [email,setemail]= useState('');
    const [password,setpassword]= useState('');
    const [variant, setVariant] = useState("spinner");
    const [size, setSize] = useState("md");
    const [loading, setLoading] = useState(false); 

    const registeruser=async(ev)=>{
        ev.preventDefault();
        setLoading(true); 
        try{
            await axios.post('/register',{
                name,
                email,
                password,
            })
            toast.success('Registration Successful. Now you can login ')
        } 
        catch(error){
            toast.error('Registration Failed.')
        }
        finally {
            setLoading(false); 
        }
    }

    return(
        <>
        {loading && (
            <div className="fixed inset-0 z-50 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 flex justify-center items-center">
            <Loader variant={variant} size={size} />
            </div>
        )}
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
                    <button className="ml-1 mt-1 primary" >Register</button>
                    <div className="mt-3 text-center text-gray-500"> 
                        already have an account? <Link to={'/login'} className="underline font-semibold text-black">Login </Link>
                    </div>
                </form>
            </div>
            
        </div>
        </>
    )
}

export default Register