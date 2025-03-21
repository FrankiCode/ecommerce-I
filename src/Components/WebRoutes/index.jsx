import React from 'react';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import ContactUs from '../../Pages/ContactUs';
import ProductDetail from '../../Pages/ProductDetail';
import { Route, Routes } from 'react-router';
import Login from '../../Pages/Login';
import Products from '../../Pages/Products';
import NotFound from '../../Pages/NotFound';
import ShoppingBag from '../../Pages/ShoppingBag';


const WebRoutes = () => {

    const routes = [
        {id: 101, path:"/", element: <Home/>},
        {id: 102, path:"/about", element: <About/>},
        {id: 103, path:"/contact", element: <ContactUs/>},
        {id: 104, path:"/login", element: <Login/>},
        {id: 105, path:"/products/:slug", element: <ProductDetail/>},
        {id: 106, path:"/products", element: <Products/>},
        {id: 107, path:"/shoppingbag", element: <ShoppingBag/>}
    ]

  return (
    <div>
        <Routes>
            {
                routes.map(({id, path, element}) => {
                    return <Route path={path} element={element} key={id}></Route>
                })
            }
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    </div>
  )
}

export default WebRoutes