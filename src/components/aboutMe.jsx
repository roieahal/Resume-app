import { useFormik } from "formik";
import { Link } from "react-router-dom";
import React from "react";

function Aboutme(props) {
  const { pushAboutMe } = props;
  const formik = useFormik({
    initialValues: {
      piska: "",
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
        About Me
      </p>

      <form onSubmit={(ev) => pushAboutMe(ev, formik.values)}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            about u
          </span>
          <input
            type="text"
            name="piska"
            className="form-control"
            placeholder=" somthing about u"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
            maxLength="116"
            required
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
          <div style={{ gap: "1%" }}>
            <Link to="/start2/">
              <button href="#" className="btn btn-outline-dark">
                &laquo; Previous
              </button>
            </Link>

            <Link to="/start2/education/">
              <button className="btn btn-outline-dark">Next &raquo;</button>
            </Link>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
export default Aboutme;
