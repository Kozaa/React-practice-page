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
    padding: ${({ scale, distance }) => `${(scale * 1400)/2 + distance + 65}px`}; 
    border: white solid 1px;
    border-radius: 50%;
`


const Star = ({ state }) => (
        <Sun scale={state.scale}>
            {state.planetData.map(item => <Orbit key={item.name} scale={state.scale} distance={item.distance}/> )}
            {console.log(state.planetData[0].distance)}
        </Sun>

)

export default Star;