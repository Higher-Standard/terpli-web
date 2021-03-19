import React from 'react';
import Logo  from "../../images/terplilogoforsite.svg"
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  FooterLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  BtnWrap,
} from './FooterElements';
// import {BtnWrap} from "../HeroSection/HeroElements";
import {Form} from "../Form/Form"

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        
          <BtnWrap>
                <Form type='email'></Form>
                  

                </BtnWrap>
        <SocialMedia>
          <SocialMediaWrap>
          <FooterLogo to ="/" onClick={toggleHome}>
                    <img src={Logo} height="150px" width="150px" alt="Logo" />
                    </FooterLogo>
            <WebsiteRights>Terpli © 2021 All Rights Reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/Terpli-105433821633512' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/terpli_io/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                target='_blank'
                aria-label='Twitter'
                href='https://twitter.com/terpli_io/'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/company/terpli/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
