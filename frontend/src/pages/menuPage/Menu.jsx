import React from 'react'

const Menu = () => {
  return (
    <div>
      {/* menu banner */}
      <div className='max-w-screen-2xl container px-4 xl:px-24 m-auto bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
      <div className="py-40 flex  justify-center items-center gap-8">
        {/* left side  */}
        <div className="text-center space-y-7 px-4">
            <h2 className='text-4xl md:text-5xl leading-snug md:leading-snug font-bold'>Dive into Delights of Delectable <span className='text-orange-500'>Food</span></h2>
            <p className='text-xl text-[#4A4A4A]'>Where Each Plate Waves a Story of Culinary Mastery and Passionate Craftsmanship</p>
            <button className='btn bg-orange-500 px-8 py-3 font-semibold text-white rounded-full hover:text-black'>Order Now</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Menu
