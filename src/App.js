import React from 'react';
import { createGlobalStyle } from 'styled-components'
import background from './asets/stars.png';
import PlanetModule from './components/PlanetModule/PlanetModule';
import Wrapper from './components/Wrapper/Wrapper';
import Star from './components/Star/Star';


const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background-image: url(${background});
    background-size: 100% auto;
    background-repeat: repeat;

    font-family: 'Montserrat', sans-serif;

    overflow-y: hidden;  
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }


  @media screen and (max-width: 768px) {
    #root {
      flex-direction: column;
      
    }
  }
`

class App extends React.Component {

  state = {
    scale: .1,
    planetData: 
    [
      {
        name: 'Mercury',
        description: 'Something about mercury',
        width: 5,
        distance: 5850,
        color: 'orange'
      },
      {
        name: 'Venus',
        description: 'Something about Venus',
        width: 12,
        distance: 4950,
        color: 'grey'
      },
      {
        name: 'Earth',
        description: 'Populated by humans',
        width: 13,
        distance: 100500,
        color: 'blue'
      },
      {
        name: 'Mars',
        description: 'Elons musk home',
        width: 7,
        distance: 75000,
        color: 'red'
      },
      {
        name: 'Jupiter',
        description: 'Biggset planet',
        width: 140,
        distance: 705000,
        color: 'coral'
      },
      {
        name: 'Saturn',
        description: 'It has a ring',
        width: 120,
        distance: 720000,
        color: 'blue'
      },
      {
        name: 'Uranus',
        description: 'The other blue one',
        width: 51,
        distance: 2160000,
        color: 'cyan'
      },
      {
        name: 'Neptune',
        description: 'Thats neptune',
        width: 50,
        distance: 2355000,
        color: 'green'
      }
      
    ]
  }


  render() {
    
    return (
      <>
      <GlobalStyle/>
      <Star state={this.state}/>
  
      {
        this.state.planetData.map(item => (
          <PlanetModule 
            key={item.name}
            name={item.name} 
            description={item.description} 
            width={item.width} 
            distance={item.distance} 
            color={item.color} 
            scale={this.state.scale} />
        ))
      }
  
      </>
    );
  }
}

export default App;
