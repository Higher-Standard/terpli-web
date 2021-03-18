import styled from 'styled-components'

export const ServicesContainer = styled.div `
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #4B3562;
    @media screen and (max-width: 786px) {
        height: 1850px;
    }
   
`

export const ServicesWrapper = styled.div `
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const ServicesCard = styled.div `
    background: #30204E;
    width:  340px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    padding: 30px;
    margin-bottom: 40px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img `
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`
export const ServicesH1 = styled.h1 `
    margin-top: 150px;
    color: #D0E678;
    font-size: 50px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 64px;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2 `
    font-size: 1rem;
    margin-bottom: 10px;
    color: #E2CDFF;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    padding-top: 20px;
`

export const ServicesP = styled.p `
    font-size: 1rem;
    text-align: center;
    color: #E2CDFF;
`


export const VideoBg = styled.video `
height: 100%;
width: 275px;
margin-top: 0px;

    -o-object-fit: cover;
    object-fit: cover;
    background-size: cover;
    background: #232a34;


`
