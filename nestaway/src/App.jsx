import { Routes , Route} from "react-router-dom"
import Indexpages from "./pages/Indexpages"
import Login from "./pages/loginpage"
import Layout from "./layout"
import Register from "./pages/Registerpage"
import axios from "axios"

axios.defaults.baseURL='http://localhost:5000' 
axios.defaults.withCredentials=true


function App(){
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Indexpages/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
