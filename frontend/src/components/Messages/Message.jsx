import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="./dr.jpg" alt="profile photo" />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-green-400 `}> hi ! what is the problem</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
    </div>
  )
}

export default Message;





//starter code
// import React from 'react'

// const Message = () => {
//   return (
//     <div className='chat chat-end'>
//         <div className='chat-image avatar'>
//             <div className='w-10 rounded-full'>
//                 <img src="./dr.jpg" alt="profile photo" />
//             </div>
//         </div>
//         <div className={`chat-bubble text-white bg-green-400 `}> hi ! what is the problem</div>
//         <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
//     </div>
//   )
// }

// export default Message;