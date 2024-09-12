'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';

const Upcomingwebinars = () => {
        const webinars = [
        {
          title: "Mastering Guitar Basics",
          description:
            "A comprehensive webinar on the fundamentals of guitar playing, perfect for beginners looking to start their musical journey.",
          link: "https://example.com/guitar-basics",
        },
        {
          title: "Introduction to Music Theory",
          description:
            "This webinar will cover the essentials of music theory, including scales, chords, and progressions, to help you understand the language of music.",
          link: "https://example.com/music-theory",
        },
        {
          title: "Advanced Piano Techniques",
          description:
            "For those who already have a grasp on piano basics, this webinar will dive into advanced techniques to elevate your playing.",
          link: "https://example.com/piano-techniques",
        },
        {
          title: "Vocal Warmups and Techniques",
          description:
            "A webinar focused on vocal exercises and techniques to help singers improve their range, tone, and endurance.",
          link: "https://example.com/vocal-techniques",
        },
        {
          title: "Songwriting Workshop",
          description:
            "Join this interactive workshop to learn the art of songwriting, from crafting lyrics to creating melodies.",
          link: "https://example.com/songwriting-workshop",
        },
        {
          title: "Recording Studio Essentials",
          description:
            "Learn the basics of setting up a home recording studio, from equipment selection to sound engineering techniques.",
          link: "https://example.com/recording-essentials",
        },
      ];
      
  return (
    <div className='p-12 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
      <div className='text-center'>
      <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
      <p className='mt-2 text-4xl leading-8 font-bold tracking-tight text-white sm:text-4xl'>Enhance your musical journey</p>
      </div>
      <div className="max-w-5xl mx-auto px-8 text-center">
       <HoverEffect items={webinars} />
      </div>
      <div className='text-center mt-20'>
        <Link href={"/webinars"} className='px-4 py-2 border rounded-md border-neutral-600 text-neutral-700 font-medium bg-white hover:bg-gray-400 hover:text-gray-200 transition duration-200'>
          Explore Webinars
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Upcomingwebinars
