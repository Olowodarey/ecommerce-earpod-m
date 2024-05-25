"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'



function Delivery() {
  const navigate = useRouter(); 
    return (
      <div className='flex gap-10'>
        
      <Link href='/delivery'>
      Delivery
      </Link>

      <button onClick={() => navigate.back()} className='bg-black text-white py-2 px-5' >
        back
        </button>

      </div>
    )
  }


export default Delivery

