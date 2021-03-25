import React from 'react';
import Artet from "../../images/artet_logo.jpeg"
import Blaze from "../../images/blazebackground.png"
import Cropped from "../../images/cropped-logo.png"
import Gbadge from "../../images/gbadge.png"
import Raw from "../../images/RawGarden-green.jpeg"
import Confident from "../../images/confident.jpeg"
import Treez from "../../images/treezbackground2.png"
import Pure from "../../images/pure-beauty-logo.jpeg"

import {

    ServicesContainer,
    ServicesH1,

    ServicesCard,
    ServicesIcon,

    ServicesWrap,
    ServicesWrapper2,

} from './SponsorsElements'

const Sponsors = () => {
    return (

        <ServicesContainer id="sponsors">
            <ServicesWrap>
            
                    <ServicesH1 >Our Partners</ServicesH1>
                
                   
                    
            
            {/* <ServicesH4 style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1, flexWrap: 'wrap'
        }}>
                    Advisory Team
                </ServicesH4> */}
            <ServicesWrapper2
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: 1, flexWrap: 'wrap'
              }}
            >
                <ServicesCard>
                    <ServicesIcon src ={Raw} />
                    
              
                    </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src ={Confident} />
                    
                    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src ={Treez} />
                    {/* <SocialIconLink href='https://www.linkedin.com/in/alfredmiranda/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
                        </SocialIconLink>
                    <ServicesH2>Alfred Miranda</ServicesH2>
                    <ServicesP>Senior Advisor</ServicesP>
                     */}
                    </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src ={Pure} />
                    {/* <SocialIconLink href='https://www.linkedin.com/in/adriancoroian/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
                        </SocialIconLink>
                    <ServicesH2>Adrian Coroian</ServicesH2>
                    <ServicesP>Senior Advisor</ServicesP> */}
                    
                     </ServicesCard>
            </ServicesWrapper2>
            <ServicesWrapper2
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: 1, flexWrap: 'wrap'
              }}
            >
                <ServicesCard>
                    <ServicesIcon src ={Gbadge} />
                    
              
                    </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src ={Cropped} />
                    
                    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src ={Blaze} />
                    {/* <SocialIconLink href='https://www.linkedin.com/in/alfredmiranda/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
                        </SocialIconLink>
                    <ServicesH2>Alfred Miranda</ServicesH2>
                    <ServicesP>Senior Advisor</ServicesP>
                     */}
                    </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src ={Artet} />
                    {/* <SocialIconLink href='https://www.linkedin.com/in/adriancoroian/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
                        </SocialIconLink>
                    <ServicesH2>Adrian Coroian</ServicesH2>
                    <ServicesP>Senior Advisor</ServicesP> */}
                    
                     </ServicesCard>
            </ServicesWrapper2>
            
            </ServicesWrap>
            
            
        </ServicesContainer>
        
    )
}

export default Sponsors
