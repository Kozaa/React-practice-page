import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';
import { planetData, interfaceText } from '../../data/data';

const StyledInterfaceText = styled.div`
    text-align: justify; 
    margin-right: 10px;
    font-size: .7em;
    color: white;

    @media screen and (max-width: 768px) {
        margin-right: 0;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const ButtonContainer = styled.div`
    height: 100%;

    text-align: center;
    font-size: .6em;
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Interface = ({ scale, handleScaleChange, handleCurrentObjectChange, currentObject }) => (
    <Wrapper appInterface>
        <StyledInterfaceText>{ interfaceText }</StyledInterfaceText>

       <ButtonWrapper>    
            <ButtonContainer>
                    <div>Scale: {scale.toString()}</div>
                    <Button direction='up' handleScaleChange={handleScaleChange}></Button>
                    <Button direction='down' handleScaleChange={handleScaleChange}></Button>
            </ButtonContainer>

                <ButtonContainer>
                    <div>{currentObject ? planetData[currentObject-1].name : 'Sun'}</div>
                    <Button direction='left' handleCurrentObjectChange={handleCurrentObjectChange}></Button>
                    <Button direction= 'right' handleCurrentObjectChange={handleCurrentObjectChange}></Button>
                </ButtonContainer>       
        </ButtonWrapper>
    </Wrapper>
);


export default Interface;