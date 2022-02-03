import logo from './logo.svg';

import './App.css';
import {Route, Routes, BrowserRouter,useLocation} from 'react-router-dom';
import  {Navigate} from 'react-router-dom';
import Menu from './components/Menu';
import Status from './components/Status';
import Cart from './components/Cart';
import Landing from './components/Landing';


function App() {
 
 return (
    <div className="App">
            <BrowserRouter>
        <Routes>
	<Route path="/" element={<Navigate to="/landing"/>} ></Route> 
          <Route path="/" element={<Landing></Landing>}> </Route>
          <Route path="/landing" element={<Landing></Landing>}> </Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
	  <Route path="/cart" element={<Cart/>} />
          <Route path="/status" element={<Status></Status>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
