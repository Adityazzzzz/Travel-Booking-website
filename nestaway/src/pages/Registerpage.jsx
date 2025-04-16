import { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import { UserContext } from '@/store/user';

function Register(){
    const [name,setname]= useState('');
    const [email,setemail]= useState('');
    const [password,setpassword]= useState('');
    const [redirect, setredirect] = useState(false);
    const {setuser} =useContext(UserContext)

    const registeruser=async(ev)=>{
        ev.preventDefault()
        try{
            const {data}=await axios.post('/register',{
                name,
                email,
                password,
            })
            setuser(data)
            console.log(data.user)
            localStorage.setItem('user', JSON.stringify(data));
            window.dispatchEvent(new Event('storage'));
            toast.success('Registration Successful. Now you can login ');
            setredirect(true)
        } 
        catch(error){
            toast.error('Registration Failed.')
        }
    }
    if(redirect){
        return <Navigate to={'/'}/>
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