import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';

// pages
import { Login } from './pages/Login';
import { Main } from "./pages/Main";
import { Layout } from "./layouts/layout";

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate to={'/login'}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Main/>}/>
      </Routes>
    </Layout>
  )
}

