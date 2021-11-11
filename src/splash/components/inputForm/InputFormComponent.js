import axios from "axios";
import React from "react";
import "./InputFormComponent.scss";

class InputFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", isBeta: false };

    this.changeEmail = this.changeEmail.bind(this);
    this.changeIsBeta = this.changeIsBeta.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  changeIsBeta(event) {
    this.setState({
      isBeta: event.target.checked,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const baseUrl = "https://2ayewygezf.execute-api.us-west-1.amazonaws.com/";
      const config = {
        method: "POST",
        url: `${baseUrl}/test/new/signup`,
        data: {
          email: this.state.email,
          beta: this.state.isBeta,
        },
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
        },
      };
      const response = await axios(config);
      this.props.setResponseStatus(response.statusText);
    } catch (error) {
      this.props.setResponseStatus(error.response?.statusText || "500");
    } finally {
      this.props.setIsSubmitted(true);
    }
  }

  render() {
    return (
      <div className="splash_input_form">
        <form onSubmit={this.handleSubmit}>
          <div className="text_input_container">
            <div className="text_input_box" />
            <input
              className="text_input"
              type="email"
              placeholder="Notify me, I want to weed smarter!"
              value={this.state.email}
              onChange={this.changeEmail}
            />
            <span className="text_input_label">EMAIL ADDRESS</span>
            <button className="text_input_icon" type="submit" />
          </div>
          <div className="checkbox_container">
            <input
              className="checkbox_input"
              type="checkbox"
              value={this.state.isBeta}
              onChange={this.changeIsBeta}
            />
            <span className="checkbox_label">
              Sign me up to Beta Test the new App (Free)
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default InputFormComponent;
