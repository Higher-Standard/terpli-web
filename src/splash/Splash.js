import React from "react";
import "./Splash.scss";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", isChecked: false };

    this.changeEmail = this.changeEmail.bind(this);
    this.changeIsChecked = this.changeIsChecked.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  changeIsChecked(event) {
    this.setState({
      isChecked: event.target.checked,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const payload = {
      email: this.state.email,
      isChecked: this.state.isChecked,
    };

    console.log("Send ", JSON.stringify(payload));
  }

  render() {
    return (
      <div className="container">
        <div className="background_images">
          <div className="top_left_square" />
          <div className="bottom_left_weed" />
          <div className="bottom_right_weed" />
        </div>
        <div className="content">
          <div className="content_logo">
            <div className="logo_name" />
            <div className="logo_background">
              <div className="logo_background1" />
            </div>
            <div className="logo" />
          </div>
          <div className="content_text">
            <span className="version_label">
              Version <span className="text_green">2.0</span> - Launching&nbsp;
              <span className="text_green">02/2022</span>
            </span>
            <span className="description">
              Personalizing Your Cannabis Experience Using Reviews, Cannabinoids
              &amp; Terpene Data!
            </span>
          </div>
          <div className="content_input">
            <form onSubmit={this.handleSubmit}>
              <div className="text_input">
                <div className="text_input1" />
                <input
                  className="text_input2"
                  type="email"
                  placeholder="Notify me, I want to weed smarter!"
                  value={this.state.email}
                  onChange={this.changeEmail}
                />
                <span className="text_input3">EMAIL ADDRESS</span>
                <button className="text_input4" type="submit" />
              </div>
              <div className="checkbox_input">
                <span className="checkbox_input1">
                  Sign me up to Beta Test the new App (Free)
                </span>
                <input
                  className="checkbox_input2"
                  type="checkbox"
                  value={this.state.isChecked}
                  onChange={this.changeIsChecked}
                />
              </div>
            </form>
          </div>
          <div className="content_footer">
            <span className="copyrights">
              &copy; 2021 - 2022 Terpli, Inc. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
