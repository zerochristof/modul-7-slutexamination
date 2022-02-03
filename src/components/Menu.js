
import bag from '../assets/graphics/bag.svg';
import '../App.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addAllItems, addNewItem, incCartItem } from '../actions/addCartItem';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';
function Menu() {
  const airItems = useSelector((state) => { return state.airItems });
  const cartItems = useSelector((state) => { return state.cartItems })
  //id och antal knytet till id
  const dispatch = useDispatch();

  let [cartN, setCartN] = useState(0);
  useEffect(() => {
    async function getItems() {
      const response = await fetch("http://localhost:5000/api/beans");
      const data = await response.json();
      dispatch(addAllItems(data.menu));
    }
    getItems();
  }, []);

  //get the amount of cart items
  async function getCartNum() {
    let numIt = 0;
    cartItems.map((item) => {
      
      numIt += item.num;
    })
    console.log(numIt);
    setCartN(numIt);
    return numIt;
  }
  useEffect(() => {
    getCartNum();

  }, [cartN]);

//function to add item to the cart
  function addItem(id) {
    let orderExist = false;
    cartItems.map((item) => {
      if (id == item.id )
        orderExist = true;
    })
    if (orderExist) {
      dispatch(incCartItem(id));
    }
    else {
      dispatch(addNewItem(id));
    }
    getCartNum();
    console.log(cartN)
  }



  return (
    <div class="Menu">
      <Link to="/cart"><button class="Bag"><img class="bag" src={bag}></img><div class="bagItems">{cartN}</div></button></Link>
      <div class="MenuHead">Meny</div>
      {airItems.map((item) => {
        return <div><button  onClick={() => {addItem(item.id);setCartN()} } class="button3">+</button><div class="mItem">{item.title} </div>
        <div class="Pitem"> {item.price}Kr</div> <div class="itemD">{item.desc}</div></div>
      })}
      <div class="gbak">Göteborg fyller 400 år Köp en Bryggkaffe och en Gustav Adolfsbakelse och få 49kr rabatt </div>

    </div>

  )
}
export default Menu;
