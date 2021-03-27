import React, { Component } from 'react'
import axios from 'axios'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
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
            url: 'https://api.terpli.io/api/email/new',
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
    formatForm() {
        console.log(this.state)
        if (this.props.type === 'email') {
            return (
                <form onSubmit={this.handleSubmitEmail}>
                    <FormInput placeholder='Email' value={this.state.email} name='email' onChange={this.handleChange}></FormInput>
                    <FormButton2>Submit</FormButton2>
                </form>
            )
        }
    }
    render() {
        return this.formatForm()
    }
}
export default Form