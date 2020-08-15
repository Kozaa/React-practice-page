import React from 'react';
import { createGlobalStyle } from 'styled-components'
import background from './asets/stars.png';
import PlanetModule from './components/PlanetModule/PlanetModule';
import Star from './components/Star/Star';
import Interface from './components/Interface/Interface';
import Title from './components/Title/Title';
import { planetData, interfaceText } from './data/data';

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
    scale: 1,
    currentObject: 0,
    planetData,
    interfaceText,
  };


   handleScaleChangePlus = () => {
     this.setState(prevstate => {

      if(prevstate.scale < 1) {

        let newScale = prevstate.scale + .1;      //this makes sure there is no decimal errors like 3.0000000000000009
        newScale = newScale.toFixed(1);
        newScale = Number(newScale);

        return {scale: newScale};

      } else alert('This is maximal scale');

    });
   };

   handleScaleChangeMinus = () => {
    this.setState(prevstate => {

      if(prevstate.scale > .1) {

        let newScale = prevstate.scale - .1;
        newScale = newScale.toFixed(1);
        newScale = Number(newScale);

        return {scale: newScale};

      } else alert('This is minimal scale');

    });
 };

    handleCurrentObjectChangeLeft = () => {

      this.setState(prevstate => { 
        if(prevstate.currentObject > 0) {
          return {currentObject: prevstate.currentObject - 1 }
        }
      })
    };

    handleCurrentObjectChangeRight = () => {

      this.setState(prevstate => { 
        if(prevstate.currentObject < 8) {
          return {currentObject: prevstate.currentObject + 1 }
        }
      })
    };


    calculatePlanetDistance = () => {
      const ViewWidth = window.innerWidth;
      let distance = 200;     //static margin-left on body element
      
      if(this.state.currentObject) {
        distance = distance + (this.state.scale * 1400);      //adding sun width

        for(let i=0; i<this.state.currentObject; i++) {

          distance = distance + (this.state.scale * this.state.planetData[i].distance) + 200;   //200 is static infoBox width
        }
        distance = distance - ViewWidth/2;       //centering the planet in the view port
      }

     return distance;
    }


    componentDidUpdate() {
      const left = this.calculatePlanetDistance();

      window.scrollTo({
        top: 0,
       left: left,
        behavior: 'smooth'
    });
}

  render() {
    
    return (
      <>
        <GlobalStyle/>
        <Title main/>

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
        <Interface 
          scale={this.state.scale} 
          interfaceText={interfaceText}
          handleScaleChangeMinus={this.handleScaleChangeMinus}
          handleScaleChangePlus={this.handleScaleChangePlus}
          handleCurrentObjectChangeLeft={this.handleCurrentObjectChangeLeft}
          handleCurrentObjectChangeRight={this.handleCurrentObjectChangeRight}
          currentObject={this.state.currentObject}

        />
      </>
    );
  }
}

export default App;
