import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../components/Bookingwidget";
import PlaceGallery from "../components/Placegallery";
import AddressLink from "../components/AddressLink";

function SinglePlace(){
    const {id} = useParams();
    const [place,setplace] = useState(null);


    useEffect(()=>{
        if(!id){
            return;
        }
        axios.get(`/places/${id}`).then(response=>(
            setplace(response.data)
        ))
    },[id]);
    if(!place) return '';
    

    return <>
        <div className="mt-6 bg-gray-100 rounded-3xl px-8 py-8 max-w-5xl mx-auto shadow-lg shadow-gray-400">
            <h1 className="text-3xl ">{place.title}</h1>
            <AddressLink>{place.address}</AddressLink>
            <PlaceGallery place={place}/>
            
            <div className="mt-4 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
                <div>
                    <div className="my-4">
                        <h2 className="font-semibold text-2xl mt-4 mb-2 ">Description</h2>
                        {place.description}
                    </div>
                    <b className="font-semibold">
                    Check-In: {place.checkIn}<br/>
                    Check-Out: {place.checkOut} <br/>
                    Max number of guests: {place.maxGuests}
                    </b>
                    
                </div>
                <div>
                    <BookingWidget place={place}/>
                </div>
            </div>
            <div className="mt-3 text-sm text-gray-700 leading-4">
                <h3 className="font-semibold text-lg mt-4 mb-2 ">ExtraInfo</h3>
                {place.extraInfo}
            </div>
        </div>
    </>
}
export default SinglePlace;