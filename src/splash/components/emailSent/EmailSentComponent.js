import "./EmailSentComponent.scss";

function EmailSentComponent() {
  return (
    <div className="splash_email_sent">
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
    </div>
  );
}

export default EmailSentComponent;
