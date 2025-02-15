import { useEffect, useState } from "react"
import AccountNav from "../components/AccountNav"
import axios from "axios"


function BookingPage(){
    const [booking, setbooking]= useState([])
    useEffect(()=>{
        axios.get('/bookings').then(response =>{
            setbooking(response.data)
        })
    },[])

    return(
        <>
            <div>
                <AccountNav/>
                <div>
                    {booking?.length > 0 && booking.map(booking=>(
                        <div>
                           
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BookingPage