import React from 'react'
import CategoryCards from '../../components/CategoryCards'



const Categories = () => {

    

  return (
    <div className='max-w-screen-2xl container px-4 xl:px-24 m-auto py-16'>
      <div className="text-center">
        <p className='font-medium text-red-500 uppercase tracking-wide text-lg'>customer favourite</p>
        <h1 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug'>Popular Categories</h1>
      </div>
      {/* category cards */}
      <div className='flex flex-col items-center sm:flex-row justify-around flex-wrap mt-12'>
        <CategoryCards title={'Main Dish'} desc={'(86 Dishes)'} img={'/src/assets/category-imgs/img1.png'}/>
        <CategoryCards title={'Break Fast'} desc={'(12 Break Fast)'} img={'/src/assets/category-imgs/img2.png'}/>
        <CategoryCards title={'Dessert'} desc={'(48 Desserts)'} img={'/src/assets/category-imgs/img3.png'}/>
        <CategoryCards title={'Browse All'} desc={'(225 Items)'} img={'/src/assets/category-imgs/img4.png'}/>
      </div>
    </div>
  )
}

export default Categories
