import styled from 'styled-components'

export const ServicesContainer = styled.div `
background: #219A7F;
height: 600px;
z-index: 1;
overflow: scroll;


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
    opacity: 0.6;
    object-fit: cover;

    
    @media screen and (max-width: 1000px) {
        display: none;
    }

`
export const ServicesWrap = styled.div `
    max-width: 1000px;
    margin-top: 100px;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
  


    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        display: column;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesWrapper = styled.div `
    max-width: 1000px;
    margin: 0 auto;
    
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;


    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        font: 12px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const ServicesWrapper2 = styled.div `
    
max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const ServicesCard = styled.div `
    

    background-color:rgba(0, 0, 0, 0.5)
    line-height: 2px;
    opacity: .9 !important;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const ServicesCard2 = styled.div `
    
    background-color:rgba(0, 0, 0, 0.5)
    line-height: 2px;
    opacity: .9 !important;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    margin-top: 30px;
    width: 250px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img `
    height: 100%px;
    width: 150px;
    
    margin-bottom: 10px;

`

export const ServicesIcon1 = styled.img `
    height: 100px;
    width: 110px;
    border-radius: 50%;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.p `
    display: "flex",
    flex: 1, 
    flexWrap: 'wrap';
color: #C2E531;
font-size: 35px;
line-height: 8px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 50px;
text-align: center;
align-items: center;
@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    font-size: 25px;


`

export const ServicesH2 = styled.h2 `
    opacity: .9;
    font-size: 24px;
    margin-bottom: 30px;
    margin-top: 10px;
    color: #C2E531;
    line-height: 1px;
    font-weight: 700;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        font-size: 18px;
    }
    

`
export const ServicesH3 = styled.h2 `
    opacity: .9;
    font-size: 24px;

    margin-top: 30px;
    color: #C2E531;
    line-height: 1px;
    font-weight: 700;
    
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        font-size: 25px;
    }
    

`
export const ServicesH4 = styled.h2 `
    opacity: .9;
    font-size: 24px;
    margin-top: 50px;
    margin-bottom: 50px;
    color: #C2E531;
    line-height: 1px;
    font-weight: 700;
    text-align: center;

    
    @media screen and (max-width: 1000px) {
        font-size: 25px;
    }
    

`

export const ServicesP = styled.p `
    font-size: 16px;
    text-align: center;
    color: #D0E678;
    font-weight: bold;
    line-height: 0px;
    
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        font-size: 16px;

    }
`

export const ServicesP2 = styled.p `
    
    font-size: 16px;
    line-height: 0px;
    text-align: center;
    color:#D0E678;
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        font-size: 16px;

    }
`

