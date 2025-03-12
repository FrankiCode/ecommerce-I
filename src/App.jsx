import { useState } from 'react'
import './App.css'
import NavBar from './Components/Layout/NavBar'
import WebRoutes from './Components/WebRoutes'
import Products from './Pages/Products';

function App(){  

  // const [searchText, setSearchText] = useState("");
  

  return (
    <div className=' mx-auto'>
      {/* <NavBar searchText={searchText} setSearchText={setSearchText}/> */}
      <WebRoutes/>
    </div>
  )
}

export default App
