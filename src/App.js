import React from 'react';
import { createGlobalStyle } from 'styled-components'
import background from './asets/stars.png';
import Planet from './components/Planet/Planet';
import Wrapper from './components/Wrapper/Wrapper';
import Star from './components/Star/Star';


const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background-image: url(${background});
    background-size: 100% auto;
    background-repeat: repeat;
  }
`

const planetData = [
  {
    name: 'Mercury',
    description: 'Something about mercury',
    width: '5',
    distance: '',
    color: 'orange'
  },
  {
    name: 'Venus',
    description: 'Something about Venus',
    width: '12',
    distance: '',
    color: 'grey'
  },
  {
    name: 'Earth',
    description: 'Populated by humans',
    width: '13',
    distance: '',
    color: 'blue'
  },
  {
    name: 'Mars',
    description: 'Elons musk home',
    width: '7',
    distance: '',
    color: 'red'
  },
  {
    name: 'Jupiter',
    description: 'Biggset planet',
    width: '140',
    distance: '',
    color: 'coral'
  },
  {
    name: 'Saturn',
    description: 'It has a ring',
    width: '120',
    distance: '',
    color: 'blue'
  },
  {
    name: 'Uranus',
    description: 'The other blue one',
    width: '51',
    distance: '',
    color: 'cyan'
  },
  {
    name: 'Neptune',
    description: 'Thats neptune',
    width: '50',
    distance: '',
    color: 'green'
  },
  
]

function App() {
  return (
    <>
    <GlobalStyle/>
    <Star scale='0.2'/>

    {
      planetData.map(item => (
        <Planet name={item.name} description={item.description} width={item.width} distance={item.distance} color={item.color} scale="0.2" />
      ))
    }

    </>
  );
}

export default App;
