import React from 'react';
import Icon1 from '../../images/impact-1.jpg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import Alex from '../Alex/Portfolio'
import Image1 from '../../images/consumers.jpg'
import Image2 from '../../images/retailers.jpg'
import Image3 from '../../images/brands.jpg'
// import Video2 from '../../videos/retailers.mp4'
// import Video3 from '../../videos/brands.mp4'
import {
  Card,
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    VideoBg,
    Image,
} from './ServicesElements'

// const Video = "https://ik.imagekit.io/87w1vdmbl9d/websitemp4/consumers.mp4"
const Video2 = "https://ik.imagekit.io/87w1vdmbl9d/websitemp4/retailers.mp4"
const Video3 = "https://ik.imagekit.io/87w1vdmbl9d/websitemp4/brands.mp4"
         
const Impact = () => {
    return (
        // <ServicesContainer id="impact">
        //     <ServicesH1>Impact</ServicesH1>
   
        //     <Alex id="content-desktop"/>
           
        //     <ServicesWrapper id="content-mobile">
        //         <ServicesCard>
        //             {/* <ServicesIcon src ={Icon1} /> */}
        //             <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        //             <ServicesH2>Consumers</ServicesH2>
        //             <ServicesP>Recommendations from Local Retailers</ServicesP>
        //             <ServicesP>Deeper Product Insights from Chemical Analysis</ServicesP>
        //             <ServicesP>Leverage Community Reviews</ServicesP>
        //             <ServicesP>Sumbit Review for Personalized Recommendations</ServicesP>
        //         </ServicesCard>
        //         <ServicesCard>
        //             {/* <ServicesIcon src ={Icon2} /> */}
        //             <VideoBg autoPlay loop muted src={Video2} type='video/mp4'/>
        //             <ServicesH2>Retailers</ServicesH2>
        //             <ServicesP>Marketing on Mobile-App for New Products and Promotions</ServicesP>
        //             <ServicesP>Elevated Budtender Community</ServicesP>
        //             <ServicesP>Targeted Customer Loyalty</ServicesP>
        //             <ServicesP>Better Patient outcome with Expansive Product Reviews</ServicesP>
        //         </ServicesCard>
        //         <ServicesCard>
        //             {/* <ServicesIcon src ={Icon3} /> */}
        //             <VideoBg autoPlay loop muted src={Video3} type='video/mp4'/>
        //             <ServicesH2>Brands</ServicesH2>
        //             <ServicesP>Submit and Access Lab Testing Data</ServicesP>
        //             <ServicesP>Display Deepr Product Info for Customers</ServicesP>
        //             <ServicesP>Data-Driven Insights After the Point of Sale</ServicesP>
        //             <ServicesP>Increased Engagement and Revenue with Affiliate and Push Program</ServicesP>
        //         </ServicesCard>
        //     </ServicesWrapper>
        // </ServicesContainer>
        <ServicesContainer id="operation ">
                <ServicesH1>Impact</ServicesH1>
            <ServicesWrapper>
                <div id="content-desktop">
            <Alex id="content-desktop"/>
            </div>
                </ServicesWrapper>
                <ServicesContainer id="content-mobile" >
      <ServicesWrapper >
        <ServicesCard>

                {/* <VideoBg autoPlay playsinline loop muted src={Video} type='video/mp4'/> */}
                <Image src={Image1} />
         
           
       
          <ServicesH2>Consumers</ServicesH2>
          {/* <ServicesIcon src={Icon3} /> */}
          <ServicesP>Recommendations from Local Retailers</ServicesP>
        //             <ServicesP>Deeper Product Insights from Chemical Analysis</ServicesP>
        //             <ServicesP>Leverage Community Reviews</ServicesP>
        //             <ServicesP>Sumbit Review for Personalized Recommendations</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <Image src={Image2} />
        {/* <VideoBg autoPlay playsinline loop muted src={Video2} type='video/mp4'/> */}
           
          <ServicesH2>Retailers</ServicesH2>
          <ServicesP>Marketing on Mobile-App for New Products and Promotions</ServicesP>
        //             <ServicesP>Elevated Budtender Community</ServicesP>
        //             <ServicesP>Targeted Customer Loyalty</ServicesP>
        //             <ServicesP>Better Patient outcome with Expansive Product Reviews</ServicesP>
          {/* <ServicesIcon src={Icon2} /> */}
        </ServicesCard>
      </ServicesWrapper>
      <ServicesWrapper id="content-mobile">
        <ServicesCard>
        {/* <VideoBg autoPlay playsinline loop muted src={Video3} type='video/mp4'/> */}
        <Image src={Image3} />
          <ServicesH2>Brands</ServicesH2>
          <ServicesP>Submit and Access Lab Testing Data</ServicesP>
        //             <ServicesP>Display Deepr Product Info for Customers</ServicesP>
        //             <ServicesP>Data-Driven Insights After the Point of Sale</ServicesP>
        //             <ServicesP>Increased Engagement and Revenue with Affiliate and Push Program</ServicesP>
          {/* <ServicesIcon src={Icon1} /> */}
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

export default Impact