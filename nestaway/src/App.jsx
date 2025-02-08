import { Routes , Route} from "react-router-dom"
import Indexpage from "./pages/Indexpage"
import Login from "./pages/loginpage"
import Layout from "./layout"
import Register from "./pages/Registerpage"
import axios from "axios"
import { UserContextProvider } from "./store/user"
import Profile from "./pages/Profilepage"
import Places from "./pages/Placespage"
import Placesformpage from "./pages/Placesformpage"
import SinglePlace from "./pages/Singleplacepage"


axios.defaults.baseURL='http://localhost:5000' 
axios.defaults.withCredentials=true


function App(){
  return (
    <>
    <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Indexpage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/account/profile' element={<Profile/>}/>
            <Route path='/account/bookings' element={<Profile/>}/>
            <Route path='/account/places' element={<Places/>}/>
            <Route path='/account/places/new' element={<Placesformpage/>}/>
            <Route path='/account/places/:id' element={<Placesformpage/>}/>
            <Route path='/place/:id' element={<SinglePlace/>} />
       
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
