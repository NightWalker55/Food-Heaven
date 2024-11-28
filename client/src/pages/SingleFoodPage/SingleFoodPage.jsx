import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './SingleFoodPage.css';
import Navbar from '../../components/Navbar/Navbar';

const SingleFoodPage = ({ selectFood,setSelectFood }) => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const navigate = useNavigate()


  const handleCart = (food) => {
    setSelectFood((prevSelectFood) => [...prevSelectFood, food]);
  };

  const handleCartBuy = (food) => {
    setSelectFood((prevSelectFood) => [...prevSelectFood, food]);
    navigate('/checkout')
  };

  useEffect(() => {
    const fetchSingleFood = async () => {
      try {
        const res = await fetch(`http://localhost:3000/${id}`);
        const data = await res.json();
        setFood(data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchSingleFood();
  }, [id]); 
  

  if (!food) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar selectFood={selectFood} />
      <div className="single-foodpage">
        <div className="food-image-single">
          <img src={food.image} alt="" className="food-images" />
        </div>
        <div className="food-details">
          <h2>{food.name}</h2>
          <h3 className="food-price">{food.price} TK</h3>
          <p>{food.description}</p>
          <div className="buttons">
            <button className="addcart" onClick={()=>handleCart(food)}>
              Add to Cart
            </button>
            <button className="buynow" onClick={()=>handleCartBuy(food)}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodPage;
