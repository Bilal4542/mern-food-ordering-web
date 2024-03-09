import React from 'react'
import testimonialMainImg from '/src/assets/testimonials-imgs/testimonials.png'
import testimonial_1 from '/src/assets/testimonials-imgs/testimonial1.png'
import testimonial_2 from '/src/assets/testimonials-imgs/testimonial2.png'
import testimonial_3 from '/src/assets/testimonials-imgs/testimonial3.png'
import { FaStar } from 'react-icons/fa'

const Testimonials = () => {
  return (
    <div className='max-w-screen-2xl container m-auto xl:px-24 px-4'>
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
            <img src={testimonialMainImg} alt="" />
        </div>
        <div className="md:w-1/2">
        <div className="text-left md:w-4/5">
        <p className='font-medium text-red-500 uppercase tracking-wide text-lg'>testimonials</p>
        <h1 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug md:w-[520px]'>What Our Customers Say About Us</h1>
        <blockquote className='my-5 text-gray-600 leading-[30px]'>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quos mollitia odit sit veniam, dolores possimus explicabo repellat beatae placeat. Placeat, totam ratione"
        </blockquote>

        {/* avatar */}
        <div className='flex items-center gap-4 flex-wrap'>
        <div className="avatar-group -space-x-6 rtl:space-x-reverse -z-10">
  <div className="avatar">
    <div className="w-12">
      <img src={testimonial_1} />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src={testimonial_2} />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src={testimonial_3} />
    </div>
  </div>
  <div className="avatar placeholder">
    <div className="w-12 bg-neutral text-neutral-content">
      <span>+99</span>
    </div>
  </div>
</div>
<div className='space-y-1'>
    <h5 className='text-lg font-semibold'>Customer Feedback</h5>
    <div className='flex items-center gap-2'>
        <FaStar className='text-yellow-400' />
        <span className='font-medium'>4.9</span> <span className='text-gray-600'>(14.2K Reviews)</span>
    </div>
</div>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
