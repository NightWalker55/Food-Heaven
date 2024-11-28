import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import './Checkout.css';
import Navbar from '../../components/Navbar/Navbar';
import { useState } from "react";

const Checkout = ({ selectFood,setSelectFood }) => {
    const navigate = useNavigate();


  const [quantities, setQuantities] = useState(
    selectFood.reduce((acc, food) => {
      acc[food._id] = 1; 
      return acc;
    }, {})
  );

  const handleIncrease = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const handleDecrease = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(1, prevQuantities[id] - 1), 
    }));
  };

  const handleDelete = (id)=>{
    const filterFood = selectFood.filter(idx=>idx._id!==id)
    setSelectFood(filterFood)
  }

  const getUniqueFoods = (foods) => {
    return foods.reduce((acc, current) => {
        const x = acc.find(item => item._id === current._id);
        if (!x) {
            acc.push(current);
        }
        return acc;
    }, []);
};

const uniqueSelectFood = getUniqueFoods(selectFood);


setSelectFood(uniqueSelectFood)
const totalAmount = uniqueSelectFood.reduce(
    (total, food) => total + quantities[food._id] * food.price,
    0
  );
  

  return (
    <div className="checkout-page">
      <Navbar selectFood={selectFood} />
      <div className="checkout">
        <h1>Your Food Cart</h1>
        <div className="checkout-food-customer-details">
        <div className="checkout-food-details">
            <table className="checkout-table">
            <thead>
            <tr>
              <th>Product</th>
              <th>Details</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {uniqueSelectFood.map((food) => (
            <tr key={food._id}>
            <td className="checkout-image">
              <img src={food.image} alt={food.name} />
            </td>
            <td className="checkout-info">
              <h3>{food.name}</h3>
            </td>
            <td>
            <p>
                <span className="checkout-price">{food.price}</span>
              </p>
            </td>
            <td>
            <div className="quantity">
                <FaMinus
                  className="minus"
                  onClick={() => handleDecrease(food._id)}
                />
                {quantities[food._id]}
                <FaPlus
                  className="plus"
                  onClick={() => handleIncrease(food._id)}
                />
              </div>
            </td>
            <td>{quantities[food._id] * food.price}</td>
            <td>
            <MdOutlineDelete className="checkout-delete" onClick={()=>handleDelete(food._id)}/>
            </td>
            </tr>
        ))}
          </tbody>
            </table>
        </div>
        <div className="customer-details">
        <div className="total">
            <h3>Subtotal</h3>
            <div className="total-amount">{totalAmount}</div>
        </div>
            <button className="order" onClick={()=>navigate('/complete')}>Place Order</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
