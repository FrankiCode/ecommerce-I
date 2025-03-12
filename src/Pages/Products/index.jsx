import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router';
import { toast } from 'react-hot-toast';
import Loading from '../../Components/Loading';
import Category from '../../Components/Category';
import NavBar from '../../Components/Layout/NavBar';

//global state managment

const Products = () => {
    const url = "http://localhost:3000/products"
    const [myProducts, setMyProducts] = useState([])
    const [filteredProduct, setFilteredProduct] = useState([])


    const [isLoading, setIsLoading] = useState(true);


    const count = 4
    const [pages, setPages] = useState(0);
    const [endIndex, setEndIndex] = useState(0)
    const [startIndex, setStartIndex] = useState(0)
    const [activePage, setActivePage] = useState(1)


    const [searchText, setSearchText] = useState("");
    const [activeCategory, setActiveCategory] = useState("All")

    




    useEffect(() => {
        axios.get(url).then(({data}) => {
            setMyProducts(data);
            setFilteredProduct(data);
            setIsLoading(false);
            setPages(Math.ceil(data.length / count))
        })
        .catch((err) => {
            setIsLoading(false)
            if(err.status === 404) {
                toast.error("This didn't work.")
            }
        });
    }, [])

    

    useEffect(() => {
        const filteredData = myProducts.filter(({title}) => {
            return title.toLowerCase().includes(searchText.toLowerCase())
        });
        setPages(Math.ceil(filteredData.length / count));
        setFilteredProduct(filteredData);
        setActivePage(1)
        setActiveCategory("All")

    },[searchText, myProducts])



    useEffect(() => {
        setStartIndex((activePage - 1) * count); // activePage 2 ise ( 2 - 1 ) * 4(count) = 4
        setEndIndex(activePage * count)          // startIndex 4 ise   4 + 4  = 8 yeni ikici sehifede 8-e qeder olan items-lari gosterecek
    },[activePage])

    useEffect(() => {
        if (activeCategory.toLowerCase() === "all") {
            setPages(Math.ceil(myProducts.length / count));
            setFilteredProduct(myProducts)
            setActivePage(1);
        } else {
            const filteredData = myProducts.filter(({category}) => {
                return category.name.toLowerCase() === activeCategory.toLowerCase()
            });
            setPages(Math.ceil(filteredData.length / count));
            setFilteredProduct(filteredData);
            setActivePage(1);
        }
    },[activeCategory])


    if(isLoading) {
        return <Loading/>
    }
    
    
   
    
  return (
    <div>
        <NavBar className='bg-red-300' searchText={searchText} setSearchText={setSearchText}/>
        <div className='container px-5 mt-5 mx-auto'>
            <div className='grid grid-cols-[200px_1fr]'>

                <Category activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>

                <div className='relative xl:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 bg[var(--back)] h-[50vh]'>
                {
                    filteredProduct.length > 0 ? filteredProduct?.slice(startIndex, endIndex).map(({id, images, title, price, category, description, slug}) => {
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
            </div>    

            {
                <div className="flex space-x-4 justify-center mt-10">
                {new Array(pages)?.fill("").map((_, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 flex items-center justify-center rounded-full bg-[#FFB8E0] text-white font-semibold text-lg transition duration-300 ease-in-out transform hover:shadow-lg hover:bg-[var(--mainColor)] cursor-pointer ${activePage === index + 1 ? "bg-[var(--mainColor)]" : "bg-[#FFB8E0]"}`} onClick={() => setActivePage(index + 1)}>
                    {index + 1}
                  </div>
                ))}
              </div>
            }
        </div>
    </div>
  )
};

export default Products;