import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import Link from 'next/link'


const Header = () => {
    return (
        <header>
            <div className='py-5 px-5 md:px-12 lg:px-28'>
                <div className='items-center text-center'> 
                <span className="ml-3 text-2xl font-semibold">Milkayeh&#39;s Research Centre</span>  </div>
                
                
                {/* Navbar */}
                <nav className="text-center ">
                        <ul>
                            <li>
                                <a> ( </a>
                                <Link href="/" className="hover:text-blue-600 transition-colors duration-200">Home</Link>
                                <a> | </a>
                                <Link href="/about" className="hover:text-blue-600 transition-colors duration-200">About Me</Link>
                                <a> | </a>
                                <Link href="/blog" className="hover:text-blue-600 transition-colors duration-200">Blog</Link>
                                <a> | </a>
                                <Link href="/contact" className="hover:text-blue-600 transition-colors duration-200">Find Me</Link>
                                <a> ) </a>
                            </li>
                        </ul>
                        
                </nav>


                <div style={{ display: 'flex', justifyContent: 'center' }}> <Image src={assets.main} width={180} alt='' className='w-[130px] sm:w-auto'/> </div>
                {/* Empty div for spacing */}
                <div className="w-50 "></div>
                
            </div>
        </header>
    )
}

export default Header;