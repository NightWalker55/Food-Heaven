
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../images/Header.png';
import './Homepage.css';
import Dishes from '../../components/Dishes/Dishes';
import Contacts from '../../components/Contacts/Contacts';

const Homepage = ({ selectFood,setSelectFood,food,loading }) => {

  console.log(selectFood)
 
  return (
    <div>
      <Navbar selectFood={selectFood} />
      <div className="homepage-container">
        <img className="homepage-image" src={Header} alt="" />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Dishes selectFood={selectFood} setSelectFood={setSelectFood} food={food} />
      )}
      <Contacts/>
    </div>
  );
};

export default Homepage;
