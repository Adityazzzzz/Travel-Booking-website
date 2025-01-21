import { Routes , Route} from "react-router-dom"
import Indexpages from "./pages/Indexpages"
import Login from "./pages/loginpage"
import Layout from "./layout"
import Register from "./pages/Registerpage"
import axios from "axios"
import { UserContextProvider } from "./store/user"


axios.defaults.baseURL='http://localhost:5000' 
axios.defaults.withCredentials=true


function App(){
  return (
    <>
    <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Indexpages/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
