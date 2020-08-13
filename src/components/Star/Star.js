import React from 'react';
import styled from 'styled-components';
import InfoBox from '../InfoBox/InfoBox';

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
    
    padding: ${({ distance }) => `${distance}px`}; 
    border: white solid 1px;
    border-radius: 50%;
`

const description = ['1.391.000 km', 'Center of The Solar Sytem (0AU - distance from Sun to Earth approx. 150.000.000 km)'];


let distanceHelperVar = null;

const Star = ({ state }) => (

        <Sun scale={state.scale}>

            {state.planetData.map((item, i) => {
                
                if(i===0) {
                    distanceHelperVar = state.scale * 1400 / 2;
                    distanceHelperVar = (distanceHelperVar + (state.scale * item.distance) + 100)
                } else {
                    distanceHelperVar = (distanceHelperVar + (state.scale * item.distance) + 200)
                }
                
                return <Orbit key={item.name}  distance={distanceHelperVar}/> }
            )}

            <InfoBox description={description} title='Sun' scale={state.scale} />
        
        </Sun>


)

export default Star;