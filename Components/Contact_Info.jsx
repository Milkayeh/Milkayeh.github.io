import { author_data } from '@/Assets/assets'
import React from 'react'
import Link from 'next/link'

const Contact_Info = () => {
    return (
        <div className='max-w-screen-md mx-auto px-4'>
            <span className='text-2xl font-bold'>Contact Details: </span>
            <p> You can reach out to me on my <Link href={author_data[0].xurl} className="hover:text-blue-600 transition-colors duration-200"> (Twitter/X ACCOUNT) </Link>
            I do condone follow for follows.
            </p>

            </div> 
            
    )
}

export default Contact_Info