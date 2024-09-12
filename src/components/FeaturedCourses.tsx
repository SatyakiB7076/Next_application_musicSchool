"use client";
import courseData from '@/data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'
import Image from 'next/image';
import { Highlight } from './ui/hero-highlight';


interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  slug: string;
  price: number;
  isFeatured: boolean;
  image: string;
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter((courses: Course) => courses.isFeatured);

  return (
    <div className='py-11 bg-gray-900'>
      <div>
        <div className="text-center">
          <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
          <p className='mt-2 text-4xl leading-8 font-bold tracking-tight text-white sm:text-4xl'>Learn with the bests</p>
        </div>
      </div>
      <div className='mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center  mx-[1.5rem]'>
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className='w-full'>
              {/* Adjusted BackgroundGradient for a card-like appearance */}
              <BackgroundGradient className="rounded-[20px] shadow-lg max-w-full p-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800 flex flex-col items-center">
                <h3 className="text-xl mb-3 font-semibold text-gray-800 dark:text-gray-100">{course.title}</h3>
                <Image 
                className='border rounded-lg'
                src={course.image}
                alt='lesson photo'
                width={900}
                height={150}
                ></Image>
                <p className="text-md text-gray-600 dark:text-gray-300 mt-2">{course.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2"> Instructor &nbsp;  
                  <Highlight className='text-gray-900 font-medium'>
                  {course.instructor}
                  </Highlight>
                  </p>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className='text-center mt-20'>
        <Link href={"/courses"} className='px-4 py-2 border rounded-md border-neutral-600 text-neutral-700 font-medium bg-white hover:bg-gray-400 hover:text-gray-200 transition duration-200'>
          Explore Courses
        </Link>
      </div>
      
    </div>
  );
};

export default FeaturedCourses;
