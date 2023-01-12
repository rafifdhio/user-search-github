import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export default function Button(){
    return (
    
    <button className='bg-black text-white hover:bg-zinc-800 p-[20px] aspect-square'>
      <MagnifyingGlassIcon className='w-4 h-5'/>
    </button>
    
    )
  }
