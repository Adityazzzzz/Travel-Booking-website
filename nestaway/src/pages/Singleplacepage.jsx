import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <div className="mt-6 bg-gray-100 -mx-8 px-8 py-8">
            <h1 className="text-2xl">{place.title}</h1>
            <a className="my-2 block font-semibold underline" target="_blank" href={'https://maps.google.com/?q='+place.address}>{place.address}</a>
            <div className="grid gap-2 grid-cols-[2fr_1fr]">
                <div>
                    {place.photos?.[0] && (
                        <img src={"http://localhost:5000/uploads/"+place.photos[0] } alt=""/>
                    )}
                </div>
                <div>
                    b
                </div>
            </div>
        </div>
    </>
}
export default SinglePlace;