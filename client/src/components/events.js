import React,{ useState, useEffect} from 'react'
import '../css/FoodCard.css';
function Foodcard() {
  const [dishes,setDishes] = useState([]);
  useEffect (() => {
    fetchDishes();
  },[]);
const fetchDishes = () =>{
  return fetch("http://127.0.0.1:3000/dishes")
  .then (res => res.json())
  .then((data) => setDishes(data));
}
  return (
  <div>
    <div className='card-container'>
      {dishes.map((dish) => (
           <div className='card-back'>
            <img className='card-image' src={dish.image} alt={dish.name}/>
             <div className='card-details'>
               <h2 className='card-title'>{dish.name}</h2>
               <p className='card-category'> Category: {dish.category}</p>
               <p className='card-price'> Price: ${dish.price}</p>
             </div>
           </div>
      ))}
    </div>
  </div>
  );
}
export default Foodcard