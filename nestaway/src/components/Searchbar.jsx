import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = () => {
  const [search, setSearch] = useState(false);
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    setSearch(false); 
  };

  return (
    <div>
      <div onClick={() => setSearch(true)} className="flex gap-4 m-5 border border-gray-300 rounded-full py-2 px-5 shadow-md shadow-gray-300">
        <div className="mt-1 text-gray-700 cursor-pointer">Anywhere</div>
        <div className="border-l-2 border-gray-300 mt-1 h-6"></div>
        <div className="mt-1 text-gray-700 cursor-pointer">Any week</div>
        <div className="border-l-2 border-gray-300 mt-1 h-6"></div>
        <div className="mt-1 text-gray-700 cursor-pointer">Any guests</div>
        <button  className="  bg-primary text-white p-1 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </button>
      </div>

      {search && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
            <div className="bg-white p-6 rounded-3xl shadow-lg w-11/12 max-w-lg ">
                <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-700">Search</h2>
                <button onClick={() => setSearch(false)} className="text-gray-500 hover:text-red-600">
                    <FaTimes className="size-5" />
                </button>
                </div>

                <div className="flex flex-col gap-4 ">
                <input type="text" placeholder="Where to?" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>

                <div className="flex gap-4">
                    <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <input type="date" value={checkOut}onChange={(e) => setCheckOut(e.target.value)} className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>

                <select value={guests} onChange={(e) => setGuests(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                        {i + 1} Guest{i > 0 ? "s" : ""}
                    </option>
                    ))}
                </select>

                <button onClick={handleSearch} className="w-full bg-primary hover:bg-blue-500 text-white py-2 rounded-full transition duration-300">Search</button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
