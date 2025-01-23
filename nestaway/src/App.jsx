import { Routes , Route} from "react-router-dom"
import Indexpage from "./pages/Indexpage"
import Login from "./pages/loginpage"
import Layout from "./layout"
import Register from "./pages/Registerpage"
import axios from "axios"
import { UserContextProvider } from "./store/user"
import Account from "./pages/Accountpage"


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
            <Route path='/account/:subpage?' element={<Account/>}/>
            <Route path='/account/:subpage/:action' element={<Account/>}/>
       
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
