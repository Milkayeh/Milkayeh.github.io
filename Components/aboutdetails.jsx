import { author_data } from '@/Assets/assets'
import React from 'react'

const AboutDetails = () => {
    return (
        <div className='max-w-screen-md mx-auto px-4'>
            <span className='text-2xl font-bold'>About Me: </span>
            <p>{author_data[0].AboutMe} </p>
        </div>
    )
}

export default AboutDetails