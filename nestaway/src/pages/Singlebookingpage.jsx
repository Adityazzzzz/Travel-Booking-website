import {useParams} from 'react-router-dom'

function SingleBookingPage(){
    const {id}=useParams();
    
    return(
        <>
            <div>single booking:{id}</div>
        </>
    )
}

export default SingleBookingPage