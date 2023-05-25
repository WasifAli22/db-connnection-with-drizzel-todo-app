"use client"
import { NewTodo } from '@/lib/drizzel';
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';


const AddTodo = () => {
    const [task, setTask] = useState<NewTodo | null>(null);
    const {refresh}=useRouter()
const handleSubmit=async ()=>{
  try {
    if (task) {
      const res=await fetch("/api/todo",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({task:task.task})
      })
      console.log(res.ok)
      refresh()
    } 
    
  } catch (error) {
    console.log("error");
    
  }
}
  return (
    <div>
        <form className="w-full flex gap-x-3">
            <input onChange={(e)=>setTask({task:e.target.value})} type="text" name="" className="w-full rounded-full py-3.5 px-5 border focus:outline-primary" />

                <button type='button' onClick={handleSubmit} className='p-4 shrink-0 rounded-full bg-gradient-to-b from-primary to-secondary' >
                    <Image src={"/arrow.png"} width={20} height={20} alt='arrow'/>
                </button>
        </form>

    </div>
  )
}

export default AddTodo