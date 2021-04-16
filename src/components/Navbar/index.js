import React, {useState, useEffect} from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import {IconContext} from "react-icons/lib"
import Logo  from "../../images/Terpli_logo.png"
import App from '../Modal/index'




const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false);
        }
    };

    useEffect (() => {
        window.addEventListener('scroll',changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
        <IconContext.Provider value = {{color: '#C2E531'}}>
            <Nav scrollNav ={scrollNav}>

                <NavbarContainer>
                    <NavLogo to ="/" onClick={toggleHome}>
                       
                    <img src={Logo} height="65px" width="150px" alt="Logo" />
                  
                    </NavLogo>
                    
                    
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true}
                            duration={500}
                            spy={true} 
                            exact = 'true' 
                            offset={-80}
                            activeClass="active" //not sure why this isn't working

                           >
                              Problem
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="science"
                                  smooth={true}
                                  duration={500}
                                  spy={true} 
                                  exact = 'true' 
                                  offset={-80}
                                  activeClass="active" //not sure why this isn't working
                            >
                                Science
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="solution"
                                  smooth={true}
                                  duration={500}
                                  spy={true} 
                                  exact = 'true' 
                                  offset={-80}
                                  activeClass="active" //not sure why this isn't working
                            >
                                Solution
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="operation"
                                  smooth={true}
                                  duration={500}
                                  spy={true} 
                                  exact = 'true' 
                                  offset={-80}
                                  activeClass="active" //not sure why this isn't working
                            >
                                 Operation
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="product"
                                  smooth={true}
                                  duration={500}
                                  spy={true} 
                                  exact = 'true' 
                                  offset={-80}
                                  activeClass="active" //not sure why this isn't working
                            >
                                 Product
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="impact"
                                  smooth={true}
                                  duration={500}
                                  spy={true} 
                                  exact = 'true' 
                                  offset={-80}
                                  activeClass="active" //not sure why this isn't working
                            >
                                 Impact
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="team"
                                  smooth={true}
                                  duration={500}
                                  spy={true} 
                                  exact = 'true' 
                                  offset={-80}
                                  activeClass="active" //not sure why this isn't working
                            >
                                 Team
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                            <App></App>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
