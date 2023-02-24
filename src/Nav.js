import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <>
      <div className="Navbar  text-white  w-[96%] m-auto py-4  flex flex-col 
            justify-between  md:flex-row 
             text-center   ">
        <div className='py-5 md:py-0'>
          <span className='inline-block text-3xl font-bold hover:text-fuchsia-500'>Web</span>
          <span className='font-bold text-neutral-500 m-0'>Developer</span>

        </div>
        <div className='flex flex-col md:flex-row align-center text-center items-center '>
          <ul className="flex  px-3 mr-5">
            <NavLink to="/" className='px-3 hover:text-fuchsia-500 font-bold'>Home</NavLink>
            <NavLink to="/about" className='px-3 hover:text-fuchsia-500 font-bold '>About</NavLink>
            <NavLink to="/contact" className='px-3 hover:text-fuchsia-500 font-bold '>Contact</NavLink>
            <NavLink to="/services" className='px-3 hover:text-fuchsia-500 font-bold '>Service</NavLink>
            <NavLink to="/work" className='px-3 hover:text-fuchsia-500 font-bold '>Project</NavLink>
          </ul>
           <div className='my-5 md:m-0'>
           <a href='/#' className=' text-center p-2 align-middle border-fuchsia-500 border-2 font-bold
                     text-sm  hover:bg-fuchsia-500 rounded-full '>Contact Me</a>
        
           </div>
          


        </div>
        


      </div>

    </>
  )
}

export default Nav