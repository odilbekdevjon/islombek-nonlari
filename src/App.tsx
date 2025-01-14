import { Route, Routes } from "react-router-dom";
import './App.css';
// pages
import { Login } from './pages/Login';
import { Main } from "./pages/Main";

export const App = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Main/>}/>
    </Routes>
  )
}

