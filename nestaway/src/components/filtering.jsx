import { FaTimes } from "react-icons/fa";

export default function Filter({priceRange,setfilter,setPriceRange}){
    return <>
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-3xl shadow-lg w-11/12 max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-700">Filters</h2>
              <button onClick={() => setfilter(false)} className="text-gray-500 hover:text-red-600">
                <FaTimes className="size-5" />
              </button>
            </div>

            {/* Price Range Slider */}
            <div className="flex flex-col gap-4">
              <label className="text-gray-600 font-medium">Max Price: ₹{priceRange}</label>
              <input type="range" min="500" max="25000" step="500" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} className="w-full cursor-pointer"/>
              <button  onClick={() => setfilter(false)} className="bg-blue-500 text-white p-2 rounded-lg font-semibold hover:bg-blue-600">
                Apply Filters
              </button>
            </div>
        </div>
    </div>
    </>
}