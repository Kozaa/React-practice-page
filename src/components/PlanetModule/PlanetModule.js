import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper/Wrapper';
import Title from '../Title/Title';
import Description from '../Description/Description';

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

const InfoBox = styled.div`

    width: 200px;
    height: 130px;
    margin-bottom: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #ddd;
    border-radius: 20px;

`


const PlanetModule = ({ name, description, width, distance, color, scale }) => (
    <>
    <Wrapper distance={distance} scale={scale}>

        <InfoBox scale={scale} width={width}>
                <Title> {name} </Title>
                <Description> {description} </Description>
        </InfoBox>

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