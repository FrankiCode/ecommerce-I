import React, { useState } from 'react'
import { HiMiniBars3 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from 'react-router';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { CiLogin } from "react-icons/ci";
import Button from '../../Common/Button'

const NavBar = () => {

    const [showBar, setShowBar] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const NavBar = [
        {id:1, title: "Home", href: "/"},
        {id:2, title: "About", href: "/about"},
        {id:3, title: "Contact us", href: "/contact"},
    ]
  return (
    <div className='relative flex justify-between items-center px-5 py-5 select-none duration-500'>
        {showBar ? (<LiaTimesSolid className=' md:text-2xl lg:text-3xl text-[var(--mainColor)] cursor-pointer duration-500' onClick={() => {setShowBar(!showBar)}} />) : (<HiMiniBars3  className='md:text-2xl lg:text-3xl text-[var(--mainColor)] cursor-pointer duration-500' onClick={() => {setShowBar(!showBar)}}/>)}

        <Link to="/"><h1 className='md:text-3xl lg:text-4xl font-bold text-[var(--mainColor)] font-serif cursor-pointer tracking-[5px] duration-500'>NavBar</h1></Link>

        <div className='flex gap-2.5 items-center duration-500'>
            <CiSearch className='md:text-xl lg:text-2xl text-[var(--mainColor)] cursor-pointer z-10 duration-500' onClick={() => {setShowSearch(!showSearch)}}/>

            <Link to="/login"><Button title='Login' className="lg:text-xl border border-[var(--mainColor)] text-[var(--mainColor)] px-[20px] rounded cursor-pointer hover:bg-[var(--background)] duration-600"/></Link>

            <HiOutlineShoppingBag className='text-2xl text-[var(--mainColor)] cursor-pointer duration-500'/> 

            {showSearch && <div className='absolute right-[12%] duration-500'>
                <input type="search" placeholder='search...' className='lg:w-70 border rounded border-[var(--mainColor)] placeholder:text-[var(--mainColor)] placeholder:text-[14px] text-[14px] px-[20px] py-[3px] outline-none text-[var(--mainColor)] duration-500'/>
            </div>}
        </div>



        { showBar && 
        (<div className="absolute w-[400px] flex flex-col top-[80px] left-0 h-[calc(100vh-80px)] pt-10 tracking-[4px] pl-10 duration-500 all ease-in bg-[var(--background)]">
            {
                NavBar.map(({id, title, href}) => {
                    return <NavLink to={href} key={id} className="text-xl text-[var(--mainColor)] font-thin hover:bg-[var(--background)] pl-2.5 duration-600">{title}</NavLink>
                })
            }
            <div className='bg-[var(--mainColor)] w-[40%] mt-5 pl-2.5'>
                <NavLink to="/login" className="relative flex items-center text-xl text-[var(--background)] font-thin">Login <CiLogin className='absolute left-20 bottom-[2px]'/></NavLink>
            </div>
        </div>)}
    </div>
  )
}

export default NavBar