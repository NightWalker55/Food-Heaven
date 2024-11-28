import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import {useNavigate} from 'react-router-dom'
import './FoodCard.css'


const FoodCard = ({id,name,description,price,image}) => {

    const navigate = useNavigate();

    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        return words.length > wordLimit 
          ? words.slice(0, wordLimit).join(' ') + ' ...' 
          : text;
      };

      const handleFoodCardClick = ()=>{
            navigate(`/${id}`)
      }

  return (
    <div className='food-card' onClick={handleFoodCardClick}>
      <img src={image} className='food-image' alt="" />
      <div className="details">
      <h4>{name}</h4>
      <p>{truncateText(description, 11)}</p>
      <h3>{price} TK</h3>
      </div>
      <div className="card-icons">
        <div className="icon-circle">
        <FaRegHeart className='card-favorite'/>
        </div>
        <div className="icon-circle">
        <BsCart3 className='card-cart'/>
        </div>
      </div>
    </div>
  )
}

export default FoodCard
