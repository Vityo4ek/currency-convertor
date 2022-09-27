import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import React, { useEffect, useState } from 'react';
// import './App.css';
// import CurrencyRow from './CurrencyRow';

// const BASE_URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'

// function App() {
//   const [currencyOptions, setCurrencyOptions] = useState([])
//   console.log(currencyOptions);
//   useEffect(() => {
//     fetch(BASE_URL)
//     .then(res => res.json())
//     .then(data => {
//       setCurrencyOptions([data.base, ...Object.keys(data.rates)])
//     })
//   }, [])
//   return (
//     <div>
//       <h1>Convert</h1>
//       <CurrencyRow />
//       <div className='equals'>=</div>
      
//     </div>
//   );
// }

// export default App;
