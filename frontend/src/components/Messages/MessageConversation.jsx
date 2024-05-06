import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti'

const MessageConversation = () => {

 const noChatSelected = true;

  return (
  <div className='md:min-w-[450px] flex flex-col'>
  { noChatSelected ? <NoChatSelected/> : (
    <>
      
      <div className='bg-slate-500 px-2 py-2 mb-2 flex'>
        <span className='label-text'>To : </span><span className='text-gray-900 font-bold'>dugesh</span>
      </div>
        <Messages/>
        <MessageInput/>
    </>
  )}
    </div>

  );
};

export default MessageConversation;



const NoChatSelected = () => {
  return(
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 items-center sm:text-lg md:text-x1 text-gray-200 font font-semibold flex flex-col text-center gap-2'>
        <p>Welcome 🤗 Upendra 🚀</p>
        <p>a Chat to Start messaging</p>
        <TiMessages className='text-3x1 md:text-6x1 text-center' />
      </div>

    </div>
  )
}





//Starter code
// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'
// import {TiMessages} from 'react-icons/ti'

// const MessageConversation = () => {

//  const noChatSelected = true;

//   return (
//   <div className='md:min-w-[450px] flex flex-col'>
//   { noChatSelected ? <NoChatSelected/> : (
//     <>
      
//       <div className='bg-slate-500 px-2 py-2 mb-2 flex'>
//         <span className='label-text'>To : </span><span className='text-gray-900 font-bold'>dugesh</span>
//       </div>
//         <Messages/>
//         <MessageInput/>
//     </>
//   )}
//     </div>

//   );
// };

// export default MessageConversation;



// const NoChatSelected = () => {
//   return(
//     <div className='flex items-center justify-center w-full h-full'>
//       <div className='px-4 items-center sm:text-lg md:text-x1 text-gray-200 font font-semibold flex flex-col text-center gap-2'>
//         <p>Welcome 🤗 Upendra 🚀</p>
//         <p>a Chat to Start messaging</p>
//         <TiMessages className='text-3x1 md:text-6x1 text-center' />
//       </div>

//     </div>
//   )
// }
