import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper/Wrapper';
import InfoBox from '../InfoBox/InfoBox';

const StyledPlanet = styled.div`
    border-radius: 50%;
    width: ${({ width, scale }) => `${width * scale}px`};
    height: ${({ width, scale }) => `${width * scale}px`};
    background-color: ${({ color }) => color};
    font-size: 50px;
    color: white;
    flex-shrink: 0;
    position: relative;

`



const PlanetModule = ({ name, description, width, distance, color, scale }) => (
    <>
    <Wrapper distance={distance} scale={scale}>

        <InfoBox description={description} title={name}/>

        <StyledPlanet 
            name={name}
            description={description}
            width={width}
            distance={distance}
            color={color}
            scale={scale}
        />

    </Wrapper>
    </>
)
export default PlanetModule;