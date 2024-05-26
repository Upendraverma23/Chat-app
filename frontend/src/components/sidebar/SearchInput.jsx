import React, { useState } from 'react'
import { TbUserSearch } from "react-icons/tb";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {

  const [search ,setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
     return toast.error("Search item must be 3 characters long")
    }
    const conversation = conversations?.filteredUsers?.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");
    }
    else toast.error("No such user found!");
    
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'> 
    <input 
    type='text' 
    placeholder='Search...'
    className='input input-bordered rounded-full btn btn-wide'
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    />
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