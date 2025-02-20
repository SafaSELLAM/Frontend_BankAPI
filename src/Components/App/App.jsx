import { Routes, Route } from "react-router-dom";
import { Home } from "../../Pages/Home/Home.jsx";
import './App.css'
import { Login } from "../../Pages/Sign-in/login.jsx";
import { Profile } from "../../Pages/Profile/Profile.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
