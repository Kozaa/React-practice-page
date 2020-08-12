import React from 'react';
import styled from 'styled-components';


const Sun = styled.div`
    border-radius: 50%;
    width: ${({ scale }) => `${scale * 1400}px`};
    height: ${({ scale }) => `${scale * 1400}px`};
    background-color: yellow;
    flex-shrink: 0;
    position: relative;
`


const Orbit = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    
    /* padding: ${({ scale, distance }) => `${(scale * 1400)/2 + (scale * distance) + 65}px`}; */
    padding: ${({ distance }) => `${distance}px`}; 
    border: white solid 1px;
    border-radius: 50%;
`

let distanceHelperVar = null;

const Star = ({ state }) => (

        <Sun scale={state.scale}>

            {state.planetData.map((item, i, arr) => {
                
                if(i===0) {
                    distanceHelperVar = state.scale * 1400 / 2;
                    distanceHelperVar = (distanceHelperVar + (state.scale * item.distance) + 100)
                } else {
                    distanceHelperVar = (distanceHelperVar + (state.scale * item.distance) + 200)
                }

                
                console.log(`(${distanceHelperVar} + (${state.scale} * ${item.distance}) + 100)`)
                
                return <Orbit key={item.name}  distance={distanceHelperVar}/> }
            )}
        
        </Sun>


)

export default Star;