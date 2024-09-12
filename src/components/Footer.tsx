import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='bg-black text-gray-400 pt-12 pb-6'>
        <div className='w-max-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='mx-5 flex flex-col items-center '>
            <h2 className='text-white text-lg font-semibold mb-4 hover:text-gray-400'>About Us</h2>
            <p className=' hover:text-gray-400 text-white px-8'>Music Academy is a premium institute dedicated to tutoring the art and science of music. We nurture talents from the ground up, fostering a vibrant community of musicians</p>
        </div>
        <div className=' flex flex-col items-center'>
        <h2 className='text-white text-lg font-semibold mb-4 hover:text-gray-400'>Follow Us</h2>
        <p className='mx-5 text-white hover:text-gray-400 hover:cursor-pointer'>Facebook</p>
        <p className='mx-5 text-white hover:text-gray-400 hover:cursor-pointer'>X</p>
        <p className='mx-5 text-white hover:text-gray-400 hover:cursor-pointer'>Pinterest</p>
        <p className='mx-5 text-white hover:text-gray-400 hover:cursor-pointer'>Youtube</p>
        </div>
        <div className=' flex flex-col items-center'>
        <h2 className='text-white text-lg font-semibold mb-4 hover:text-gray-400'>Quick Links</h2>
        <p className='mx-5 text-white hover:text-gray-400 hover:cursor-pointer'>
            <Link href={"/"}>Home</Link></p>
        <p className='mx-5 text-white hover:text-gray-400 hover:cursor-pointer'> <Link href={"/courses"}>Our Courses</Link></p>
        <p className='mx-5 text-white hover:text-gray-400 hover:cursor-pointer'> <Link href={"/webinars"}>Weinars</Link></p>
        <p className='mx-5 text-white hover:text-gray-400 hover:cursor-pointer'> <Link href={"/contact"}>Contact</Link></p>
        </div>
        <div className='mx-5 flex flex-col items-start'>
        <h2 className='text-white text-lg font-semibold mb-4 hover:text-gray-400'>Contact Us</h2>
        <p className=' text-white '>Kolkata India,<br></br>Kolkata-100021<br></br> Email: SatyakiBhattcharjee@gmail.com <br></br>phone:+91 1234567890</p>

        </div>
        </div>
        <p className='text-center mt-4 text-xs'>©2024 Music Academy. All rights reserved.</p>
    </footer>
    </>
  )
}

export default Footer
