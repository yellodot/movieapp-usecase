function SearchBar({handleSearch, handleSearchSubmit, searchValue}) {

    return (
        <>
            <form 
            className='pb-10 sm:pt-10 sm:flex sm:items-center'
            onSubmit={handleSearchSubmit}
            >
                <input
                className="border-transparent w-2/3 py-2 bg-transparent text-white font-normal placeholder-slate-50 text-xl focus:outline-none"
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