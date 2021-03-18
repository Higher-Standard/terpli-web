import React from 'react';
import Portfolio from '../Portfolio/Portfolio'
import Icon1 from '../../images/labdata1.jpg'
import Icon2 from '../../images/labdata2.jpg'
import Icon3 from '../../images/labdata.jpg'
import Icon4 from '../../images/products.jpg'
// import Video from '../../videos/labdata.mp4'
// import Video2 from '../../videos/products.mp4'
// import Video3 from '../../videos/sale.mp4'
// import Video4 from '../../videos/generate2.mp4'

import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesH2,
    HeroBg,
    VideoBg
    

} from './ServicesElements'
const Video = "https://ik.imagekit.io/87w1vdmbl9d/websitemp4/labdata.mp4"
const Video2 = "https://ik.imagekit.io/87w1vdmbl9d/websitemp4/products.mp4"
const Video3 = "https://ik.imagekit.io/87w1vdmbl9d/websitemp4/sale.mp4"
const Video4 = "https://ik.imagekit.io/87w1vdmbl9d/websitemp4/generate2.mp4"
    
const Services = () => {
    return (
        
        <ServicesContainer id="operation ">
                <ServicesH1 >How We Operate</ServicesH1>
            <ServicesWrapper>
                <div id="content-desktop">
                <Portfolio/>
                </div>
                </ServicesWrapper>
                <ServicesContainer id="content-mobile" >
      <ServicesWrapper >
        <ServicesCard>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
           
       
          <ServicesH2>
              
              We Analyze Lab Data...</ServicesH2>
          {/* <ServicesIcon src={Icon3} /> */}
          
        </ServicesCard>
        <ServicesCard>
        <VideoBg autoPlay loop muted src={Video2} type='video/mp4'/>
           
          <ServicesH2>Then Provide Product Insights...</ServicesH2>
          {/* <ServicesIcon src={Icon2} /> */}
        </ServicesCard>
      </ServicesWrapper>
      <ServicesWrapper id="content-mobile">
        <ServicesCard>
        <VideoBg autoPlay loop muted src={Video3} type='video/mp4'/>
           
          <ServicesH2>...and Incentivize Reviews</ServicesH2>
          {/* <ServicesIcon src={Icon1} /> */}
        </ServicesCard>
        <ServicesCard>
        <VideoBg autoPlay loop muted src={Video4} type='video/mp4'/>
           
          <ServicesH2>To Generate Consumer Insights!</ServicesH2>
          {/* <ServicesIcon src={Icon4} /> */}
        </ServicesCard>
        {/* <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5% cash back.
          </ServicesP>
        </ServicesCard> */}
      </ServicesWrapper>
      </ServicesContainer>
        </ServicesContainer>

        


    )
}

export default Services
