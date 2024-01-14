import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import CartContent from './components/CartContent'
import Inicio from '../src/components/Inicio'

function App() {
  return (
    <div>
     
   <BrowserRouter>
  <Routes>
    <Route path='/' element={<Inicio />} />
    <Route path='/cart' element={<CartContent /> }/>
  </Routes>
   </BrowserRouter>
    </div>
   
  )
}

export default App;
