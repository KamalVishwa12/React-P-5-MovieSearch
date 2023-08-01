const Navbar = () => {
    return(
        <div className="main flex justify-between items-center px-4 py-4 bg-[#40407a] shadow-md lg:flex md:flex flex-wrap sticky top-0">
            <div className="left flex items-center space-x-3 justify-center"> 
            <img className="w-10" src="https://movie-app-88kamal.vercel.app/clipart3105859.png" alt="logo" />
            <h2 className="font-bold text-2xl text-white">MovieMasala</h2>
            </div>
            <div className="right justify-center">
                <ul className="flex space-x-4 text-white justify-center">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
            </div>
        </div>
    )
};

export default Navbar;