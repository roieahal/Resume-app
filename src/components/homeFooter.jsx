import "../homeStyle.css";

const HomeFooter = () => {
  return (
    <div class="container2">
      <footer class="row">
        <div class="sozial col-xs-12 col-sm-6 col-sm-push-6">
          <ul class="row">
            <li class="col-xs-6 col-sm-2" id="log">
              <a href="#">
                <img
                  class="logo  opacity-75"
                  src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-128.png"
                />
              </a>
            </li>

            <li class="col-xs-6 col-sm-2" id="log">
              <a href="#">
                <img
                  class="logo opacity-75"
                  src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-128.png"
                />
              </a>
            </li>
            <li class="col-xs-6 col-sm-2" id="log">
              <a href="#">
                <img
                  class="logo opacity-75"
                  src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-128.png"
                />
              </a>
            </li>
            <li class="col-xs-6 col-sm-2" id="log">
              <a href="#">
                <img
                  class="logo opacity-75"
                  src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_google_plus-128.png"
                />
              </a>
            </li>
          </ul>
        </div>

        <div class="impressum col-xs-12 col-sm-3 col-sm-pull-6 ms-5 mr">
          <div class="btn-group ms-5" role="group" aria-label="Third group">
            <button
              class="btn btn-outline-dark border-0 mt-2  ms-5 opacity-50 "
              type="submit"
            >
              Need help?
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeFooter;
