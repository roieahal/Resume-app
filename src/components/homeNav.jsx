import React, { Component } from "react";
import "../homeStyle.css";
import { Link } from "react-router-dom";
class HomeNav extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page">
                  Home
                </a>
              </li>

              <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="/ResumeApp.jsx"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Styles
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-dark"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                      id="stylesWrap"
                    >
                      <li>
                        <Link
                          to="/start2"
                          style={{
                            textDecoration: "none",
                            marginLeft: "2vw",
                          }}
                        >
                          <button
                            class="dropdown-item pr-5"
                            style={{
                              paddingLeft: "9px",
                              // marginLeft: "30px",
                            }}
                            onClick={() => this.props.handleGender("w")}
                          >
                            Women style
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/start2"
                          style={{
                            textDecoration: "none",
                          }}
                        >
                          <button
                            class="dropdown-item "
                            onClick={() => this.props.handleGender("m")}
                          >
                            Men style{" "}
                          </button>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/start3"
                          style={{
                            textDecoration: "none",
                            marginLeft: "2vw",
                          }}
                        >
                          <button
                            class="dropdown-item pr-5"
                            style={{
                              paddingLeft: "9px",
                              // marginLeft: "30px",
                            }}
                          >
                            Custom
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </ul>

            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success me-2" type="submit">
                Search
              </button>
              <button class="btn btn-success  ">login</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default HomeNav;
