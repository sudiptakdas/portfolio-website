import React from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';

type ProjectProps = (typeof projectsData)[number];
export function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <>
      <section className=' bg-gray-100 flex  max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/2'>
        <div className=' pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col mb-4 h-full '>
          <h1 className=' text-2xl font-semibold'>{title}</h1>
          <p className=' mt-2 leading-relaxed text-gray-700 dark:text-white/70'>
            {description}
          </p>
          <ul className=' flex gap-3 flex-wrap sm:mt-auto'>
            {tags.map((tag, index) => (
              <li
                className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className='  w-1/2 '>
          {
            <Image
              src={imageUrl}
              alt='Project Images'
              quality={95}
              className=' w-full h-full mt-4 rounded-xl shadow-md '
            />
          }
        </div>
      </section>
    </>
  );
}
