import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from '../Components/Navbar'
import Home from '../Components/Home'

const Userhome = () => {
  return (
    <div className="h-full ">
    <div className="flex flex-col h-full">
      <div className="">
        <Navbar />
      </div>
      <div class="flex-1 overflow-y-scroll no-scrollbar">
        <Routes>
          <Route path="home" element={<Home />} />
          {/* <Route path="categorymanagement/*" element={<Categorymanagemen />} />
          <Route path="ordermanagement" element={<Orders />} />
          <Route path="inventory" element={<AddProduct />} />
          <Route path="discountsandoffers" element={<AddProduct />} />
          <Route path="reportsandanaltics" element={<AddProduct />} /> */}
        </Routes>
      </div>
    </div>
  </div>
  )
}

export default Userhome