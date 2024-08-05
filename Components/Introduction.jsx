import { author_data } from '@/Assets/assets'
import React from 'react'

const Introduction = () => {
    return (
        <div className='max-w-screen-md mx-auto px-4'>
            <span className='text-2xl font-bold'>Welcome: </span>
            <p>{author_data[0].introduction} </p>
        </div>
    )
}


export default Introduction