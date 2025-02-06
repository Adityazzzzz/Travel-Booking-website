import { useEffect, useState } from "react";
import Perks from "../components/perks";
import PhotosUploader from "../components/photosuploader";
import AccountNav from "../components/AccountNav";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";



function Placesformpage(){
    const {id} = useParams()
    const [title,setTitle] = useState('');
    const [address,setAddress] = useState('');
    const [addedPhotos,setAddedPhotos] = useState([]);
    const [description,setDescription] = useState('');
    const [perks,setPerks] = useState([]);
    const [extraInfo,setExtraInfo] = useState('');
    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    const [maxGuests,setMaxGuests] = useState(1);
    const [redirect,setRedirect] = useState(false);
    // const [price,setPrice] = useState(100);




    useEffect(()=>{
        if(!id){return}
        axios.get('/places/' + id).then(response=>{
            const {data} = response;
            setTitle(data.title);
            setAddress(data.address);
            setAddedPhotos(data.photos);
            setDescription(data.description);
            setPerks(data.perks);
            setExtraInfo(data.extraInfo);
            setCheckIn(data.checkIn);
            setCheckOut(data.checkOut);
            setMaxGuests(data.maxGuests);      
        })
    },[id])
    function inputHeader(text) {
        return (
          <h2 className="text-xl font-semibold mt-4 ">{text}</h2>
        );
    }
    function inputDescription(text) {
        return (
            <p className="text-gray-500 text-md font-semibold">{text}</p>
        );
    }
    function preInput(header,description) {
        return <>
            {inputHeader(header)}
            {inputDescription(description)}
        </>
    }
    async function saveplace(e){
        e.preventDefault();
        const placedata={title,address, addedPhotos,perks,description,extraInfo,checkIn,checkOut,maxGuests}
        if(id){
            //update
            await axios.put('/places', {
                id,...placedata
            });
            setRedirect(true)
        }
        else{
            //new place
            await axios.post('/places', placedata);
            setRedirect(true)
        }
    }
    if(redirect){
        return <Navigate to={'/account/places'}/>
    }



    return<>
        <AccountNav/>
        <div className="max-w-3xl mx-auto  p-6  border border-gray-300 rounded-lg shadow-gray-400 shadow-lg">
            <form onSubmit={saveplace}> 

                {preInput('Title','Title for you place. (should be short and catchy)')}
                <input type="text" placeholder="title, for example: My lovely Apartment" value={title} onChange={e=>setTitle(e.target.value)} />

                {preInput('Address','Address to this place')}
                <input  type="text" placeholder="address" value={address} onChange={e=>setAddress(e.target.value)} />

                {preInput('Photos ','more = better')}
                <PhotosUploader addedPhotos={addedPhotos} setAddedPhotos={setAddedPhotos}/>


                {preInput('Description ','Description to your place')}
                <textarea  value={description} onChange={e=>setDescription(e.target.value)}/>

                {preInput('Perks','Select all the perks')}
                <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-3 cursor-pointer">
                    <Perks  selected={perks} onchange={setPerks}/> 
                </div>

                {preInput('Extra Info','House rules, etc...')}
                <textarea  value={extraInfo} onChange={e=>setExtraInfo(e.target.value)}/> 

                {preInput('Check in&out times','add chech in and out times, remember to have some time window for cleaning the room between guests')}
                <div className="grid gap-2 mt-4 grid-cols-3">
                    <div>
                        <h3 className="mt-2 -mb-1">Check In time</h3>
                        <input  value={checkIn} onChange={e=>setCheckIn(e.target.value)} type="text" placeholder="13:00"></input>
                    </div>
                    <div>
                        <h3 className="mt-2 -mb-1">Check Out time</h3>
                        <input type="text" value={checkOut} onChange={e=>setCheckOut(e.target.value)}></input>
                    </div>
                    <div>
                        <h3 className="mt-2 -mb-1">Max no. of Guests</h3>
                        <input  type="number"  value={maxGuests} onChange={e=>setMaxGuests(e.target.value)}></input>
                    </div>
                </div>

                <button type="submit" className="primary my-4">Save</button>
                       
            </form>
        </div>
    </>
}

export default Placesformpage