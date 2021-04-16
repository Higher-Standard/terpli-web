import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';





export const HeroContainer = styled.div `
    background: #4B3562;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    z-index: 1;


`
export const HeroBg = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`

export const VideoBg = styled.video `
    width: 100%;
    height: 100%;
    opacity: 0.3;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;


`
export const HeroContent = styled.div `
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8x 24px;
    display: flex;
    flex-direction: column;
    align-items: center;


`

export const HeroH1 = styled.h1 `
    font-size: 90px;
    padding: 0;
    margin: 0;
    font-family: "Montserrat" !important;
    letter-spacing: 0.1rem;
    font-weight: 900;
    color: #D0E678;

    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 60px;
        
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p `
font-family: "Montserrat" !important;
letter-spacing: 0.1rem;
color: #D5E690;
justify-content: left;
padding-left: 50px;
padding-right: 50px;
font-size: 28px;
font-weight: bolder;
    text-align: center;
    max-width: 1000px;

    
    @media screen and (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 50px;
    }

`
export const HeroP2 = styled.p `
font-family: "Montserrat" !important;
margin-bottom: -20px;
letter-spacing: 0.1rem;
color: #D5E690;
justify-content: left;
padding-left: 50px;
padding-right: 50px;
font-size: 20px;
font-weight: bolder;
    text-align: center;
    max-width: 900px;

    
    @media screen and (max-width: 768px) {
        font-size: 18px;
    }

`

export const HeroBtnWrapper = styled.div `
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (max-width: 400px) {
      text-align: center;
      
    }
`

export const ArrowForward = styled(MdArrowForward) `
    margin-left: 8px;
    font-szie: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight) `
margin-left: 8px;
font-size: 20px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 24px;
`;

