import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country';
import logo from './logo.svg';
import Cart from './components/Cart/Cart';

function App() {
  const [country, setCountry] = useState([]);
  console.log(country.length);

  useEffect(() => {
    let cApi = 'https://restcountries.com/v3.1/all';
    fetch(cApi)
    .then(response => response.json())
    .then(data => {
      setCountry(data)
      // console.log(data);
    })
  }, [])  
  const [cart, setCart] = useState([]);
  const handleBtn = (c) => {
    const newCart = [...cart, c];
    setCart(newCart);
    console.log('Btn Clicked', c.name.common);

  };
console.log('App cart',cart);

  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Total Country: {country.length}</h1>
        <Cart carts={cart} ></Cart>
        <h2>Cart: {cart.length}</h2>
        <h6>Ali Ashraf</h6>

        {
          country.map(c => <Country cDetails={c} button={handleBtn}></Country>)
        }        

      </header>
    </div>
  );
}

export default App;
