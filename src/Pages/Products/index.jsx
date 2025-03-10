import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { products } from '../../Components/DataJson/data';
import { Link } from 'react-router';
import { toast } from 'react-hot-toast';
import Loading from '../../Components/Loading';

const Products = () => {
    const url = "http://localhost:3000/products"
    const [myProducts, setMyProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const [count , setCount] = useState(4);
    const [pages, setPages] = useState(0);
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(0)
    const [activePage, setActivePage] = useState(1)


    useEffect(() => {
        axios.get(url).then(({data}) => {
            setMyProducts(data);
            setPages(Math.ceil(data.length / count))
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            if(err.status === 404) {
                toast.error("This didn't work.")
            }
        });
    }, [])

    useEffect(() => {
        setStartIndex((activePage - 1) * count); // activePage 2 ise ( 2 - 1 ) * 4(count) = 4
        setEndIndex(startIndex + count)          // startIndex 4 ise   4 + 4  = 8 yeni ikici sehifede 8-e qeder olan items-lari gosterecek
    }, [activePage])


    if(isLoading) {
        return <Loading/>
    }
    
    
    // Fake array yaziriq
    // if (pages) {
    //     console.log(new Array(pages).fill());
        
    // }
    
  return (
    <div className='container px-5 mt-5 mx-auto'>
            <div className='relative xl:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 bg[var(--back)]'>
            {
                myProducts.length > 0 ? myProducts?.slice(startIndex, endIndex).map(({id, images, title, price, category, description, slug}) => {
                    return <div key={id} className='relative flex flex-col items-center border border-[var(--mainColor)] rounded-[7px]'>
                        <div className='object-cover w-full mb-2.5 '>
                            <img src={images[0]} alt={title} className='w-full rounded-tl-[6px] rounded-tr-[6px]'/>
                        </div>
                        <div className='p-2.5'>
                            <h2 className='font-bold mb-2.5 text-[var(--productTitle)] line-clamp-1'>{title}</h2>
                            <h2 className='absolute top-1 right-1 text-[12px] bg-[var(--background)] py-0.5 px-1 text-[var(--mainColor)] rounded'>{category.name}</h2>
                            <h2 className='line-clamp-3 mb-2.5'>{description}</h2>
                            <h2 className='text-[var(--productTitle)] font-bold text-2xl'>{price}€</h2>
                        </div>
                        <Link to={"/products/" + slug} className='absolute inset-0'></Link>
                    </div>
                }) : <p>Melumat yoxdur</p>
            }
            </div>

        {
            <div className="flex space-x-4 justify-center mt-10">
            {new Array(pages).fill("").map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 flex items-center justify-center rounded-full bg-[#FFB8E0] text-white font-semibold text-lg transition duration-300 ease-in-out transform hover:shadow-lg hover:bg-[var(--mainColor)] cursor-pointer ${activePage === index + 1 ? "bg-[var(--mainColor)]" : "bg-[#FFB8E0]"}`} onClick={() => setActivePage(index + 1)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        }
    </div>
  )
};

export default Products;