import { useContext, useState } from "react"
import { UserContext } from "../store/user"
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

function Account(){
    const {ready, user, setuser} = useContext(UserContext);
    const [tohomepage,settohomepage]= useState(null);

    if(!ready) return 'Loading...';
    if(ready && !user && !tohomepage) return <Navigate to={'/login'}/>


    const {subpage}=useParams();
    function Linkclasses(type=null){
        let classes= 'py-2 px-6';
        if(type === subpage || (subpage===undefined && type==='profile')){
            classes += ' bg-primary text-white rounded-full'
        }
        if(type !== subpage || (subpage!==undefined)){
            classes += ' font-semibold '
        }
        return classes;
    }
    

    async function Logout(){
        await axios.post('/logout')
        settohomepage('/')
        setuser(null)
    }


    if(tohomepage){
        return <Navigate to={tohomepage} />
    }
    return(
        <div>
            <nav className="w-full flex justify-center mt-4 gap-20 mb-8">

                <Link className= {Linkclasses('profile')} to={'/account/profile'} >My Profile</Link>

                <Link className={Linkclasses('bookings')} to={'/account/bookings'} >My Bookings</Link>

                <Link className={Linkclasses('places')} to={'/account/places'} >My Accommodations</Link>
            </nav>

            {subpage==='profile' && (
                <div className="text-center max-w-lg mx-auto mt-20 border border-gray-300 rounded-3xl shadow-md shadow-gray-300">
                    <p className="mt-4">Logged in as {user.name} ({user.email})</p> <br/>
                    <button onClick={Logout} className="primary max-w-md  mb-5 ">Logout</button>
                </div>
            )}
        </div>
    )
}

export default Account