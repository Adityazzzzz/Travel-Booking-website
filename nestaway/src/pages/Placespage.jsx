import { Link, useParams } from "react-router-dom"

function Places(){
    const {action} =useParams();

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
                    <form> 
                        <h2 className="text-2xl font-semibold mt-4 ">Title :</h2>
                        <p className="text-gray-500 text-md font-semibold">Title for you place. (should be short and catchy)</p>
                        <input type="text" placeholder="title, for example: My lovely Apartment" />

                        <h2 className="text-xl font-semibold mt-4 ">Address :</h2>
                        <p className="text-gray-500 text-md font-semibold">Address to this place</p>
                        <input  type="text" placeholder="address" />

                        <h2 className="text-xl font-semibold mt-4 ">Photos :</h2>
                        <p className="text-gray-500 text-md font-semibold">more = better</p>
                        <div>
                            <input type="text" placeholder={'Add using a link ..... jpg'}></input>
                        </div>
                        <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
                            <button className="border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">+</button>
                       </div>
                    </form>
                </div>
            )}
            
        </div>
    )
}

export default Places