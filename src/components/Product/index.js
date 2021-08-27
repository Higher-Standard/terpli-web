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
    const Video = "https://terpliappassest.s3.us-west-1.amazonaws.com/Website/simulator_screenshot_76EDD78C-7A18-4516-9A35-AD1ED58E38A9.png"
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
                            <Img src={Video} />
                        </ImgWrap>
        
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
            
        </>
    )
}

export default Product
