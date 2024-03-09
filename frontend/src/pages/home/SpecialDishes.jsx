import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SpecialDishCards from '../../components/SpecialDishCards';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


const simppleNextArrow = (props) => {
    const {className, style, onClick} = props;
    return(
        <div className={className} style={{...style, display: 'block', background: 'red'}} onClick={onClick}>
            NEXT
        </div>
    )
};
const simpplePrevArrow = (props) => {
    const {className, style, onClick} = props;
    return(
        <div className={className} style={{...style, display: 'block', background: 'orange'}} onClick={onClick}>
            NEXT
        </div>
    )
};


const SpecialDishes = () => {
    const [recipes, setRecipes] = useState([]);

    const slider = React.useRef(null);

    useEffect(() => {
        fetch('/src/assets/menu.json')
        .then(res => res.json())
        .then(data => {
            const special = data.filter((item) => item.category === 'popular')
            setRecipes(special)
        })
    }, [])
    // slider Settings
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        nextArrow: <simppleNextArrow/>,
        prevArrow: <simpplePrevArrow/>
      };
  return (
    <div className='max-w-screen-2xl container m-auto xl:px-24 px-4 my-20'>
      <div className='flex flex-col md:flex-row md:items-center justify-between'>
      <div className="text-left">
        <p className='font-medium text-red-500 uppercase tracking-wide text-lg'>special dishes</p>
        <h1 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug md:w-[520px]'>Standout Dishes From Our Menu</h1>
      </div>
        {/* arrow btns */}
      <div className=''>
        <button onClick={() => slider?.current?.slickPrev()} className='btn p-2 rounded-full ml-5'><FaAngleLeft className='p-1 h-8 w-8'/></button>
        <button onClick={() => slider?.current?.slickNext()} className='btn p-2 rounded-full ml-5 bg-orange-500'><FaAngleRight className='p-1 h-8 w-8'/></button>
      </div>
      </div>


      <Slider ref={slider} {...settings} className='overflow-hidden mt-10 space-x-10 -z-10'>
        {
            recipes.map((item, index) => (
                <SpecialDishCards key={index} item={item}/>
            ))
        }
      </Slider>
    </div>
  )
}

export default SpecialDishes
