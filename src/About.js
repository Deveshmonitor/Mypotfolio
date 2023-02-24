import Nav from "./Nav";
export default function About() {
    return (
        <>
              <Nav/>
            <div className="flex flex-col md:flex-row justify-between w-[96%] m-auto pt-8">
                <div className="w-full ">
                    <img src="./img/dev.png" alt="" />

                </div>
                <div className="w-full ">
                    <h1 className="text-fuchsia-500 text-4xl md:text-8xl font-bold text-center my-4 ">About Me</h1>
                    <p className="my-2 text-gray-400 font-bold text-sm text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, animi ducimus eos illum, voluptas repellat nobis iusto ullam ipsum, aliquam id est iure quidem repellendus aut hic illo voluptatibus deleniti ea nulla temporibus doloremque. Dolorem expedita amet modi, officiis veniam magnam laboriosam velit consequatur dolores quidem optio blanditiis corrupti iure.</p>
                    <p className="my-2 text-gray-400 font-bold text-sm text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam repellat excepturi facere neque quod commodi repellendus non odio modi nostrum ex quas fugit totam error accusantium, est nisi quos repudiandae quisquam quo libero. Modi quidem, debitis corrupti optio quia ullam tempora repellendus corporis, voluptas iste recusandae ipsum nulla adipisci quam?</p>
                    <h1 className="text-4xl md:text-8xl font-bold text-gray-400 opacity-25 text-center z-10 ">Developer</h1>
                </div>
            </div>



        </>

    );
}