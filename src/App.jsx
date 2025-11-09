import { useState } from 'react'

import './App.css'

import PatientHome from "./patient/pages/PatientHome.jsx";

import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
    <Routes>
     
      

      <Route path='/*' element={<PatientHome/>}></Route>



    </Routes>
  </BrowserRouter>
      
    </>
  )
}

export default App
