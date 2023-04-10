import Slider from '@/components/Slider'
import React from 'react'
import Outstanding from './outstanding'

const HomePage = () => {
  return (
    <div>
        <div className='w-full h-[400px] bg-gray-200'>
            <h2 className='text-center'>Banner</h2>
        </div>
        <Outstanding />
    </div>
  )
}

export default React.memo(HomePage)