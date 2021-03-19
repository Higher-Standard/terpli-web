import React, {useState} from 'react'
// import Video from '../../videos/video-3.mp4'
import { Image, HeroContainer, HeroBg, VideoBg, BtnWrap, HeroContent, HeroH1, HeroP, HeroP2, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'

import Form from '../Form/Form.js';



const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () =>
        setHover(!hover)
    const Video = "https://ik.imagekit.io/87w1vdmbl9d/websitemp4/video-3.mp4"
    return (
        <HeroContainer id = "home">
            <Image></Image>
            {/* <HeroBg>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg> */}
            <HeroContent>
                <HeroH1>Clarifying Cannabis</HeroH1>
                <HeroP>
                Delivering Transparency for Cannabis Consumers
                </HeroP>
                <HeroP2>
                Sign up for early access and pre-release updates!
                </HeroP2>
                <HeroBtnWrapper>
                <BtnWrap>
                <Form type='email'></Form>

                </BtnWrap>

                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
