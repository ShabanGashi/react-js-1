import { Routes, Route } from "react-router-dom"
import Notfound from "./pages/Notfound"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import MainLayout from "./pages/MainLayout"
import DashboardLayout from "./pages/dashboard/DashboardLayout"
import Settings from "./pages/dashboard/Settings"
import Profile from "./pages/dashboard/Profile"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dashboard" element={<DashboardLayout />} >
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
      
      <Route path="*" element={<Notfound />} />
    </Routes>
  )
}

export default App;
