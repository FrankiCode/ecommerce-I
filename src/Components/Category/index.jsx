import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Category = () => {

    const [category, setCategory] = useState([]);
    const url = "http://localhost:3000/category";

    useEffect(() => {
        axios.get(url).then(({data}) => {
            console.log(data);
            setCategory(data)
        })
    },[])
  return (
    <div className='bg-amber-400'>
        {
            category.map((category) => {
                return <div><p>{category}</p></div>
            })
        }
    </div>
  )
}

export default Category