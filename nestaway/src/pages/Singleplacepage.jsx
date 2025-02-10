import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../components/Bookingwidget";

function SinglePlace(){
    const {id} = useParams();
    const [place,setplace] = useState(null);
    const [showallphotos,setshowallphotos]=useState(false);

    useEffect(()=>{
        if(!id){
            return;
        }
        axios.get(`/places/${id}`).then(response=>(
            setplace(response.data)
        ))
    },[id]);
    if(!place) return '';
    if(showallphotos){
        return (
            <div className="mt-7 bg-black rounded-3xl px-8 py-8 max-w-5xl mx-auto ">
                <div className="p-8 grid gap-4">
                    <div>
                        <button onClick={()=>setshowallphotos(false)}  className="flex gap-2 fixed right-64  rounded-2xl py-2 px-4  shadow-md shadow-gray-500 bg-slate-200 opacity-90">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
                            </svg>
                            Close photos
                        </button>
                    </div>
                    {place?.photos?.length > 0 && place.photos.map(photo =>(
                        <div>
                            <img src={'http://localhost:5000/uploads/' + photo} alt=""/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return <>
        <div className="mt-6 bg-gray-100 rounded-3xl px-8 py-8 max-w-5xl mx-auto shadow-lg shadow-gray-400">
            <h1 className="text-3xl ">{place.title}</h1>
            <a className="flex gap-1 my-2 mb-4 font-semibold underline" target="_blank" href={'https://maps.google.com/?q='+place.address}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                </svg>
                {place.address}
            </a>
            <div className="relative">
                <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-xl overflow-hidden">
                    <div>
                        {place.photos?.[0] && (
                            <div>
                                <img onClick={()=>setshowallphotos(true)} className="aspect-square object-cover" src={"http://localhost:5000/uploads/"+place.photos[0] } alt=""/>
                            </div>
                        )}
                    </div>
                    <div className="grid">
                        {place.photos?.[1] && (
                            <img onClick={()=>setshowallphotos(true)} className="aspect-square object-cover" src={"http://localhost:5000/uploads/"+place.photos[1] } alt=""/>
                        )}
                        <div className=" overflow-hidden">
                            {place.photos?.[2] && (
                                <img onClick={()=>setshowallphotos(true)} className="aspect-square object-cover relative top-2" src={"http://localhost:5000/uploads/"+place.photos[2] } alt=""/>
                            )}
                        </div>
                    </div>
                </div>
                <button onClick={()=>setshowallphotos(true)} className="flex gap-2 absolute bottom-2 right-2  rounded-2xl py-2 px-4  shadow-md shadow-gray-500 bg-white opacity-90">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    Show more photos
                </button>
            </div>
            
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