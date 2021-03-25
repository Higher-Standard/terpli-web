import React from "react";
import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import {NavBtn, NavBtnLink} from "../Navbar/NavbarElements"
import {
 
    FormWrap,
    FormContent,
    FormElement,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    FormButton2,
    FormColumn,

} from '../Signin/SigninElements';
import Dropdown from 'react-dropdown';
import SignUp from "./SIgnUp";

const options = [
    'Investor', 'Cultivator', 'Manufacturer', 'Retailer','Researcher'
  ];
  const defaultOption = options[0];

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div >
        <NavBtn>
            <NavBtnLink onClick={this.onOpenModal}>Contact Us
            </NavBtnLink>
            </NavBtn>
        <Modal    classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }} 
        animationDuration={800}
        open={open} onClose={this.onCloseModal}>
         

                        {/* <FormElement onSubmit={this.handleSubmitInvestor}>
                            <FormH1>Contact Form</FormH1>
                            <FormColumn>
                                <FormLabel htmlFor="name">Name</FormLabel>
                                <FormInput value={this.state.name} name='name' onChange={this.handleChange}></FormInput>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <FormInput value={this.state.email} name='email' onChange={this.handleChange}></FormInput>
                            </FormColumn>
                            <Dropdown className = "dropdown" options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                            <FormLabel htmlFor="message">Message</FormLabel>
                            {/* <FormMessageInput value={this.state.message} name='message' onChange={this.handleChange} >
                            </FormMessageInput> */}
                            {/* <textarea className = "formInput"></textarea>
                            <FormButton >Submit</FormButton>
                        </FormElement> */} 
                        <SignUp/>

        </Modal>
      </div>
    );
  }
}

export default App
