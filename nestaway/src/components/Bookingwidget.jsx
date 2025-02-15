import {differenceInCalendarDays} from "date-fns";
import { useContext, useEffect, useState } from "react";
import {UserContext} from '../store/user'
import axios from 'axios'
import {Navigate} from 'react-router-dom'

function BookingWidget({place}){
    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    const [numberOfGuests,setNumberOfGuests] = useState(1);
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [redirect,setRedirect] = useState('');
    const {user} =useContext(UserContext);

    useEffect(()=>{
        if(user){
            setName(user.name)
        }
    },[user])

    let numofnights=0;
    if(checkIn && checkOut){
        numofnights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));

    }

    async function Bookthisplace(){
        const response = await axios.post('/bookings', {
            place: place._id,
            price: numofnights * place.price, 
            checkIn,checkOut,numberOfGuests,name,phone
        });
        const bookingid = response.data._id;
        setRedirect(`/account/bookings/${bookingid}`);
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }


    return <>
        <div className="bg-white p-4 rounded-2xl">
            <div className="text-xl text-center font-semibold">
                Price: {place.price} Rs/- per Night
            </div>
            <div className="border rounded-2xl mt-4">
                <div className="flex gap-1">
                    <div className=" py-3 px-4 ">
                        <label>Check In</label>
                        <input type="date" value={checkIn} onChange={e=> setCheckIn(e.target.value)}/>
                    </div>
                    <div className=" py-3 px-4 border-l">
                        <label>Check Out</label>
                        <input type="date" value={checkOut} onChange={e=> setCheckOut(e.target.value)}/>
                    </div>
                </div>
                <div className=" py-3 px-4 border-l">
                    <label>Number of Guests</label>
                    <input type="Number" value={numberOfGuests} onChange={e=> setNumberOfGuests(e.target.value)}/>
                </div>
            </div>

            {numofnights>0 && (
                <>
                <div className=" py-3 px-4 border-l">
                    <label>Your Full Name</label>
                    <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
                </div>
                <div className=" py-3 px-4 border-l">
                    <label>Your Phone No.</label>
                    <input type="tel" value={phone} onChange={e=> setPhone(e.target.value)}/>
                </div>
                </>
            )}

            <button onClick={Bookthisplace} className="primary mt-3">
                Book this place
                {numofnights>0 && (
                    <span className="font-bold">: {numofnights * place.price} Rs /-</span>
                )}
                {numofnights<0 && (
                    <span className="font-bold">: Invalid Dates</span>
                )}
            </button>
        </div>
    </>
}
export default BookingWidget