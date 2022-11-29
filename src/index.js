import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Student from './Student.jsx'

const studentsInfo = [
  { id: 18012704, name: 'Eldor' },
  { id: 18012705, name: 'Cris' },
  { id: 18012706, name: 'Leonel' },
  { id: 18012707, name: 'Jamal' },
  { id: 18012708, name: 'Gavi' },
  { id: 18012709, name: 'Diogo' },
  { id: 18012710, name: 'Alex' }
]

ReactDOM.render(
  <React.StrictMode>
    {studentsInfo.map((value) => {
      return <Student data={value} />;
    })}
  </React.StrictMode>,

  document.getElementById('root')

);