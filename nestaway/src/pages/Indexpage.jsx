import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Searching from "../components/searchingplace";
import Filter from "@/components/filtering";

function Indexpages() {
  const [homeplace, sethomeplace] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filter, setfilter] = useState(false);
  const [priceRange, setPriceRange] = useState(10000); 

  useEffect(() => {
    axios.get("/places").then((response) => {
      sethomeplace(response.data);
    });
  }, []);

  

  


  const filteredPlaces = homeplace.filter((place) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      (place.title.toLowerCase().includes(lowerSearchTerm) ||
      place.description.toLowerCase().includes(lowerSearchTerm) ||
      place.address.toLowerCase().includes(lowerSearchTerm)) &&
      place.price <= priceRange 
    );
  });


  return (
    <div>
      
      {/* Search Bar */}
      <Searching setfilter={setfilter} setSearchTerm={setSearchTerm}/>
      
      {/* Filter Modal */}
      {filter && (
        <Filter priceRange={priceRange} setfilter= {setfilter} setPriceRange={setPriceRange}/>
      )}

      {/* Places List */}
      <div className="mt-8 grid gap-x-6 gap-y-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place) => (
            <Link to={`/place/${place._id}`} key={place._id}>
              <div className="bg-gray-500 mb-2 rounded-2xl flex">
                {place.photos?.[0] && (
                  <img
                    className="rounded-2xl object-cover aspect-square"
                    src={`http://localhost:5000/uploads/${place.photos?.[0]}`}
                    alt={place.title}
                  />
                )}
              </div>
              <h3 className="font-bold leading-4">{place.address}</h3>
              <h3 className="text-base leading-4 mt-2 text-gray-600">{place.title}</h3>
              <div className="mt-2 flex gap-2">
                <span className="font-bold flex">₹{place.price}</span> per night
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No places found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}

export default Indexpages;
