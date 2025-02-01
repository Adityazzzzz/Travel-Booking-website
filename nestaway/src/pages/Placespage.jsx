import { Link} from "react-router-dom"
import AccountNav from "../components/AccountNav";

function Places(){
    return(
        <div>
            <AccountNav/>
            <div className="text-center">
                List of all places <br/>
                <Link to={'/account/places/new'} className="inline-flex bg-primary text-white py-2 px-6 rounded-full ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add new places
                </Link>
            </div>
        </div>
    )
}

export default Places