import React from "react";
import "./SubmittedFormComponent.scss";

class SubmittedFormComponent extends React.Component {
  render() {
    return (
      <div className="splash_submitted_form">
        {this.props.responseStatus === "201" ? (
          <div className="text_input_container">
            <div className="text_input_box success" />
            <span className="text_input">We will notify close to launch!</span>
            <span className="text_input_label success">EMAIL ADDRESS RECIEVED!</span>
            <button className="text_input_icon success" type="submit" />
          </div>
        ) : this.props.responseStatus === "200" ? (
          <div className="text_input_container">
            <div className="text_input_box warning" />
            <span className="text_input">
              Thanks for the support! Already got you :)
            </span>
            <span className="text_input_label warning">EMAIL ALREADY SUBMITTED</span>
            <button className="text_input_icon warning" type="submit" />
          </div>
        ) : (
          <div className="text_input_container">
            <div className="text_input_box error" />
            <span className="text_input">
              Hmmm something&apos;s off with your email
            </span>
            <span className="text_input_label error">EMAIL ADDRESS ISSUE</span>
            <button className="text_input_icon error" type="submit" />
          </div>
        )}
      </div>
    );
  }
}

export default SubmittedFormComponent;
