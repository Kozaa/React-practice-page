import React from 'react';
import styled from 'styled-components';



const StyledButtonUp = styled.button`
    position: relative;

    padding: 10px;
    margin:5px;
    width: 80px;
    height: 50px;

    border: none;
    border: 1px white solid;
    border-radius: 5px;
    background-color: black;

    cursor: pointer;

    ::after {
        position: absolute;
        left:50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);

        content: '';
        width: 0; 
        height: 0; 
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
  
        border-bottom: 20px solid white;
    }

`

const StyledButtonDown = styled(StyledButtonUp)`
    ::after {
        border-bottom: none;
        border-top: 20px solid white;
    }
`

const StyledButtonLeft = styled(StyledButtonUp)`

    ::after {
        border-left: none;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent; 
        
        border-right: 20px solid white; 
    }
`

const StyledButtonRight = styled(StyledButtonLeft)`


    ::after {
        border-right: none;
        border-left: 20px solid white;
    }
`


const Button = ({ handleScaleChange, handleCurrentObjectChange,  direction }) => {
    
     switch(direction) {
         case 'up': return (<StyledButtonUp id='1' onClick={handleScaleChange}/>)
         case 'down': return (<StyledButtonDown id='0' onClick={handleScaleChange}/>)
         case 'left': return (<StyledButtonLeft id='1' onClick={handleCurrentObjectChange}/>)
         case 'right': return (<StyledButtonRight id='0' onClick={handleCurrentObjectChange}/>) 
         default: return (<div>Sorry, something went wrong</div>)
     }
};


export default Button;