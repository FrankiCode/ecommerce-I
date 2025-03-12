import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Category = ({activeCategory, setActiveCategory}) => {

    const [category, setCategory] = useState([]);
    // const [active, setActive] = useState(0)

    const url = "http://localhost:3000/category";

    useEffect(() => {
        axios.get(url).then(({data}) => {
            setCategory(data)
        })
    },[])
  return (
    <div className='h-[70vh]'>
        <div className={`bg-[var(--mainColor)] text-[#fff] px-1 py-1 mb-1 cursor-pointer hover:font-bold duration-300 ${activeCategory === "All" ? "bg-pink-300 font-bold text-emerald-600" : "bg-[var(--mainColor)]"}`} 
        onClick={() => setActiveCategory("All")}>All</div>
        {
            category.map(({id, name}, index) => {
                return <div className={`bg-[var(--mainColor)] text-[#fff] px-1 py-1 mb-1 cursor-pointer hover:font-bold duration-300 ${activeCategory === name ? "bg-pink-300 font-bold text-emerald-600"  : "bg-[var(--mainColor)]"}`}
                 key={id} onClick={() => {setActiveCategory(name)}}>
                    <p>{name}</p>
                </div>
            })
        }
    </div>
  )
}

export default Category