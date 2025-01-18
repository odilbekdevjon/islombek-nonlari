import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

// pages
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { Layout } from "./layouts/layout";
import { Storage } from "./pages/Storage";
import { Bakery } from "./pages/Bakery";
import { Notification } from "./pages/Notification";
import { Messages } from "./pages/Messages";
import { Profile } from "./pages/Profile";
import { Message } from "./pages/Message";
import { Information } from "./pages/Information";

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Main />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/bakery" element={<Bakery />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/message" element={<Message />} />
        <Route path="/information" element={<Information />} />
      </Routes>
    </Layout>
  );
};
