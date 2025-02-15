import { Link} from "react-router-dom"
import AccountNav from "../components/AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";
import PlaceImg from "../components/Placeimg";

function Places(){
    const [places,setplaces]=useState([]);
    useEffect(()=>{
        axios.get('/user-places').then(({data})=>{
            setplaces(data);
        });
    },[]);

    return(
        <div>
            <AccountNav/>
            <div className="text-center">
                <Link to={'/account/places/new'} className="inline-flex bg-primary text-white py-2 px-6 rounded-full ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add new places
                </Link>
            </div>
            <div className="mt-4 max-w-7xl mx-auto">
                {places.length>0 && places.map(place=>(
                    <Link to={'/account/places/' + place._id } key={place._id} className="flex cursor-pointer gap-4 m-4 bg-gray-100 p-2 rounded-2xl">
                        <div className="flex w-32 h-32 ml-4 mt-2 mb-2 bg-gray-300 shrink-0">
                            <PlaceImg place={place}/>
                        </div>
                        <div>
                            <h2 className="text-xl mt-2">{place.title}</h2>
                            <p className="text-sm mt-2">{place.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Places