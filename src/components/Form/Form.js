import React, { Component } from 'react'
import axios from 'axios'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


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

const options = [
    'Investor', 'Cultivator', 'Manufacturer', 'Retailer','Researcher'
  ];
  const defaultOption = options[0];

export class Form extends Component {
    
    constructor(props) {
        super(props);
        // if the type of form is email than do this, if its investor do this ...
        {
            if (this.props.type === 'investor') {
                this.state = { email: '', name: '', message: '' };

            } else if (this.props.type === 'email') {
                this.state = { email: '' };
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitEmail = this.handleSubmitEmail.bind(this);
        this.handleSubmitInvestor = this.handleSubmitInvestor.bind(this);

    }

    // when the input field changes it also changes the state
    handleChange(e) {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    // when submitting an email form
    handleSubmitEmail(e) {
        axios({
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Referrer-Policy": "unsafe-url"
            },
            method: 'post',
            // this is the url for webnode db
            url: 'http://ec2-18-191-77-143.us-east-2.compute.amazonaws.com:8002/api/email/new',
            data: this.state
        })
            .then(res => {
                console.log(res)
                this.setState({ email: '' })
                if (res.data.errors) {
                    alert(JSON.stringify(res.data.errors[0].message))

                } else {
                    alert('Your email has been put on the early access list, Thank You!')
                }
            })
            .catch(err => {
                alert(err)

            })
        e.preventDefault();
    }


    // when submiting an investr form
    handleSubmitInvestor(e) {
        axios({
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Referrer-Policy": "unsafe-url"
            },
            method: 'post',
            // url for aws webnode db
            url: 'http://ec2-18-191-77-143.us-east-2.compute.amazonaws.com:8002/api/investor/new',
            data: this.state
        })
            .then(res => {
                console.log(res)
                this.setState({ email: '', name: '', subject: '', phoneNumber: '', message: '' })
                if (res.data.errors) {
                    alert(JSON.stringify(res.data.errors[0].message))

                } else {
                    alert('Your Inquiry has been sent, we will contact you shortly')
                }
            })
            .catch(err => {
                alert(err)

            })
        e.preventDefault();
    }

    formatForm() {
        console.log(this.state)
        if (this.props.type === 'email') {
            return (

                // <form onSubmit={this.handleSubmitEmail}>
                //     <label htmlFor="email">Email:</label>
                //     <input value={this.state.email} type="text" id="email" name="email" onChange={this.handleChange} />
                //     <input type="submit" value="Submit" />
                // </form>
                <form onSubmit={this.handleSubmitEmail}>
                    <FormInput placeholder='Email' value={this.state.email} name='email' onChange={this.handleChange}></FormInput>
                    <FormButton2>Submit</FormButton2>
                    
                </form>
            )
        } else if (this.props.type === 'investor') {
            
            return (
                

                <FormWrap>
                    {/* <img src={Logo} style={{ marginLeft: '30px', paddingBottom: '20px', marginTop: '80px' }} height="150px" width="150px" alt="Logo" /> */}
                    <FormContent>

                        <FormElement onSubmit={this.handleSubmitInvestor}>
                          
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
                            <textarea className = "formInput"></textarea>
                            <FormButton >Submit</FormButton>
                        </FormElement>

                    </FormContent>
                </FormWrap>


                // <input value={this.state.email} type="text" id="email" name="email" onChange={this.handleChange} />
                // <label htmlFor="name">Name:</label>
                // <input value={this.state.name} type="text" id="name" name="name" onChange={this.handleChange} />
                // <label htmlFor="message">Message:</label>
                // <input value={this.state.message} type="textarea" id="message" name="message" onChange={this.handleChange} />
                // <input type="submit" value="Submit" />
            )
        }
    }
    
    render() {
        return this.formatForm()
    }
}


export default Form