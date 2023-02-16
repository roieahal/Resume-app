import { useFormik } from "formik";
import { Link } from "react-router-dom";
import React from "react";

function Contact(props) {
  const { pushInfo } = props;
  const formik = useFormik({
    initialValues: {
      FullName: "",
      lastPosition: "",
      email: "",
      phoneNumber: "",
      erea: "",
      linkdin: "",
      git: "",
    },
  });
  console.log(formik.values);
  return (
    <React.Fragment>
      <p
        style={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="h2"
      >
        Contact
      </p>
      <form onSubmit={(ev) => props.pushInfo(ev, formik.values)}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            full name
          </span>
          <input
            type="text"
            name="FullName"
            className="form-control"
            placeholder="full name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
            maxLength="16"
            required
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            last position
          </span>
          <input
            type="text"
            name="lastPosition"
            className="form-control"
            placeholder="last position"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
            maxLength="17"
            required
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            email{" "}
          </span>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="email"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
            maxLength="30"
            required
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            phone number{" "}
          </span>
          <input
            type="text"
            name="phoneNumber"
            className="form-control"
            placeholder="phone number"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
            maxLength="17"
            required
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            district{" "}
          </span>
          <input
            type="text"
            name="erea"
            className="form-control"
            placeholder="district"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
            maxLength="17"
            required
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            linkdin{" "}
          </span>
          <input
            type="text"
            name="linkdin"
            className="form-control"
            placeholder="linkdin"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            git{" "}
          </span>
          <input
            type="text"
            name="git"
            className="form-control"
            placeholder="git"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button type="submit" className="btn btn-outline-primary">
            Send information
          </button>
          <br />
          <Link to="/start3/aboutMe">
            <button className="btn btn-outline-dark">Next &raquo;</button>
          </Link>
        </div>
      </form>
    </React.Fragment>
  );
}
export default Contact;
