import "./EmailSentComponent.scss";

function EmailSentComponent() {
  return (
    <div className="splash_email_sent">
      <div className="text_input_container">
        <div className="text_input_box" />
        <span className="text_input">We will notify close to launch!</span>
        <span className="text_input_label">EMAIL ADDRESS RECIEVED!</span>
        <button className="text_input_icon" type="submit" />
      </div>
    </div>
  );
}

export default EmailSentComponent;
