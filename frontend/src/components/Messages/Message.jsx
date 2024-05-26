import React from 'react'
import {useAuthContext} from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {

const {authUser} = useAuthContext()
const {selectedConversation} =useConversation();
const fromatedTime = extractTime(message.createdAt);
const fromMe = message.senderId === authUser._id;
const chatClassName = fromMe ? 'chat-end' : 'chat-start';
const profilePic = fromMe ? authUser.profilePic: selectedConversation?.profilePic;
const bubbleBgColor = fromMe ? 'bg-green-500' : "";

  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilePic} alt="profile photo" />
            </div>
        </div>
        <div className={`chat-bubble text-white  ${bubbleBgColor} pb-2 `}> {message.message}</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{fromatedTime}</div>
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