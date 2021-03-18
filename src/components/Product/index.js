import React, {useEffect} from 'react';
import { Button } from '../ButtonElement'
import Icon3 from '../../images/svg-3.svg'

// import Video from '../../videos/Product.mp4'
import axios from 'axios';

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Subtitle,
    Heading,
    BtnWrap,
    Column2,
    ImgWrap,
    Img,
    VideoBg,
    VideoWrapper

} from './ProductElements'

const Product = ({
    primary,
    dark,
    dark2,
}) => {
    const Video = "https://ik.imagekit.io/87w1vdmbl9d/websitemp4/Product.mp4"
    return (
        <>
        <InfoContainer id="product" >
            <InfoWrapper>
                <InfoRow >
                    <Column1>
                    <TextWrapper>
                        <TopLine>
                        Product
                        </TopLine>
                        <Heading >
                        A Mobile Application for Consumers
                        </Heading>
                        <Subtitle >
                        Find product details, receive tailored analysis, partake in community feedback, and log your cannabis experience to improve your personal recommendation system.
                        </Subtitle>
                        <Heading >
                        A Data Dashboard for Businesses
                        </Heading>
                        <Subtitle >
                        Actionable insights, product forecasting, and user engagement through affiliate and push programs.
                        </Subtitle>
                        
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                        <VideoWrapper>
                            
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </VideoWrapper>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
            
        </>
    )
}

export default Product
