import { createRoot } from 'react-dom/client'
import './index.css'
import "regenerator-runtime/runtime";
import "@babel/polyfill";
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
