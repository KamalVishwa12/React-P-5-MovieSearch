const SearchBar = ({searchMovie, setSearchMovie,fetchMovieData}) => {
    return(
        <div className="main flex justify-center py-5 px-4">
            <input
             value={searchMovie}
             onChange={(e)=> setSearchMovie(e.target.value)}
             type="text" placeholder="Search here" className="bg-gray-200 placeholder-gray-400 px-2 py-2 outline-none border-2 border-gray-500 text-black rounded-l-lg w-80" />
            <button 
             onClick={fetchMovieData}
            className="bg-[#40407a] px-4 text-white rounded-r-lg border-b-2 border-t-2 border-r-2 border-gray-500 shadow-md">
                Search
            </button>
        </div>
    )
};

export default SearchBar;