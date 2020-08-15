import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';

const StyledInterfaceText = styled.div`
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
                    <div>Object: {currentObject}</div>
                    <Button direction='left' onClick={handleCurrentObjectChangeLeft}></Button>
                    <Button direction= 'right' onClick={handleCurrentObjectChangeRight}></Button>
                </ButtonContainer>       
        </ButtonWrapper>
    </Wrapper>
);


export default Interface;