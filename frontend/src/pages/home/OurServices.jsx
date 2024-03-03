import React from 'react'

const OurServices = () => {
    const servicesLists = [
        {id: 1, title: 'Catering', desc: 'Delight your Guest with Our Flavours and Presentation', Image: '/src/assets/services-imgs/icon1.png'},
        {id: 2, title: 'Fast Delivery', desc: 'We Deliver your Order promptly to your door', Image: '/src/assets/services-imgs/icon2.png'},
        {id: 3, title: 'Online Ordering', desc: 'Explore Menu and order with ease using our online ordering', Image: '/src/assets/services-imgs/icon3.png'},
        {id: 4, title: 'Gift Cards', desc: 'Give the Gift of exceptional dining with foodi gift card', Image: '/src/assets/services-imgs/icon4.png'},
    ]
  return (
    <div className='max-w-screen-2xl m-auto container px-4 xl:px-24 my-16'>
       <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* text */}
        <div className="md:w-1/2">
        <div className="text-left md:w-4/5">
        <p className='font-medium text-red-500 uppercase tracking-wide text-lg'>Our Story and Services</p>
        <h1 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug md:w-[520px]'>Our Culinary Journey and Services</h1>
        <p className='my-5 text-gray-600 leading-[30px]'>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quos mollitia odit sit veniam, dolores possimus explicabo repellat beatae placeat. Placeat, totam ratione"
        </p>
        <button className='btn bg-orange-500 text-white hover:text-black rounded-full px-8 py-3'>Explore</button>
      </div>
        </div>
        {/* images */}
        <div className="md:w-1/2">
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 items-center'>
                {
                    servicesLists.map((service) => (
                        <div key={service.id} className='shadow-md rounded-sm px-4 py-5 text-center space-y-2  cursor-pointer hover:border hover:border-indigo-600 transition-all duration-200'>
                            <img src={service.Image} alt="" className='m-auto' />
                            <h5 className='pt-3 font-semibold text-orange-500'>{service.title}</h5>
                            <p className='text-gray-600'>{service.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
