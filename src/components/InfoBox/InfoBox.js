import React from 'react';
import styled from 'styled-components';
import Description from '../Description/Description';
import Title from '../Title/Title';


const StyledInfoBox = styled.div`
    width: 200px;
    height: auto;
    margin-bottom: 50px;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;

    background-color: #ddd;
    border-radius: 20px;

    ::after {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateY(98%) translateX(-50%);  /* 98% because on some screens there is a thin line visible between the element and after*/

        content: '';
        width: 0; 
        height: 0; 

        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid #ddd;

    }

    @media screen and (max-width: 768px) {
        width: 20vh;
    }
`

const SunStyledInfoBox = styled(StyledInfoBox)`
    margin-bottom: 0;

    position: absolute;
    top: 50%;
    
    right: ${({ scale }) => scale >= 0.5 ? '50%' : '-100%'};
    transform: translateY(-50%) ${({ scale }) => scale >= 0.5 ? 'translateX(50%)' : null};

    ::after {
        content: none;
    }
    
`


const InfoBox = ({ description, title, scale }) => {
    
    
    if(title==='Sun') {
        return (
            <SunStyledInfoBox scale={scale}>
                <Title> {title} </Title>
                <Description description={description}/>
            </SunStyledInfoBox>
        )} 
        else {
            return (
                <StyledInfoBox>
                    <Title> {title} </Title>
                    <Description description={description}/>
                </StyledInfoBox>
            ) 
        }
};


export default InfoBox;