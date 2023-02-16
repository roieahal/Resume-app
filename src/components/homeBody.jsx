import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyImage from "../cvImg4.jpg";
import MyImage2 from "../cvImgGirl.jpg";
import Custom from "../costum.jpg";
import CustomEdit from "./customEdit";
class HomeBody extends Component {
  state = {};
  render() {
    return (
      <body className="body">
        <div className="examples">
          <p>examples & option</p>
        </div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" id="allImgWrap">
              <img class="imgSty" src={MyImage} alt="First slide" />
              <div className="image-text">
                {" "}
                <Link to="/start2">
                  <button
                    class="cssbuttons-io-button"
                    onClick={() => this.props.handleGender("m")}
                  >
                    {" "}
                    Men style
                    <div class="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
            <div class="carousel-item" id="allImgWrap">
              <img class="imgSty" src={MyImage2} alt="Second slide" />
              <div className="image-text">
                {" "}
                <Link to="/start2">
                  <button
                    class="cssbuttons-io-button"
                    onClick={() => this.props.handleGender("w")}
                  >
                    {" "}
                    Women style
                    <div class="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
            <div class="carousel-item" id="allImgWrap">
              <img class="imgSty" src={Custom} alt="Third slide" />
              <div className="image-text">
                {" "}
                <Link to="/start3">
                  <button
                    class="cssbuttons-io-button"
                    onClick={() => this.props.handleGender("m")}
                  >
                    {" "}
                    custom style
                    <div class="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="arrowHetz">
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>

        <i class="bi bi-arrow-left"></i>
      </body>
    );
  }
}

export default HomeBody;

//!=============================================
