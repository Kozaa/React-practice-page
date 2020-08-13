import React from 'react';
import { createGlobalStyle } from 'styled-components'
import background from './asets/stars.png';
import PlanetModule from './components/PlanetModule/PlanetModule';
import Star from './components/Star/Star';


const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    margin-left: 200px;
    padding: 0;
    width: 100%;
    height: 100vh;
    background-image: url(${background});
    background-size: 100% auto;
    background-repeat: repeat;

    font-family: 'Montserrat', sans-serif;
    font-size: calc(1vw + 1vh + 2px);

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

// planet info from: 
// https://pressbooks.bccampus.ca/mste5120physicalscience/chapter/size-of-solar-system-ratios-of-the-planet-sizes/
// https://space-facts.com/planets/

class App extends React.Component {

  state = {
    scale: .6,
    planetData: 
    [
      {
        name: 'Mercury',
        description: ['4.880 km','0.39 AU (58.000.000 km from the Sun)', 'Mercury’s craters are named after famous artists, musicians and authors.'],
        width: 5,
        distance: 5850,
        color: 'orange'
      },
      {
        name: 'Venus',
        description: ['12.100 km', '0.72 AU (108.000.000 km from the Sun)', 'Venus is the hottest planet in the solar system'],
        width: 12,
        distance: 4950,
        color: 'grey'
      },
      {
        name: 'Earth',
        description: ['12.800 km','1 AU (150.000.000 km from the Sun)', 'Earth’s atmosphere protects us from meteoroids and radiation from the Sun.'],
        width: 13,
        distance: 100500,
        color: 'blue'
      },
      {
        name: 'Mars',
        description: ['6.800 km', '1.5 AU (228.000.000 km from the Sun)', 'There have been more missions to Mars than any other planet.'],
        width: 7,
        distance: 75000,
        color: 'red'
      },
      {
        name: 'Jupiter',
        description: ['142.000 km', '5.2 AU (778.000.000 km from the Sun)', 'Jupiter has more than double the mass of all the other planets combined.'],
        width: 140,
        distance: 705000,
        color: 'coral'
      },
      {
        name: 'Saturn',
        description: ['120.000 km', '9.5 AU (1.430.000.000 km from the Sun)','Saturn has more moons than any other planet in the Solar System.'],
        width: 120,
        distance: 720000,
        color: 'blue'
      },
      {
        name: 'Uranus',
        description: ['51.800 km', '19.2 AU (2.870.000.000 km from the Sun)', 'Uranus has only been visited by a single spacecraft, Voyager 2.'],
        width: 51,
        distance: 2160000,
        color: 'cyan'
      },
      {
        name: 'Neptune',
        description: ['49.500 km', '30.1 AU (4.500.000.000 km from the Sun)', 'It takes like more than 4 hours for light to reach Neptune from the Sun.'],
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
