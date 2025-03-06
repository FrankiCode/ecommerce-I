import React from 'react';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import ContactUs from '../../Pages/ContactUs';
import ProductDetail from '../../Pages/ProductDetail';
import { Route, Routes } from 'react-router';
import Login from '../../Pages/Login';


const WebRoutes = () => {

    const routes = [
        {id: 101, path:"/", element: <Home/>},
        {id: 101, path:"/about", element: <About/>},
        {id: 101, path:"/contact", element: <ContactUs/>},
        {id: 101, path:"/login", element: <Login/>},
        {id: 101, path:"/product", element: <ProductDetail/>}
    ]

  return (
    <div>
        <Routes>
            {
                routes.map(({id, path, element}) => {
                    return <Route path={path} element={element} key={id}></Route>
                })
            }
        </Routes>
    </div>
  )
}

export default WebRoutes