import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

// pages
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { Layout } from "./layouts/layout";
import { Storage } from "./pages/Storage";

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Main />} />
        <Route path="/storage" element={<Storage />} />
      </Routes>
    </Layout>
  );
};
