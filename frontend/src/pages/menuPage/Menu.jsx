import React, { useEffect, useState } from 'react'
import SpecialDishCards from '../../components/SpecialDishCards';
import { FaFilter } from 'react-icons/fa';

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6)



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
    setSelectedCategory(category);
    setCurrentPage(1);
  }
  
  
  // show All data
  const showAllData = () => {
    setFilteredItems(menu);
    setSelectedCategory('all')
    setCurrentPage(1);
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
    setFilteredItems(sortedItems);
    setCurrentPage(1);
  }

  // pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem * itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
      <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
        {/* all category btns */}
        <div className="flex flex-row justify-start md:items-center gap-4 md:gap-8">
          <button onClick={showAllData} className={selectedCategory === 'all' ? 'underline underline-offset-4 text-orange-500' : ''}>All</button>
          <button onClick={() => filterItems('salad')}  className={selectedCategory === 'salad' ? 'underline underline-offset-4 text-orange-500' : ''}>Salads</button>
          <button  onClick={() => filterItems('pizza')} className={selectedCategory === 'pizza' ? 'underline underline-offset-4 text-orange-500' : ''}>Pizza</button>
          <button  onClick={() => filterItems('soup')} className={selectedCategory === 'soup' ? 'underline underline-offset-4 text-orange-500' : ''}>Soups</button>
          <button  onClick={() => filterItems('dessert')} className={selectedCategory === 'dessert' ? 'underline underline-offset-4 text-orange-500' : ''}>Desserts</button>
          <button  onClick={() => filterItems('drinks')} className={selectedCategory === 'drinks' ? 'underline underline-offset-4 text-orange-500' : ''}>Drinks</button>
        </div>

        {/* sorting based filtering */}
        <div className='flex justify-end mb-4 rounded-sm'>
          <div className="bg-black p-2">
            <FaFilter className='h-4 w-4 text-white'/>
          </div>
          {/* sorting options */}
          <select name="sort" id="sort" onChange={(e) => handleSortChange(e.target.value)} value={sortOption} className='px-2 py-1 rounded-sm bg-black text-white'>
            <option value="default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="low-to-high">Low-to-high</option>
            <option value="high-to-low">High-to-Low</option>
          </select>
        </div>

      </div>

      {/* products Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {
          filteredItems.map((item) => (
            <SpecialDishCards key={item._id} item={item} />
          ))
        }
      </div>
    </div>
    {/* pagination section */}
    <div className="flex items-center justify-center my-12">
        {
          Array.from({length: Math.ceil(filteredItems.length / itemsPerPage)}).map((_, index) => (
            <button key={index + 1} onClick={() => paginate(index + 1)} className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? 'bg-orange-500 text-white' : 'bg-gray-300'}`}>
              {index + 1}
            </button>
          ))
        }
    </div>
    </div>
  )
}

export default Menu
