import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SideBarRoute} from "./SideBarElements";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen ={isOpen} onClick ={toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon/>
            </Icon >
            <SidebarWrapper>
                <SidebarMenu>
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
                </SidebarMenu>
                <SideBtnWrap>
                    <SideBarRoute to = "/signin">
               Contact Us
                    </SideBarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
