import React, {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState
  } from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SideBarRoute} from "./SideBarElements";
import Logo  from "../../images/terplilogoforsite.svg"


const Sidebar = ({isOpen, toggle}) => {
    const modalRef = useRef();
    return (
        <>

        <SidebarContainer isOpen ={isOpen} onClick ={toggle}>
          
            <SidebarWrapper>
                <SidebarMenu>
            <Icon onClick = {toggle}>
           
                       
                       <img src={Logo} height="150px" width="150px" alt="Logo" />
                     
                     
                <CloseIcon/>
            </Icon >
         
                    <SidebarLink to="about" onClick = {toggle}>
                        The Problem
                    </SidebarLink>
                    <SidebarLink to="discover" onClick = {toggle}>
                        Development
                    </SidebarLink>
                    <SidebarLink to="solution" onClick = {toggle}>
                        Solution
                    </SidebarLink>
                    <SidebarLink to="operation" onClick = {toggle}>
                        Operation
                    </SidebarLink>
                    <SidebarLink to="product" onClick = {toggle}>
                        Product
                    </SidebarLink>
                    <SidebarLink to="impact" onClick = {toggle}>
                        Impact
                    </SidebarLink>
                    <SidebarLink to="team" onClick = {toggle}>
                        Team
                    </SidebarLink>
                    <SidebarLink to="content-contact" onClick = {toggle}>
                            Contact Us
                    </SidebarLink>
                </SidebarMenu>
                    {/* <SideBtnWrap>
                    <SideBarRoute >
               Contact Us
                    </SideBarRoute>
                </SideBtnWrap>
                  */}
            </SidebarWrapper>
        </SidebarContainer>
        
       
                    {/* <Modal ref={modalRef}> */}
        {/* <Form type='investor' ></Form> */}
    
     
        
       </> 
    )
}


export default Sidebar
