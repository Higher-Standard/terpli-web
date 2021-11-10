import React from "react";
import EmailSentComponent from "./components/emailSent/EmailSentComponent";
import InputFormComponent from "./components/inputForm/InputFormComponent";
import "./SplashPage.scss";

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSent: false };

    this.setIsSent = this.setIsSent.bind(this);
  }

  setIsSent(value) {
    this.setState({
      isSent: value,
    });

    console.log("IsSent ", value);
  }

  render() {
    return (
      <div className="splash_container">
        <div className="background_images">
          <div className="top_left_square" />
          <div className="bottom_left_weed" />
          <div className="bottom_right_weed" />
        </div>
        <div className="content">
          <div className="logo_container">
            <div className="logo_name" />
            <div className="logo_background">
              <div className="logo_background1" />
            </div>
            <div className="logo" />
          </div>
          <div className="text_container">
            <span className="text_version">
              Version <span className="text_green">2.0</span> - Launching&nbsp;
              <span className="text_green">02/2022</span>
            </span>
            <span className="text_description">
              Personalizing Your Cannabis Experience Using Reviews, Cannabinoids
              &amp; Terpene Data!
            </span>
          </div>
          {this.isSent ? (
            <EmailSentComponent />
          ) : (
            <InputFormComponent setIsSent={this.setIsSent} />
          )}
          <div className="copyrights_container">
            <span className="copyrights_label">
              &copy; 2021 - 2022 Terpli, Inc. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SplashPage;
