import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';
import { planetData } from '../../data/data';

const StyledInterfaceText = styled.div`
    text-align: justify; 
    margin-right: 10px;
    font-size: .7em;
    color: white;
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

const Interface = ({ scale, interfaceText, handleScaleChangePlus, handleScaleChangeMinus, handleCurrentObjectChangeRight, handleCurrentObjectChangeLeft, currentObject }) => (
    <Wrapper appInterface>
        <StyledInterfaceText>{ interfaceText }</StyledInterfaceText>

       <ButtonWrapper>    
            <ButtonContainer>
                    <div>Scale: {scale.toString()}</div>
                    <Button direction='up' onClick={handleScaleChangePlus}></Button>
                    <Button direction='down' onClick={handleScaleChangeMinus}></Button>
            </ButtonContainer>

                <ButtonContainer>
                    <div>{currentObject ? planetData[currentObject-1].name : 'Sun'}</div>
                    <Button direction='left' onClick={handleCurrentObjectChangeLeft}></Button>
                    <Button direction= 'right' onClick={handleCurrentObjectChangeRight}></Button>
                </ButtonContainer>       
        </ButtonWrapper>
    </Wrapper>
);


export default Interface;