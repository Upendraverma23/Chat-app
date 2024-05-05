import React from 'react'

const Gendercheckbox = () => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>Male</span>
                <input type='checkbox' className='checkbox border-slate-900'/>
            </label>
            
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>Female</span>
                <input type='checkbox' className='checkbox border-slate-900'/>
            </label>

        </div>
    </div>
  )
}

export default Gendercheckbox;



//starter code

// import React from 'react'

// const Gendercheckbox = () => {
//   return (
//     <div className='flex'>
//         <div className='form-control'>
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text'>Male</span>
//                 <input type='checkbox' className='checkbox border-slate-900'/>
//             </label>
            
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text'>Female</span>
//                 <input type='checkbox' className='checkbox border-slate-900'/>
//             </label>

//         </div>
//     </div>
//   )
// }

// export default Gendercheckbox;
