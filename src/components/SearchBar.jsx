import {useState} from 'react'

function SearchBar({handleSearch, searchValue}) {

    return (
        <>
            <form className='pb-10 sm:pt-10 sm:flex sm:items-center'>
                <input
                className="border-transparent w-2/3 py-2 bg-transparent text-white placeholder-slate-50 text-xl font-light focus:outline-none"
                value={searchValue}
                type="text" 
                onChange={handleSearch}
                placeholder='Search for a movie...'           
                />
            </form>
        </>
    )
}

export default SearchBar