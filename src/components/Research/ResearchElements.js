import styled from "styled-components";
import { Link } from "react-router-dom";

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
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;

`

export const Container = styled.div `
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    // background: linear-gradient(
    //     108deg,
    //     rgba(1, 147, 86, 1) 0%,
    //     rgba(10, 201, 122, 1) 100%
    // );
`;

export const FormWrap = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "Montserrat" !important;
    font-weight: 900;
    color: #423253;
    font-size: 35px;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;


export const FormContent = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) P{
        padding: 10px;
    }
`;

export const ResearchH1 = styled.h1 `
font-size: 65px;
font-family: "Montserrat" !important;
letter-spacing: 0.3rem;
font-weight: 900;
color: white;
font-size: 48px;
text-align: center;
padding-bottom: 200px;

@media screen and (max-width: 768px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`

export const ResearchP = styled.p `
display: flex;
font-family: "Montserrat" !important;
letter-spacing: 0.3rem;
color: #D5E690;
justify-content: center;
// padding-left: 50px;
// padding-right: 50px;
// padding-top: 55px;
font-size: 28px;
font-weight: bolder;
    margin-top: 24px;
    text-align: center;
    max-width: 900px;

    
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`
