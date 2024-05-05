import React from 'react'
import { TbUserSearch } from "react-icons/tb";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'> 
    <input type='text' placeholder="Search..." className='input input-bordered rounded-full btn btn-wide'/>
    <button type='submit' className='btn btn-circle bg-green-600'>
    <TbUserSearch className='w-6 h-6 outline-none'/>
    </button>
    </form>


  
  )
}

export default SearchInput





//starter code
// import React from 'react'
// import { TbUserSearch } from "react-icons/tb";

// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'> 
//     <input type='text' placeholder="Search..." className='input input-bordered rounded-full btn btn-wide'/>
//     <button type='submit' className='btn btn-circle bg-green-600'>
//     <TbUserSearch className='w-6 h-6 outline-none'/>
//     </button>
//     </form>


  
//   )
// }

// export default SearchInput