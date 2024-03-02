import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaHeart} from 'react-icons/fa'




const SpecialDishCards = ({item}) => {
    const [isHeartFilled, setIsHeartFilled] = useState(false);

    const handleHeartClick = () => {
        setIsHeartFilled(!isHeartFilled)
    }
  return (
    <div className=''>
      <div className="card w-72 lg:w-96 m-auto bg-base-100 shadow-xl relative">

        <div className={`rating gap-1 absolute right-2 top-2 p-4 starHeart bg-orange-400 ${isHeartFilled ? 'text-red-700' : 'text-white'}`} onClick={handleHeartClick}>
            <FaHeart className='h-5 w-5 cursor-pointer'/>
        </div>
        
        <Link to={`/menu/${item._id}`}>
  <figure><img src={item.image} alt="" className='hover:scale-105 transition-all duration-300 h-60 md:h-72'  /></figure>
        </Link>
  <div className="card-body">
    <Link to={`/menu/${item._id}`}><h2 className="card-title">{item.name}</h2></Link>
    <p>Description of a Dish</p>
    <div className="card-actions justify-between items-center">
        <h5 className='font-semibold'><span className='text-sm text-red-500'>$</span>{item.price}</h5>
      <button className="btn bg-orange-500 text-white hover:text-black">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default SpecialDishCards
