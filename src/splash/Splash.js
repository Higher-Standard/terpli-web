import "./Splash.scss";

function Splash() {
  return (
    <div class="container">
      <div class="background_images">
        <div class="top_left_square" />
        <div class="bottom_left_weed" />
        <div class="bottom_right_weed" />
      </div>
      <div class="content">
        <div class="content_logo">
          <div class="logo_name" />
          <div class="logo_background">
            <div class="logo_background1" />
          </div>
          <div class="logo" />
        </div>
        <div class="content_text">
          <span class="version_label">
            Version <span class="text_green">2.0</span> - Launching&nbsp;
            <span class="text_green">02/2022</span>
          </span>
          <span class="description">
            Personalizing Your Cannabis Experience Using Reviews, Cannabinoids
            &amp; Terpene Data!
          </span>
        </div>
        <div class="content_input">
          <div class="text_input">
            <div class="text_input1" />
            <span class="text_input2">
              <input
                type="email"
                id="email"
                placeholder="Notify me, I want to weed smarter!"
                required
              />
            </span>
            <span class="text_input3">EMAIL ADDRESS</span>
            <div class="text_input4" />
          </div>
          <div class="checkbox_input">
            <span class="checkbox_input1">
              Sign me up to Beta Test the new App (Free)
            </span>
            <div class="checkbox_input2" />
          </div>
        </div>
        <div class="content_footer">
          <span class="copyrights">
            &copy; 2021 - 2022 Terpli, Inc. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Splash;
