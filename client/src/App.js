
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import SingleFoodPage from './pages/SingleFoodPage/SingleFoodPage';
import { useEffect,useState } from 'react';
import Checkout from './pages/Checkout/Checkout';
import OrderComplete from './pages/OrderComplete/OrderComplete';


function App() {

  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectFood,setSelectFood] = useState([])

 
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await fetch('http://localhost:3000/');
        const data = await res.json();
        setFood(data);
        setLoading(false)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFood();
  }, []);
  
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Homepage selectFood={selectFood} setSelectFood={setSelectFood} food={food} loading={loading}/>} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id" element={<SingleFoodPage selectFood={selectFood} setSelectFood={setSelectFood}/>} />
        <Route path="/checkout" element={<Checkout selectFood={selectFood} setSelectFood={setSelectFood} />} />
       <Route path='/complete' element={<OrderComplete/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
