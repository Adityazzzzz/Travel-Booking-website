import { useState } from "react";
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
import Perks from "../components/perks";

function Places(){
    const {action} =useParams();
    const [title,setTitle] = useState('');
    const [address,setAddress] = useState('');
    const [photolink, setphotolink] = useState('')
    const [addedPhotos,setAddedPhotos] = useState([]);
    const [description,setDescription] = useState('');
    const [perks,setPerks] = useState([]);
    const [extraInfo,setExtraInfo] = useState('');
    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    const [maxGuests,setMaxGuests] = useState(1);
    // const [price,setPrice] = useState(100);
    // const [redirect,setRedirect] = useState(false);



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

    async function Addphotobylink(e){
        e.preventDefault()
        const response=await axios.post('/upload-by-link',{link:photolink})
        const {success, filename} =response.data;

        if(success){
            setAddedPhotos(prev=>{
                return [...prev, filename];
            });
        }
        setphotolink('')
    }

    function Uploadphoto(e){
        const files= e.target.files
        const data = new FormData()
        
        for(let i=0; i< files.length; i++){
            data.append('photos',files[i]);
        }

        axios.post('/uploads',data,{
            headers: {'Content-type':'multipart/form-data'}
        }).then(response=>{
            const {data:filenames} = response;
            setAddedPhotos(prev=>{
                return [...prev, ...filenames];
            });
        })
    }



    return(
        <div>
            {action !== 'new' && (
                <div className="text-center">
                    <Link to={'/account/places/new'} className="inline-flex bg-primary text-white py-2 px-6 rounded-full ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add new places

                    </Link>
                </div>
            )}


            {action === 'new' && (
                <div className="max-w-3xl mx-auto  p-6  border border-gray-300 rounded-lg shadow-gray-400 shadow-lg">
                    <form > 

                        {preInput('Title','Title for you place. (should be short and catchy)')}
                        <input type="text" placeholder="title, for example: My lovely Apartment" value={title} onChange={e=>setTitle(e.target.value)} />

                        {preInput('Address','Address to this place')}
                        <input  type="text" placeholder="address" value={address} onChange={e=>setAddress(e.target.value)} />

                        {preInput('Photos ','more = better')}
                        <div className="flex gap-2">
                            <input value={photolink} onChange={e=>setphotolink(e.target.value)} type="text" placeholder={'Add using a link ..... jpg'} ></input>
                            <button onClick={Addphotobylink}  className="bg-gray-300 px-4 rounded-2xl">Add&nbsp;photos</button>
                        </div>

                        <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
                            {addedPhotos.length > 0 && addedPhotos.map((link, index) => (
                                <div key={index}>
                                    <img src={'http://localhost:5000/uploads/'+link} alt={link} className="rounded-lg"/>
                                </div>   
                            ))}
                            <label className="cursor-pointer flex items-center border bg-transparent rounded-2xl text-lg gap-1 text-gray-600">
                                <input type="file" multiple className="hidden" onChange={Uploadphoto} />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                                </svg>
                                Upload
                            </label>
                       </div>


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

                        <button className="primary my-4">Save</button>
                       
                    </form>
                </div>
            )}
            
        </div>
    )
}

export default Places