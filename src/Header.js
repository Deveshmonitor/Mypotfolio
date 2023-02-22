import React from 'react'

function Header() {
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
                        <li className='px-3 hover:text-fuchsia-500 font-bold '>Home</li>
                        <li className='px-3 hover:text-fuchsia-500 font-bold '>About</li>
                        <li className='px-3 hover:text-fuchsia-500 font-bold '>Contact</li>
                        <li className='px-3 hover:text-fuchsia-500 font-bold '>Service</li>
                        <li className='px-3 hover:text-fuchsia-500 font-bold '>Project</li>
                    </ul>
                    <a href="" className=' p-2 align-middle border-fuchsia-500 border-2 font-bold
        text-sm  hover:bg-fuchsia-500 rounded-full '>Contact Me</a>
                </div>


            </div>


            {/* this is main content  */}

            <div className="flex justify-between m-auto w-[96%]">
                <div className=' w-[40%] pt-40'>
                    <h1 className='text-6xl font-bold text-fuchsia-500'>Hey Guys!</h1>
                    <h1 className='text-6xl font-bold text-fuchsia-500'>I'm Devesh Sen</h1>
                    <div className=''>
                        <h4 className=' border-fuchsia-500 border-l-8 font-bold text-gray-500 pl-2 mt-4'>Wanna me in your team</h4>
                        <p className='border-fuchsia-500 pl-2 border-l-8 text-gray-500 text-sm'>I am Devesh sen I am bakent and frentend developer and I have many 
                            Skils like Html,Css,JavaScript,React,Java and many more</p>
                    </div>
                    <div className='mt-14'>
                      <a href="" className='text-sm border-2 border-fuchsia-500 hover:bg-fuchsia-500 rounded-full font-bold py-2  px-4'>Get Start</a>
                      <a href="" className='text-sm border-2 border-fuchsia-500 hover:bg-fuchsia-500 rounded-full font-bold py-2  px-4 ml-8'>View CV</a>
                    </div>
                </div>

                <div className='w-[40%]'>
                    <img src="./img/dev.png" alt="" />
                </div>

            </div>

        </>
    )
}

export default Header