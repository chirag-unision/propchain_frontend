import { useState } from "react"



const SearchComponent = () => {
    const [search, setSearch] = useState('')

    const handleSearch = () => {
        window.location.href = '/searchResults?search='+search
    }


    return (
        <div className="w-1/3 h-min">
            <h1 className="text-5xl font-thin font-[lato] text-white my-2">PropChain</h1>
            <p className="text-lg text-gray-500 mb-5 text-white"> Tag line for the project</p>

            <div className="flex flex-row overflow-hidden bg-gray-200 rounded-md ">
            <input value={search} className="w-full p-4 bg-transparent" onChange={(e)=>{setSearch(e.target.value)}} type="search" placeholder="Search For Properties" />
            <button onClick={handleSearch} className="border text-2xl px-1 hover:bg-gray-300 rounded-md">&#x1F50D;</button>
            </div>
            
        </div>
    )
}

export default SearchComponent