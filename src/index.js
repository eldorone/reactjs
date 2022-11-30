import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Fruits from './Fruits.jsx';

const fruits = [
  { url: 'https://bit.ly/3ARrT5J', name: 'Watermelon' },
  { url: 'https://bit.ly/3ity3SY', name: 'Orange' },
  { url: 'https://bit.ly/3OMGzsm', name: 'Cherry' },
  { url: 'https://bit.ly/3AVuGuF', name: 'Lemon' },
  { url: 'https://bit.ly/3AYqytI', name: 'Blueberry' },

  { url: 'https://bit.ly/3EMvRxD', name: 'Banana' },
  { url: 'https://bit.ly/3VC5jpt', name: 'Peach' },
  { url: 'https://bit.ly/3Uiy5KM', name: 'Coconut' },
  { url: 'https://bit.ly/2DfPXBA', name: 'Papaya' },
  { url: 'https://bit.ly/3AYMogN', name: 'Dragon fruit' },

  { url: 'https://bit.ly/3Fg179Q', name: 'Grape' },
  { url: 'https://bit.ly/3Vp0ZdB', name: 'Mango' },
  { url: 'https://shutr.bz/3u9HsSs', name: 'Mangosteen' },
  { url: 'https://bit.ly/3ucwtYv', name: 'Durian' },
  { url: 'https://bit.ly/3UrWC0g', name: 'Avocado' }
]

ReactDOM.render(
  <React.StrictMode>
    {fruits.map((value) => {
      return <Fruits data={value} />;
    })}
  </React.StrictMode>,

  document.getElementById('root')

);