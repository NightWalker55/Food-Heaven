import React from 'react'
import './Dishes.css'
import FoodCard from '../FoodCard/FoodCard'

const Dishes = ({food}) => {
  return (
    <div className='dish-container'>
      <h1>Dishes</h1>
      <div className="dishes">
        {
            food.map(f=>{
                return (
                    <FoodCard id={f._id} name={f.name} description={f.description} price={f.price} image={f.image}/>
                )
            })
        }
      </div>
    </div>
  )
}

export default Dishes
