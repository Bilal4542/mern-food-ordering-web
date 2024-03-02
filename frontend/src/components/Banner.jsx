import React from 'react'
import banner from '../assets/banner.png'
import bannerFood from '../assets/b-food1.png'

const Banner = () => {
  return (
    <div className='max-w-screen-2xl container px-4 xl:px-24 m-auto bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
      <div className="py-20 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
        {/* left side  */}
        <div className="md:w-1/2 space-y-7 px-4">
            <h2 className='text-4xl md:text-5xl leading-snug md:leading-snug font-bold'>Dive into Delights of Delectable <span className='text-orange-500'>Food</span></h2>
            <p className='text-xl text-[#4A4A4A]'>Where Each Plate Waves a Story of Culinary Mastery and Passionate Craftsmanship</p>
            <button className='btn bg-orange-500 px-8 py-3 font-semibold text-white rounded-full hover:text-black'>Order Now</button>
        </div>
        {/* right side */}
        <div className="md:w-1/2 px-4">
            <img src={banner} alt="" />
            <div className="flex items-center flex-col md:flex-row justify-around -mt-14 gap-4">
                <div className="flex items-center bg-white py-2 px-3 rounded-2xl gap-3 shadow-md w-64">
                    <img src={bannerFood} alt="" className='rounded-2xl object-cover'/>
                    <div className="space-y-1">
                        <h5 className='font-medium mb-1'>Spicy Noodles</h5>
                        <div className="rating rating-sm">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
</div>
<p className='text-red-600'>$180.00</p>
                    </div>
                </div>
                <div className="hidden sm:flex items-center bg-white py-2 px-3 rounded-2xl gap-3 shadow-md w-64">
                    <img src={bannerFood} alt="" className='rounded-2xl object-cover'/>
                    <div className="space-y-1">
                        <h5 className='font-medium mb-1'>Spicy Noodles</h5>
                        <div className="rating rating-sm">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
</div>
<p className='text-red-600'>$180.00</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
