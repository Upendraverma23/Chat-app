import React from 'react'
import Gendercheckbox from './Gendercheckbox.jsx';

const Signup = () => {
  return (
    <div className='flex flex-col item-center justify-center mim-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
       <h1 className='text-3x1 font-semibold text-center text-gray-300'> 
       SignUp 
       <span className='text-green-300'>ChatApp</span></h1>

       <form>
        <div>
          <label className="label p-2">
           <span className='text-base label-text'>Full Name</span>
          </label>
          <input type="text"
           placeholder='Enter your Full Name' 
           className='w-full input input-bordered h-10 '/>
        </div>

        <div>
          <label className="label p-2">
           <span className='text-base label-text'>UserName</span>
          </label>
          <input 
          type="text" 
          placeholder='Enter the UserName'
           className='w-full input input-bordered h-10 '/>
        </div>

        <div>
          <label className="label p-2">
           <span className='text-base label-text'>Password</span>
          </label>
          <input 
          type="Password" 
          placeholder='Enter Password'
         className='w-full input input-bordered h-10 '/>
        </div>
        
        <div>
          <label className="label p-2">
           <span className='text-base label-text'>Password</span>
          </label>
          <input 
          type="Password" 
          placeholder='Enter confirm Password'
         className='w-full input input-bordered h-10 '/>
        </div>

         <div className='flex flex-row'>
         <Gendercheckbox/>
         </div>
       

        <p> Already have an account? <a href="#" className='text-sm hover:underline hover:text-green-300 mt-2 inline-block'><p className=''>Login</p></a></p>
        <div>
          <button className='btn btn-block btn-sm mt-2'>SignUp</button>
        </div>
        </form>

      </div>
    </div>
  );
};

export default Signup;








//stater code
// import React from 'react'
// import Gendercheckbox from './Gendercheckbox.jsx';

// const Signup = () => {
//   return (
//     <div className='flex flex-col item-center justify-center mim-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//        <h1 className='text-3x1 font-semibold text-center text-gray-300'> 
//        SignUp 
//        <span className='text-green-300'>ChatApp</span></h1>

//        <form>
//         <div>
//           <label className="label p-2">
//            <span className='text-base label-text'>Full Name</span>
//           </label>
//           <input type="text"
//            placeholder='Enter your Full Name' 
//            className='w-full input input-bordered h-10 '/>
//         </div>

//         <div>
//           <label className="label p-2">
//            <span className='text-base label-text'>UserName</span>
//           </label>
//           <input 
//           type="text" 
//           placeholder='Enter the UserName'
//            className='w-full input input-bordered h-10 '/>
//         </div>

//         <div>
//           <label className="label p-2">
//            <span className='text-base label-text'>Password</span>
//           </label>
//           <input 
//           type="Password" 
//           placeholder='Enter Password'
//          className='w-full input input-bordered h-10 '/>
//         </div>
        
//         <div>
//           <label className="label p-2">
//            <span className='text-base label-text'>Password</span>
//           </label>
//           <input 
//           type="Password" 
//           placeholder='Enter confirm Password'
//          className='w-full input input-bordered h-10 '/>
//         </div>

//         <Gendercheckbox/>

//         <p> Already have an account? <a href="#" className='text-sm hover:underline hover:text-green-300 mt-2 inline-block'><p className=''>Login</p></a></p>
//         <div>
//           <button className='btn btn-block btn-sm mt-2'>SignUp</button>
//         </div>
//         </form>

//       </div>
//     </div>
//   );
// };

// export default Signup