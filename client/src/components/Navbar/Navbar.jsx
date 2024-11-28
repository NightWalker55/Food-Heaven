import React,{useState} from 'react'
import { IoIosSearch} from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { RiLoginCircleLine } from "react-icons/ri";
import { RiMenu5Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import './Navbar.css'


const Navbar = ({selectFood}) => {

  const [menu,setMenu] = useState(false)

  const navigate = useNavigate()

  const handleCartClick = ()=>{
      navigate('/checkout')
  }

  return (
    <nav className='navbar'>
      <div className="menu-icon">
      <RiMenu5Fill onClick={()=>setMenu(!menu)} className='menu'/>
      </div>
       <div className="logo">
        <h2>Food Heaven</h2>
       </div>
       <div className={`contents ${menu ? 'open' : ''}`}>
        <h3>Home</h3>
        <h3>Dishes</h3>
        <h3>Orders</h3>
        <h3>Contact</h3>
       </div>
       <div className="applications">
        <IoIosSearch className='icon'/>
        <FaRegHeart className='icon'/>
        <div className="cart">
        <BsCart3 className='icon' onClick={handleCartClick}/>
       
          
          {
            selectFood.length>0 && <p className='cart-number'>{selectFood.length}</p>
          }
        </div>
        <RiLoginCircleLine className='icon'/>
       </div>
    </nav>
  )
}

export default Navbar
