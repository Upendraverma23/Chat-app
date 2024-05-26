import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import uselogin from '../../hooks/uselogin';

const Login = () => {

 const[username,setUsername] = useState("");
 const [password,setPassword] = useState("");

 const {loading,login} = uselogin()

 const handleSubmit = async (e) => {
  e.preventDefault();
   await login(username,password);
 }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

       <h1 className='text-3x1 font-semibold text-center text-gray-300'>
        Login 
        <span className='text-green-300'>ChatApp</span>
        </h1>
        
        <form onSubmit={handleSubmit}>
        <div>
          <label className="label p-2">
           <span className='text-base label-text'>Username</span>
          </label>
          <input type="text" placeholder='Enter the Username' className='w-full input input-bordered h-10 '
          value={username}
          onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div>
          <label className="label p-2">
           <span className='text-base label-text'>Password</span>
          </label>
          <input type="Password" placeholder='Enter Password' className='w-full input input-bordered h-10 '
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <p> Don't have an account?<Link to="/Signup" className='text-sm hover:underline hover:text-green-300 mt-2 inline-block'>SignUp</Link></p>
        <div>
          <button className='btn btn-block btn-sm mt-2' disabled={loading}>
            {loading ? <span className='loading loading-spinner'></span> : "Login"}
          </button>
        </div>
        </form>


      </div>
       
    </div>
  )
};

export default Login;






//Starter code for this file


// import React from 'react';

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

//        <h1 className='text-3x1 font-semibold text-center text-gray-300'>
//         Login 
//         <span className='text-green-300'>ChatApp</span>
//         </h1>
        
//         <form>
//         <div>
//           <label className="label p-2">
//            <span className='text-base label-text'>Username</span>
//           </label>
//           <input type="text" placeholder='Enter the Username' className='w-full input input-bordered h-10 '/>
//         </div>
//         <div>
//           <label className="label p-2">
//            <span className='text-base label-text'>Password</span>
//           </label>
//           <input type="Password" placeholder='Enter Password' className='w-full input input-bordered h-10 '/>
//         </div>
//         <p> Don't have an account?<a href="#" className='text-sm hover:underline hover:text-green-300 mt-2 inline-block'>SignUp</a></p>
        
//         </form>


//       </div>
       
//     </div>
//   )
// };

// export default Login;