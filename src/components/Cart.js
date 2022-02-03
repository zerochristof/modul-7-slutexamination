import '../App.css';

import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import Status from './Status';
import { addNewOrderC } from '../actions/addCartItem';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addAllItems, addNewItem, incCartItem, rmCartItem } from '../actions/addCartItem';
import arrowU from '../assets/graphics/arrow-up.svg';
import arrowD from '../assets/graphics/arrow-down.svg';

function Usedispatch() {
  const dispatch = useDispatch();
}

function Cart() {

  const [isOpen, setIsOpen] = useState(true);
  const Navigation = useNavigate();
  const dispatch = useDispatch();
  //function to toggle the cart window
  function toggleModal() {
    setIsOpen(!isOpen);
    Navigation('/menu');
  }
  //function to post order and send back order confirmation
  let Submit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/api/beans", { method: "POST" });
      let resJson = await res.json();
      let eta = resJson.eta;
      let orderNr = resJson.orderNr;
      dispatch(addNewOrderC(resJson));
      console.log(resJson);
      if (res.status === 200) {
      } else {
      }
    } catch (err) {
    }
    Navigation('/status');
  };
  const airItems = useSelector((state) => { return state.airItems });
  const cartItems = useSelector((state) => { return state.cartItems });
  const [totalPrice, setTotalPrice] = useState(0);

  //increase cart item
  function increaseO(id) {
    
    dispatch(incCartItem(id));
    getTotalPrice(); 
  }
  //subtract cart item
  function decreaseO(id) {
    
    dispatch(rmCartItem(id));
    getTotalPrice();
  }

  let tprice = 0;
  //function to loop out the airbean products that are in the cart array(id and amount)
  function Order(props) {
    let price = 0;
    let returnV = '';
    if (props.num !== 0) {

      airItems.map((item) => {

        if (props.id == item.id && props.num >= 1) {
          price = 0;
          price = (item.price * props.num);
          returnV = <div style={{ height: "55px" }}><div class="cartItem">{item.title}</div>  <div class="IncDecr">
            <div class="button7" onClick={() => increaseO(item.id)}></div>
            {props.num}<div class="button6" onClick={() => decreaseO(item.id)} ></div></div>
            <div class="itemsPrice">
              {item.price * props.num} kr</div>
          </div>
        }

      })
    }
    return returnV
  }
  let price = 0;
  //Total price function
  async function getTotalPrice() {
   
    cartItems.map((citems) => {
      if (citems.num >= 1) {
        airItems.map((item) => {
          if (citems.id == item.id)
            price=item.price * citems.num+price;

        }
        )
      }
    }
    )
    setTotalPrice(price);
  console.log(price)

    return price;
  }
  useEffect(() => {
    getTotalPrice();
  }, [totalPrice]);
  //function to check if the custumer recives discount
  let IsRabatt = false
  Crabatt();
  function Rabatt() {
    let nprice = 0;
    if (IsRabatt) {
      nprice = totalPrice - 49;
      return <div class="gbak" >49 kr Rabatt!! <br></br>Ursprungligt pris: {totalPrice} kr Nytt pris: {nprice} kr</div>
    }
    else
      return <div></div>
  }
  function Crabatt() {
    let brygg = false;
    let gbak = false;
    let rabatt = false;

    cartItems.map((item1) => {
      if (item1.id == 1 && item1.num >= 1) {
        brygg = true;
      }
      if (item1.id == 7 && item1.num >= 1) {
        gbak = true;
      }
    }
    )
    if (gbak && brygg) {
      IsRabatt = true;
    }
    else
      return <div></div>
  }
  //conditional rendering of the total price
  function TPrice(props) {
    if (props.IsRabatt)
      return <div>{totalPrice - 49} kr</div>
    else
      return <div>{totalPrice} kr</div>
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Cart"
        className="Cart"
        overlayClassName="CartO"
        closeTimeoutMS={500}
      >

        <button class="button4" onClick={toggleModal} ></button>
        <h2 style={{ textAlign: "center" }}>Din beställning</h2>
        {cartItems.map((item) => {
          if (item.num >= 1)
            return <Order id={item.id} num={item.num}></Order>
        }

        )}
        <Rabatt ></Rabatt>
        <div class="orderTotal">Total<div style={{ float: "right" }} ><TPrice IsRabatt={IsRabatt}></TPrice>  </div> </div><div class="moms">inkl moms + drönarleverans</div>
        <div style={{ textAlign: "center" }} > <button class="button2" onClick={Submit}>Take my money!</button></div>
      </Modal></div>
  )

}
export default Cart;
