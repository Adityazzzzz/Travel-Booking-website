import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Indexpages() {
  const [homeplace, sethomeplace] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    axios.get("/places").then((response) => {
      sethomeplace(response.data);
    });
  }, []);

  const filteredPlaces = homeplace.filter((place)=>{    // this function is searching places in homepage
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      place.title.toLowerCase().includes(lowerSearchTerm) ||
      place.description.toLowerCase().includes(lowerSearchTerm) ||
      place.address.toLowerCase().includes(lowerSearchTerm)
    );
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value); 
  };




  return (
    <div>
      <div className="flex mt-4 max-w-3xl mx-auto"> 
        <button  className="  bg-primary m-2 text-white p-1 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
        <input onChange={handleSearch} type="text" placeholder="Where to?" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"/>
      </div>

      <div className="mt-8 grid gap-x-6 gap-y-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredPlaces.length > 0 &&
          filteredPlaces.map((place) => (
            <Link to={"/place/" + place._id} key={place._id}>
              <div className="bg-gray-500 mb-2 rounded-2xl flex">
                {place.photos?.[0] && (
                  <img
                    className="rounded-2xl object-cover aspect-square"
                    src={"http://localhost:5000/uploads/" + place.photos?.[0]}
                    alt=""
                  />
                )}
              </div>
              <h3 className="font-bold leading-4">{place.address}</h3>
              <h3 className="text-base leading-4 mt-2 text-gray-600">{place.title}</h3>
              <div className="mt-2 flex gap-2">
                <span className="font-bold flex">₹{place.price}</span> per night
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Indexpages;
