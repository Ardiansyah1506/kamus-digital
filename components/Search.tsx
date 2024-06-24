"use client"
import {IoSearch} from 'react-icons/io5'
import { useSearchParams,usePathname,useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

const Search = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const {replace} = useRouter()
  const handleSearch = useDebouncedCallback ((term:string)=> {
    console.log(term)
    const params = new URLSearchParams(searchParams)
    if(term){
      params.set("query",term)
    }else{
      params.delete("query")
    }
    replace(`${pathname}?${params.toString()}`)
  },300)
  
  return (
      <div className='relative flex flex-1 w-1/2'>
        <input type="text" name="" id="" className='w-full border-gray-200 bg-gray-100 py-3 px-5 text-sm rounded-3xl' placeholder='Search' onChange={(e)=>handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}/>
        <IoSearch className='right absolute right-3 top-2 h-6 w-5'/>
    </div>

  )
}

export default Search