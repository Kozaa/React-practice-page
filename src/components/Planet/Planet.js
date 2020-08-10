import React from 'react';
import styled from 'styled-components';


const StyledPlanet = styled.div`
    border-radius: 50%;
    width: ${({ width, scale }) => `${width * scale}px`};
    height: ${({ width, scale }) => `${width * scale}px`};
    background-color: ${({ color }) => color};
    margin-left: ${({ distance, scale }) => `${distance * scale}px`};
    font-size: 200px;
    color: white;
    flex-shrink: 0;
    overflow: hidden;
`


const Planet = ({ name, description, width, distance, color, scale }) => (
    <>
        <StyledPlanet 
            name={name}
            description={description}
            width={width}
            distance={distance}
            color={color}
            scale={scale}>
                HERE
        </StyledPlanet>
    </>
)
export default Planet;