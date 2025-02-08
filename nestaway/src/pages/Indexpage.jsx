import { useEffect, useState } from "react"
import axios from 'axios'
import {Link} from "react-router-dom";

function Indexpages(){
  const [homeplace,sethomeplace]=useState([]);
  useEffect(()=>{
    axios.get('/places').then(respnse=>{
      sethomeplace([...respnse.data, ...respnse.data, ...respnse.data, ...respnse.data, ...respnse.data ])
    })
  },[])

  return(
    <div className="mt-8 grid gap-x-6 gap-y-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
        homeplace.length>0 && homeplace.map(place=>(
          <Link to={'/place/' + place._id}>
            <div className="bg-gray-500 mb-2 rounded-2xl flex">
              {place.photos?.[0] && (
                <img className="rounded-2xl object-cover aspect-square" src={'http://localhost:5000/uploads/'+place.photos?.[0]} alt=""/>
              )}
            </div>
            <h3 className="font-bold leading-4">{place.address}</h3>
            <h3 className="text-base leading-4 mt-2 text-gray-600">{place.title}</h3>
            <h3> </h3>
            <div className="mt-2">
              <span className="font-bold">${place.price} </span>per night
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Indexpages