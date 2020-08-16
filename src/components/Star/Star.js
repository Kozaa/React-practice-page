import React from 'react';
import styled from 'styled-components';
import InfoBox from '../InfoBox/InfoBox';
import { sunDescription, planetData } from '../../data/data';


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



let distanceHelperVar = null;

const Star = ({ scale }) => (

        <Sun scale={scale}>

            {planetData.map((item, i, arr) => {
                const windowWidth = window.innerWidth;

                if(i===0) {
                    distanceHelperVar = scale * 1400 / 2;
                    distanceHelperVar = (distanceHelperVar + (scale * item.distance) + (windowWidth > 768 ? 100 : 170 + (scale * item.width / 2)))
                } else {
                    distanceHelperVar = (distanceHelperVar + (scale * item.distance) + (windowWidth > 768 ? 200 : 170 + (scale * item.width / 2) + (scale * arr[i-1].width / 2)))
                }
                
                return <Orbit key={item.name}  distance={distanceHelperVar}/> }
            )}

            <InfoBox description={sunDescription} title='Sun' scale={scale} />
        
        </Sun>


)

export default Star;