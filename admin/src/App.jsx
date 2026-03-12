import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Order from './pages/Orders/Orders';
import { ToastContainer } from 'react-toastify';
import MenuAdd from './pages/MenuAdd/MenuAdd';
import MenuList from './pages/MenuList/MenuList';

const App = () => {

  const apiUrl = import.meta.env.VITE_API_URL;
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={apiUrl} />} />
          <Route path="/list" element={<List url={apiUrl} />} />
          <Route path="/orders" element={<Order url={apiUrl} />} />
          <Route path="/menu-add" element={<MenuAdd url={apiUrl} />} />
          <Route path="/menu-list" element={<MenuList url={apiUrl} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
