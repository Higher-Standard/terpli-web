import styled from 'styled-components'

export const ServicesContainer = styled.div `
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #4B3562;
    padding-bottom: 45px;
    @media screen and (max-width: 786px) {
        height: 1300px;
        padding-top: 50px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
        padding-bottom: 0px;
        padding-top: 0px;
    }
`

export const ServicesWrapper = styled.div `
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;
   
    
    
    // align-items: center;
    // grid-gap: 16px;
    // padding: 0 50px;

    
`
export const ServicesCard = styled.div `
background: #fff;
color: #28183B;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
height: 340px;
width: 340px;
padding: 50px;
margin-top: 50px;
margin-right: 25px;
margin-left: 25px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
transition: all 0.2s ease-in-out;

&:hover {
  transform: scale(1.02);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
    @media screen and (max-width: 768px) {
      height: 250px;
      width: 250px;
      margin-top: 20px;
      background-color: #30204E;
    }
`

export const ServicesIcon = styled.img `


`
export const ServicesH1 = styled.h1 `
    font-size: 50px;
    color: #D0E678;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    

    @media screen and (max-width: 768px) {
        font-size: 28px;
        margin-top: 50px;
        
    }
`
export const OfferH1 = styled.h1 `
    font-size: 50px;
    color: #D0E678;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    

    @media screen and (max-width: 480px) {
        font-size: 2rem;

    }
`
export const ServicesH2 = styled.h2 `
text-align: center;
font-size: 14px;
color: #28183B;

@media screen and (max-width: 768px) {
    font-size: 14px;
    color: #E2CDFF;
    padding-top: 40px;
    

`
    


export const ServicesP = styled.p`
color: #E2CDFF;
  font-size: 32px;
  text-align: center;
`;

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
height: 100%;
width: 250px;
margin-top: -50px;

    -o-object-fit: cover;
    object-fit: cover;
    background-size: cover;
    background: #232a34;


`