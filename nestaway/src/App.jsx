import { Routes , Route} from "react-router-dom"
import Indexpage from "./pages/Indexpage"
import Login from "./pages/loginpage"
import Layout from "./layout"
import Register from "./pages/Registerpage"
import axios from "axios"
import { ContextProvider } from "./store/ContextProvider";
import Profile from "./pages/Profilepage"
import Places from "./pages/Placespage"
import Placesformpage from "./pages/Placesformpage"
import SinglePlace from "./pages/Singleplacepage"
import BookingPage from "./pages/Bookingpage"
import SingleBookingPage from "./pages/Singlebookingpage"
import "regenerator-runtime/runtime";
import "@babel/polyfill";

axios.defaults.baseURL='http://localhost:5000' 
axios.defaults.withCredentials=true


function App(){
  
  return (
    <>
    <ContextProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Indexpage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/account/profile' element={<Profile/>}/>
          <Route path='/account/places' element={<Places/>}/>
          <Route path='/account/places/new' element={<Placesformpage/>}/>
          <Route path='/account/places/:id' element={<Placesformpage/>}/>
          <Route path='/place/:id' element={<SinglePlace/>} />
          <Route path='/account/bookings' element={<BookingPage/>} />
          <Route path='/account/bookings/:id' element={<SingleBookingPage/>} />
        </Route>
      </Routes>
    </ContextProvider>
    </>
  )
}

export default App
