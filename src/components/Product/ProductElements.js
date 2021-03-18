import styled from 'styled-components'

export const HeroBg = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 500px;
    height: 500px%;


`

export const VideoBg = styled.video `
    width: 100%;
    height: 100%;
    opacity: 0.9;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    margin-bottom: 35px;
    

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const VideoWrapper = styled.div `
    posititon: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 725px;  
`
export const ServicesContainer = styled.div `
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 786px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const ServicesWrapper = styled.div `
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
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
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 650px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    
`

export const ServicesIcon = styled.img `
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

`
export const ServicesH1 = styled.h1 `
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2 `
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ServicesP = styled.p `
    font-size: 1rem;
    text-align: center;
`

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#1DA379' : '#423253')}
    ;
    // @media screen and (max-width: 768px) {
    //     padding: 300px 0;
    // }
`

export const InfoWrapper = styled.div `
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`

export const Column1 = styled.div `
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div `
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    
    // @media screen and (max-width: 768px) {
    //     display: none;
    // }
`

export const TextWrapper = styled.div `
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 10px;
        
`

export const TopLine = styled.p `
    color: #219A7F;
    font-size: 50px;
    padding-bottom: 20px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1 `
    color: black;
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#D0E678' : '#D0E678')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const Subtitle = styled.p `
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#D0E678' : "#D0E678")};
    @media screen and (max-width: 480px) {
        margin-bottom: 15px;
    }
`

export const BtnWrap = styled.div `
    display: flex;
    justify-content: flex-start;    
`
export const ImgWrap = styled.div `
    max-width: 555px;
    height: 100%;
    padding-top: 35px;
    padding-bottom: 35px;


`

export const Img = styled.img `
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;

`