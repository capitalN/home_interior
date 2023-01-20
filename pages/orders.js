import Sidebar from '@/components/accountPage/sidebar'
import { useRouter } from 'next/router'
import React from 'react'

const Orders = () => {
    const {route} = useRouter();
  return (
    <div>
        <Sidebar route={route}/>
    </div>
    
  )
}

export default Orders