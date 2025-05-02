import React from 'react'
import { auth, signOut } from '../../../../auth'




export default async function SettingPage() {
    
    const session = await auth();
    const handlesubmit = async () => {
        "use server";
        await signOut();
    } 
     
 
  return (
    <div className='min-h-screen text-white text-shadow-black flex flex-col justify-center items-center'>
       <h1 className='text-3xl font-bold'>Settings</h1>
      <h2> {JSON.stringify(session)} </h2>
      <h2> {JSON.stringify(session?.user?.email)} </h2>
      <h2> {JSON.stringify(session?.user?.name)} </h2>
       <div className= "flex flex-col justify-center items-center font-bold">
        <h1 className=" text-7xl text-center ">HEllo, there 😊</h1>
        <h2>you Are Not LOGGED In</h2>
      

       </div>
      <form action= {handlesubmit }>
      <button className='border rounded-2xl drop-shadow-slate-500 hover p-3 mt-3 bg-slate-500 text-white' type= 'submit'>Sign Out</button>
      </form>
           
    </div>
  )
}

