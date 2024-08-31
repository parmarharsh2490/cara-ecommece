// import { useState } from 'react'
// import Signup from './form/Signup'
// import SignIn from './form/Signin'
// import { Navigate,Outlet } from 'react-router-dom'
// const authLayout = () => {
//     const [isSignIn,setSignIn] = useState(true)
//   return (
//    <>
//     {
//       isSignIn ? (
//         <Navigate to='/'>
//       ) : (
//         <>
//         <section className='flex bg-gray-100 absolute flex-1 items-center justify-center h-screen w-screen'>
//         <Outlet/>
//         </section>
//         <div className='flex shadow-md '>
//         {/* <img width={512} height={384} className='bg-center hidden md:block bg-no-repeat bg-cover max-w-[384px] max-h-[512px]' alt="signin" /> */}
//         </div>
//         </>
//       )
//     }
//    </>
   
//   )
// }

// export default authLayout

import { Navigate, Outlet } from 'react-router-dom'

const authLayout = () => {
  const isAuthenticated = false
  return (
    <>
    {
      isAuthenticated ? (
        <Navigate to={'/sign-in'}/>
      ) : (
        <>
       <>
       <section className='flex bg-gray-100 absolute flex-1 items-center justify-center h-screen w-screen'>
         <Outlet/>
         <div className='flex shadow-md '>
        <img src='https://i.imgur.com/9l1A4OS.jpeg' width={512} height={384} className='bg-center hidden md:block bg-no-repeat bg-cover max-w-[384px] max-h-[512px]' alt="signin" />
        </div>
         </section>
        </>
        </>
      )
    }
    </>
  )
}

export default authLayout