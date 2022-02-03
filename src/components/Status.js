import drone from '../assets/graphics/drone.svg';
import '../App.css';
import { useSelector} from 'react-redux';

function Status()
{
    const cartItems = useSelector((state) => { return state.cartItems})
    const orderC = useSelector((state) => {return state.orderC});
    console.log(cartItems);
    
return (
    
    <div class="Status">
        <div class="OrderN">Ordernummer:{orderC.orderNr}</div>
        <img src={drone}></img>
        <div class="order1">Din beställning är på väg! </div>
        <div class="order2"><b>{orderC.eta}</b> minuter</div>
        <a href="/landing">
        <button class="button1">Ok, cool!</button></a></div>
    
)
}
export default Status;