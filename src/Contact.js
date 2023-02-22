import React from "react";
import Nav from "./Nav";
function Contact() {
    return(
     <>
     <Nav/>
       <div className="flex justify-between w-[96%] m-auto pt-10">
              
                <div className="w-full py-6 ">
                    <h1 className="text-fuchsia-500 text-8xl font-bold text-center my-4 ">Contact-Us</h1>
                    <p className="my-2 text-gray-400 font-bold text-sm text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, animi ducimus eos illum, voluptas repellat nobis iusto ullam ipsum, aliquam id est iure quidem repellendus aut hic illo voluptatibus deleniti ea nulla temporibus doloremque. Dolorem expedita amet modi, officiis veniam magnam laboriosam velit consequatur dolores quidem optio blanditiis corrupti iure.</p>
                    <p className="my-2 text-gray-400 font-bold text-sm text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam repellat excepturi facere neque quod commodi repellendus non odio modi nostrum ex quas fugit totam error accusantium, est nisi quos repudiandae quisquam quo libero. Modi quidem, debitis corrupti optio quia ullam tempora repellendus corporis, voluptas iste recusandae ipsum nulla adipisci quam?</p>
                    <h1 className="text-8xl font-bold text-gray-400 opacity-25 text-center z-10 ">9301024584</h1>
                </div>
              
                <div className="w-full py-6 text-center">
                   <form action="" className="text-center">
                    <input type="text" placeholder="Enter Your Name" className="border-fuchsia-500  border-2 rounded-md
                    p-1 w-2/3 font-bold text-lg my-4" />
                    <input type="email" placeholder="Enter Email Adderss" className="border-fuchsia-500  border-2 rounded-md
                    p-1 w-2/3 font-bold text-lg my-4" />
                    <input type="number" placeholder="Enter Ph. Number" className="border-fuchsia-500  border-2 rounded-md
                    p-1 w-2/3 font-bold text-lg my-4" />
                    <textarea name="text" id=""  rows="4" className="w-2/3 border-fuchsia-500 p-1 border-2 font-bold text-lg
                    rounded-md my-4 " placeholder="Enter Your Text Here?"></textarea>
                    </form> 
                    <a href="" className=" px-2 py-1  text-md font-bold border-fuchsia-500 border-2 rounded-md 
                     hover:bg-fuchsia-500">Submited</a>
                    
                </div>
            </div>


     </>
    )
}

export default Contact;