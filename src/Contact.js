import React,{useState} from "react";
import Nav from "./Nav";
const Contact = ()=> {
        const  [user,setUser] = useState({
            name: "",
            email: "",
            phone: "",
            message: "",
        });
        let name,value;
        const getUserData = (event)=> {
            name = event.target.name;
            value = event.target.value;

            setUser({ ...user, [name]: value})
        };

        // conect with firebase 
        const submitData =  async (event)=>{
            event.preventDefault();

            const {  name, email, phone, message}= user;
            if(name && email && phone && message){
               
            
           const res = fetch('https://mypotfolio-96612-default-rtdb.firebaseio.com/userDataRecord.json',
           {method: "post",
            Header: {
            "content-Type":"applicationl/json",
           },
           body : JSON.stringify({
            name,
            email,
            phone,
            message,
           })
           }
           );

           if(res){
            alert("Data successfull Summit");
           }
           else{
            alert("Please fill the Data");
           }
        }
        else{
            alert("Please fill the Data");
           }
        };
  
    return(
     <>
     <Nav/>
       <div className="flex flex-col md:flex-row justify-between w-[96%] m-auto pt-10">
              
                <div className="w-full py-6 ">
                    <h1 className="text-fuchsia-500 text-4xl md:text-8xl font-bold text-center my-4 ">Contact-Us</h1>
                    <p className="my-2 text-gray-400 font-bold text-sm text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, animi ducimus eos illum, voluptas repellat nobis iusto ullam ipsum, aliquam id est iure quidem repellendus aut hic illo voluptatibus deleniti ea nulla temporibus doloremque. Dolorem expedita amet modi, officiis veniam magnam laboriosam velit consequatur dolores quidem optio blanditiis corrupti iure.</p>
                    <p className="my-2 text-gray-400 font-bold text-sm text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam repellat excepturi facere neque quod commodi repellendus non odio modi nostrum ex quas fugit totam error accusantium, est nisi quos repudiandae quisquam quo libero. Modi quidem, debitis corrupti optio quia ullam tempora repellendus corporis, voluptas iste recusandae ipsum nulla adipisci quam?</p>
                    <h1 className="text-4xl md:text-8xl font-bold text-gray-400 opacity-25 text-center z-10 ">9301024584</h1>
                </div>
              
                <div className="w-full py-6 text-center">
                   <form method="post" action="" className="text-center">
                    <input
                     type="text"
                     name="name"
                     placeholder="Enter Your Name"
                    value={user.name}
                    onChange={getUserData}
                    className="border-fuchsia-500  border-2 rounded-md
                    p-1 w-2/3 font-bold text-lg my-4" />
                    <input 
                    type="email"
                    name="email" 
                    placeholder="Enter Email Adderss"
                    value={user.email}
                    onChange={getUserData}
                    className="border-fuchsia-500  border-2 rounded-md
                    p-1 w-2/3 font-bold text-lg my-4" />
                    <input type="number"
                    name="phone" 
                    placeholder="Enter Ph. Number"
                    value={user.phone}
                    onChange={getUserData}
                    className="border-fuchsia-500  border-2 rounded-md
                    p-1 w-2/3 font-bold text-lg my-4" />
                    <textarea 
                    rows="4" className="w-2/3 border-fuchsia-500 p-1 border-2 font-bold text-lg
                    rounded-md my-4 "
                    name="message" 
                    placeholder="Enter Your Text Here?"
                    value={user.message}
                    onChange={getUserData}
                    ></textarea>
                    </form> 
                    <a href="/#" type="Submmit" className=" px-2 py-1  text-md font-bold border-fuchsia-500 border-2 rounded-md 
                     hover:bg-fuchsia-500" onClick={submitData}>Submited</a>
                    
                </div>
            </div>

            
     </>
    )
}

export default Contact;