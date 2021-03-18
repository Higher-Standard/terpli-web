import React from 'react'
// import Video from '../../videos/video-3.mp4'
import Navbar from '../Navbar'
import {HeroBg, VideoBg} from './ResearchElements'
import {
    Container,
    FormWrap,
    FormContent,
    ResearchH1,
    ResearchP
    
} from './ResearchElements'

const Research = () => {
    const Video = 'https://ik.imagekit.io/87w1vdmbl9d/websitemp4/video-3.mp4'
    return (
        <>
        <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
        <Container>
            <Navbar></Navbar>
            <FormWrap>
                <FormContent>
                    <ResearchH1>
                        Customer Discovery
                    </ResearchH1>
                    <ResearchP>
                    We understand little about how cannabis affects us.Among the industry’s many problems, lack of research on product effects is high on the list. Recent efforts are focusing primarily on medicinal properties, with minimal emphasis on the recreational market.
                    </ResearchP>
                    
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default Research
