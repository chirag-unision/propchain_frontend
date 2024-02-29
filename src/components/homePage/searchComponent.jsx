


const SearchComponent = () => {
    return (
        <div className="w-1/4 h-min">
            <h1 className="text-4xl font-thin font-[lato] text-white my-2">PropChain</h1>
            <p className="text-sm text-gray-500 mb-5"> Tag line for the project</p>

            <div className="flex flex-row overflow-hidden bg-gray-200 rounded-md ">
            <input className="w-full p-3 bg-transparent" type="search" placeholder="Search For Properties" />
            <button className="border text-2xl px-1 hover:bg-gray-300 rounded-md">&#x1F50D;</button>
            </div>
            
        </div>
    )
}

export default SearchComponent