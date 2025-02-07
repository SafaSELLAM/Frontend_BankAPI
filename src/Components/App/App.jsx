import { Routes, Route } from "react-router-dom";
import { Home } from "../../Pages/Home/Home.jsx";
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/sign-up" element={<Sign />} />
  <Route path="/user" element={<User />} /> */}
      </Routes>
    </>
  )
}

export default App
