import React, { useEffect, useState } from 'react'
import SpecialDishCards from '../../components/SpecialDishCards';

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');



  // loading data
  useEffect(() => {
    const fetchDate = async () => {
      try{
        const response = await fetch('/src/assets/menu.json')
        const data = await response.json();
        setMenu(data)
        setFilteredItems(data)
      }
      catch (error){
        console.log(error)
      }
    }
    fetchDate();
  }, [])


  // filter data base on category
  const filterItems = (category) => {
    const filtered = category === 'all' ? menu : menu.filter((item) => item.category);
    setFilteredItems(filtered);
    setSelectedCategory(category)
  }


  // show All data
  const showAllData = () => {
    setFilteredItems(menu);
    setSelectedCategory('all')
  }


  // sorting on base of A-Z, Z-A, low-high Prices
  const handleSortChange = (option) => {
    setSortOption(option)

    let sortedItems = [...filteredItems];

    switch (option) {
      case 'A-Z':
        sortedItems.sort((a, b) => a.name.localeCompare(b.name))
        break;
      case 'Z-A':
        sortedItems.sort((a, b) => b.name.localeCompare(a.name))
        break;
      case 'low-to-high':
        sortedItems.sort((a, b) => a.price - b.price)
        break;
      case 'high-to-low':
        sortedItems.sort((a, b) => b.price - a.price)
      default:
        break;
    }
    setFilteredItems(sortedItems)
  }

  return (
    <div>
      {/* menu banner */}
      <div className='max-w-screen-2xl container px-4 xl:px-24 m-auto bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
      <div className="py-48 flex  justify-center items-center gap-8">
        <div className="text-center space-y-7 px-4">
            <h2 className='text-4xl md:text-5xl leading-snug md:leading-snug font-bold'>For the Love of Delicious <span className='text-orange-500'>Food</span></h2>
            <p className='text-xl text-[#4A4A4A] md:w-4/5 m-auto'>Come with Family and feel joy of mouthwatering Food Such as Greek Salad, Lasagine, Butternut Pumpkin, Olivas Rallenes and more for a moderate Cost</p>
            <button className='btn bg-orange-500 px-8 py-3 font-semibold text-white rounded-full hover:text-black'>Order Now</button>
        </div>
      </div>
    </div>


    {/* menu shop section */}
    <div className="max-w-screen-2xl m-auto px-4 xl:px-24 container">
      {/* filtering and sorting */}
      <div className="">filtering and sorting</div>

      {/* products Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {
          filteredItems.map((item) => (
            <SpecialDishCards key={item._id} item={item} />
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default Menu
