import { useContext, useEffect, useState } from "react"
import { UserContext } from "../store/user"
import { Link, Navigate, useLocation} from "react-router-dom";
import axios from "axios";
import Places from "./Placespage";
import AccountNav from "../components/AccountNav";
import { toast } from 'react-toastify';


function Profile(){
    const {ready, user, setuser} = useContext(UserContext);
    const [tohomepage,settohomepage]= useState(null);

    const [user1, setUser1] = useState(null);
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        setUser1(storedUser);
        window.addEventListener('storage', () => {
          const updatedUser = JSON.parse(localStorage.getItem('user'));
          setUser1(updatedUser);
        });
    }, []);

    if(!ready) return 'Loading...';
    if(ready && !user && !tohomepage) return <Navigate to={'/login'}/>

    const location = useLocation();
    const subpage = location.pathname.split('/').pop();

    async function Logout(){
        await axios.post('/logout')
        localStorage.removeItem('user')
        window.dispatchEvent(new Event('storage'));
        toast.success('Logout Successfull')
        settohomepage('/')
        setuser(null)
    }
    if(tohomepage){
        return <Navigate to={tohomepage} />
    } 


    return(
        <div>
            <AccountNav/>
            {subpage==='profile' && (
                <div className="text-center max-w-lg mx-auto mt-20 border border-gray-300 rounded-3xl shadow-md shadow-gray-300">
                    <p className="mt-4">Logged in as {user1.user.name} ({user1.user.email})</p> <br/>
                    <button onClick={Logout} className="primary max-w-md  mb-5 ">Logout</button>
                </div>
            )}
            {subpage==='places' && (<Places/>)}
        </div>
    )
}

export default Profile