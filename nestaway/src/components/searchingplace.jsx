export default function Searching({setSearchTerm,setfilter}){
    return <>
        <div className="max-w-3xl mx-auto flex gap-3 m-5 border border-gray-300 rounded-full py-2 px-5 shadow-md shadow-gray-300">
            <button className="bg-primary m-2 text-white p-1 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            <input 
              onChange={(e) => setSearchTerm(e.target.value)} 
              type="text" 
              placeholder="Where to?" 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" 
            />
            <button onClick={() => setfilter(true)} className="bg-white flex gap-1 text-sm border h-9 w-20 mt-2 m-2 border-gray-300 rounded-lg font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mt-2 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
              </svg>
              <h6 className="mt-2 mr-2">Filter</h6>
            </button> 
        </div>
    </>
}