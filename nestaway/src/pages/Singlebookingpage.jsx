import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import AddressLink from "../components/AddressLink";
import PlaceGallery from "../components/Placegallery";
import BookingDates from "../components/Bookingdates";

function SingleBookingPage(){
    const {id}=useParams();
    const [booking,setBooking]= useState(null)

    useEffect(()=>{
        if(id){
            axios.get('/bookings').then(response => {
                const foundBooking = response.data.find(({_id}) => _id === id);
                if(foundBooking){
                setBooking(foundBooking);
                }
            });
        }
    },[id]);

    if(!booking){
        return '';
    }
    return (
        <div className="my-8 max-w-5xl mx-auto ">
          <h1 className="text-2xl">{booking.place.title}</h1>
          <AddressLink className="my-2 block">{booking.place.address}</AddressLink>
          <div className="bg-gray-200 p-6 my-6 rounded-2xl flex items-center justify-between">
            <div>
              <h2 className="text-xl mb-4">Your booking information:</h2>
              <BookingDates booking={booking} />
            </div>
            <Link to={"/payment"} className="bg-primary p-6 text-white rounded-2xl">
              <div>Total price</div>
              <div className="text-2xl">{booking.price} Rs.</div>
            </Link>
          </div>
          <PlaceGallery place={booking.place} />
        </div>
    );
}

export default SingleBookingPage