function SearchBar({handleSearch, handleSearchSubmit, searchValue}) {

    return (
        <>
            <form 
            className='pb-10 w-full md:pt-10 md:pl-0 md:flex md:items-center'
            onSubmit={handleSearchSubmit}
            >
                <input
                className="w-full py-1 px-2 border border-indigo-50 text-white rounded-xl bg-transparent font-normal placeholder-indigo-50 text-md focus:border-blue-400 focus:outline-none"
                value={searchValue}
                type="text" 
                onChange={(e) => {handleSearch(e)}}
                placeholder='Search for a movie...'           
                />
            </form>
        </>
    )
}

export default SearchBar