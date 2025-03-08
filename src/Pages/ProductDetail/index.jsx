import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import NotFound from '../../Pages/NotFound'
import Loading from '../../Components/Loading'
import { toast } from 'react-hot-toast';

const ProductDetail = () => {

  const { slug } = useParams()
  const url = "http://localhost:3000/products"
  const [products, setProduct] = useState({});
  const [currentImage, setCurrentImage] = useState("");
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get(url).then(({data}) => {
      const currentElement = data.find((e) => e.slug === slug);
      setProduct(currentElement);
      setCurrentImage(currentElement.images[0])
      setIsLoading(false)
      
    })
    .catch((err) => {
      setIsLoading(false)
      if(err.status === 404) {
          toast.error("This didn't work.")
      }
  });


  }, [])
  

if (isLoading) {
  return <Loading/>
}

  if(!products.slug) {
    return <NotFound/>
  }


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-30 w-[90%] mx-auto mt-5'>
        <div className='grid grid-cols-[1fr_100px] gap-2.5'>
          <img src={currentImage} alt=""  className='w-full'/>

          <div className='grid grid-cols-[100px] grid-rows-[100px_100px_100px] object-cover gap-1'>
            {products.images?.map((image) => {
              return <img src={image} alt=""  className='w-full h-full cursor-pointer' onClick={() => {setCurrentImage(image)}}/>
              
            })}</div>
        </div>
        <div>
            <h2 className='font-bold mb-2.5 text-[var(--productTitle)] '>{products.title}</h2>
            <h2 className='text-[14px] mb-2.5'>{products.description}</h2>
            <h2 className='text-[12px] md:text-[14px] text-[var(--mainColor)]'>{products.category?.name}</h2>
            <h2 className='text-[var(--productTitle)] font-bold text-2xl'>{products.price}€</h2>
        </div>
    </div>
  )
}

export default ProductDetail