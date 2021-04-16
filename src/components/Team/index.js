import React from 'react';
import Peter from "../../images/petersmall.png"
import Alex from "../../images/alex.png"
import Ryan from "../../images/ryan.jpeg"
import Oliver from "../../images/Oliver.jpeg"
import Mike from "../../images/Mike.jpeg"
import James from "../../images/James.jpeg"
import Alfred from "../../images/AlfredMiranda.jpeg"
import Adrian from "../../images/Adrian.jpeg"
import Peter1 from "./Peter"
import Ryan1 from "./Ryan"
import Alex1 from "./Alex"
import Oliver1 from "./Oliver"
import {
    SocialIconLink
  } from '../Footer/FooterElements';
import {
    FaLinkedin
  } from 'react-icons/fa';

import {
  
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    ServicesWrap,
    ServicesWrapper2,
    ServicesCard2,
    ServicesH3,
    ServicesH4,
    ServicesIcon1,
} from './TeamElements'

const Team = () => {
    return (

        <ServicesContainer id="team">
            <ServicesWrap>
            
                    <ServicesH1 >Our Team Members</ServicesH1>
                <ServicesCard>
                    <ServicesIcon1 src ={Peter}/>
                    <SocialIconLink href='https://www.linkedin.com/in/kasperpeter/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
                        </SocialIconLink>
                    <ServicesH2>
                        <Peter1/>
                    </ServicesH2>
                    <ServicesP>Founder/CEO</ServicesP>
                    
                    </ServicesCard>
                    <ServicesH3>
                    Key Hires
                    </ServicesH3>
                    
            <ServicesWrapper style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1, flexWrap: 'wrap'
        }}>
                <ServicesCard2>
                    <ServicesIcon src ={Alex} />
                    <SocialIconLink href='https://www.linkedin.com/in/alexanderjahani/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
                        </SocialIconLink>
                    <ServicesH2>
                        <Alex1></Alex1>
                    </ServicesH2>
                    <ServicesP>Head of UX and Design</ServicesP>
                    </ServicesCard2>
                <ServicesCard2>
                    <ServicesIcon src ={Ryan} />
                    <SocialIconLink href='https://www.linkedin.com/in/ryangbraun/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
                        </SocialIconLink>
                    <ServicesH2>
                        <Ryan1/>
                    </ServicesH2>
                    <ServicesP>Front-End Engineer</ServicesP>
                </ServicesCard2>
                <ServicesCard2>
                    <ServicesIcon1 src ={Oliver} />
                    <SocialIconLink href='https://www.linkedin.com/in/oliver-bigelow-b623581a5/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
                        </SocialIconLink>
                    <ServicesH2>
                        <Oliver1/>
                    </ServicesH2>
                    <ServicesP>Back-End Engineer</ServicesP>
                    
                </ServicesCard2>
            </ServicesWrapper >
            <ServicesH4 style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1, flexWrap: 'wrap'
        }}>
                    Advisory Team
                </ServicesH4>
            <ServicesWrapper2
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: 1, flexWrap: 'wrap'
              }}
            >
                <ServicesCard>
                    <ServicesIcon src ={Mike} />
                    <SocialIconLink href='https://www.linkedin.com/in/mikesiebold/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
                        </SocialIconLink>
                    <ServicesH2>Mike Siebold</ServicesH2>
                    <ServicesP>Senior Advisor</ServicesP>
                    </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src ={James} />
                    <SocialIconLink href='https://www.linkedin.com/in/jamesmckparker/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
                        </SocialIconLink>
                    <ServicesH2>James Parker</ServicesH2>
                    <ServicesP>Senior Advisor</ServicesP>
                    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src ={Alfred} />
                    <SocialIconLink href='https://www.linkedin.com/in/alfredmiranda/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
                        </SocialIconLink>
                    <ServicesH2>Alfred Miranda</ServicesH2>
                    <ServicesP>Senior Advisor</ServicesP>
                    
                    </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src ={Adrian} />
                    <SocialIconLink href='https://www.linkedin.com/in/adriancoroian/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
                        </SocialIconLink>
                    <ServicesH2>Adrian Coroian</ServicesH2>
                    <ServicesP>Senior Advisor</ServicesP>
                    
                     </ServicesCard>
            </ServicesWrapper2>
            </ServicesWrap>
            
            
        </ServicesContainer>
        
    )
}

export default Team
