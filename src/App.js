import React from 'react';
import { createGlobalStyle } from 'styled-components'
import background from './asets/stars.png';
import PlanetModule from './components/PlanetModule/PlanetModule';
import Star from './components/Star/Star';
import Interface from './components/Interface/Interface';
import Title from './components/Title/Title';
import { planetData, interfaceText } from './data/data';


const viewWidth = window.innerWidth;
const viewHeight = window.innerHeight;


const GlobalStyle = createGlobalStyle`

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

    @media screen and (max-width: 768px){
      font-size: calc(1vw + 1vh + 4px);
      margin-left: 0;
      margin-bottom: 50vh;
      margin-top: 60px;
      width: 100vw;
      height: auto;
      overflow-y: visible;
      overflow-x: hidden;
    }
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
      justify-content: center;
      align-items: auto;
    }
  }
`

// planet info from: 
// https://pressbooks.bccampus.ca/mste5120physicalscience/chapter/size-of-solar-system-ratios-of-the-planet-sizes/
// https://space-facts.com/planets/

class App extends React.Component {

  state = {
    scale: .5,
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

      let distance = 0;

      viewWidth > 768 ? distance = 200 : distance = 0;     //static margin-left on body element
      
      if(this.state.currentObject) {
        distance = distance + (this.state.scale * 1400);      //adding sun width

        for(let i=0; i<this.state.currentObject; i++) {

          distance = distance + (this.state.scale * this.state.planetData[i].distance) + (viewWidth > 768 ? 200 : 170 + this.state.scale * planetData[i].width);   //200 is static infoBox width, 170 is static height on mobile
        }
        distance = distance - (viewWidth > 768 ? viewWidth/2 : viewHeight/2 - 50);       //centering the planet in the view port
      }

     return distance;
    }

    componentDidMount() {

      window.scrollTo({
        top: 0,
        left: viewWidth > 768 ? 200 : 0,
        behavior: 'smooth'
      })
    }


    componentDidUpdate() {
      const distance = this.calculatePlanetDistance();

      window.scrollTo({
        top: viewWidth > 768 ? 0 : distance,
       left: viewWidth > 768 ? distance : 0,
        behavior: 'smooth'
    });
}

  render() {
    
    return (
      <>
        <GlobalStyle/>
        <Title main/>

        <Star scale={this.state.scale}/>
    
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
