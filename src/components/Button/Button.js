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


const Button = ({ onClick, direction }) => {
    
     switch(direction) {
         case 'up': return (<StyledButtonUp onClick={onClick}/>)
         case 'down': return (<StyledButtonDown onClick={onClick}/>)
         case 'left': return (<StyledButtonLeft onClick={onClick}/>)
         case 'right': return (<StyledButtonRight onClick={onClick}/>) 
         default: return (<div>Sorry, something went wrong</div>)
     }
};


export default Button;