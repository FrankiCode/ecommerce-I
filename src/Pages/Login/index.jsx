import React from 'react'
import NavBar from '../../Components/Layout/NavBar'

const Login = () => {
  return (
    <div>
      <NavBar/>
      <div className='bg-[var(--background)] h-[calc(100vh-80px)]'>
        <div className='grid grid-cols-2 justify-center w-[80%] mx-auto pt-10 '>
          <div className='w-[300px]'>
            <img src="/Tom-Ford-LoginFoto.webp" alt="" className='w-full' />
          </div>
          <form className='text-[14px] flex flex-col gap-10'>
              <div className='flex flex-col gap-2.5 w-[400px]'>
                <input className='border border-[var(--mainColor)] px-2.5 py-2.5 outline-none text-[var(--mainColor)]' type="text" placeholder='Your Name' required/>
                <input className='border border-[var(--mainColor)] px-2.5 py-2.5 outline-none text-[var(--mainColor)]' type="text" placeholder='Your Second Name'/>
                <input className='border border-[var(--mainColor)] px-2.5 py-2.5 outline-none text-[var(--mainColor)]' type="text" placeholder='Your Last Name' required/>
                <input className='border border-[var(--mainColor)] px-2.5 py-2.5 outline-none text-[var(--mainColor)]' type="email" placeholder='Your Email' required/>
              </div>
              <div className='flex flex-col gap-2.5 w-[400px]'>
                <input className='border border-[var(--mainColor)] px-2.5 py-2.5 outline-none text-[var(--mainColor)]' type="password" placeholder='Your Password'/>
                <input className='border border-[var(--mainColor)] px-2.5 py-2.5 outline-none text-[var(--mainColor)]' type="password" placeholder='Confirm Your Password'/>
              </div>
              <button className='bg-[var(--mainColor)] text-[var(--productTitle)] font-light py-2.5 w-[400px]'>Sign in</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login