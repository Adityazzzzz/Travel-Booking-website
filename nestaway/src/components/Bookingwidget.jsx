function BookingWidget({place}){
    return <>
        <div className="bg-white p-4 rounded-2xl">
            <div className="text-xl text-center font-bold">
                Price: {place.price} Rs/- per Night
            </div>
            <div className="border rounded-2xl mt-4">
                <div className="flex gap-1">
                    <div className=" py-3 px-4 ">
                        <label>Check In</label>
                        <input type="date" />
                    </div>
                    <div className=" py-3 px-4 border-l">
                        <label>Check Out</label>
                        <input type="date" />
                    </div>
                </div>
                <div className=" py-3 px-4 border-l">
                    <label>Number of Guests</label>
                    <input type="Number" value={1} />
                </div>
            </div>
            <button className="primary mt-3">Book this place</button>
        </div>
    </>
}
export default BookingWidget