import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <>
       <div className="Navbar text-white  w-[96%] m-auto py-4  flex flex-col 
            justify-between  md:flex-row 
             text-center align-middle items-center bg--500">
                <div>
                    <span className='inline-block text-3xl font-bold hover:text-fuchsia-500'>Web</span>
                    <span className='font-bold text-neutral-500 m-0'>Developer</span>

                </div>
                <div className='flex align-center items-center '>
                    <ul className="flex px-3 mr-5">
                        <NavLink to="/" className='px-3 hover:text-fuchsia-500 font-bold '>Home</NavLink>
                        <NavLink to="/about" className='px-3 hover:text-fuchsia-500 font-bold '>About</NavLink>
                        <NavLink to="/contact" className='px-3 hover:text-fuchsia-500 font-bold '>Contact</NavLink>
                        <NavLink to="/services" className='px-3 hover:text-fuchsia-500 font-bold '>Service</NavLink>
                        <NavLink to="/work" className='px-3 hover:text-fuchsia-500 font-bold '>Project</NavLink>
                    </ul>
                    <a href="" className=' p-2 align-middle border-fuchsia-500 border-2 font-bold
                     text-sm  hover:bg-fuchsia-500 rounded-full '>Contact Me</a>
                </div>


            </div>

    </>
  )
}

export default Nav