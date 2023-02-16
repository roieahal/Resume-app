import { useFormik } from "formik";
import { Link } from "react-router-dom";
import React from "react";

function Experience(props) {
  const { pushExperience, pushExperience2 } = props;
  const formik = useFormik({
    initialValues: {
      job: "",
      Place: "",
      role: "",
      time: "",
      achievements: "",
    },
  });

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
        Experience
      </p>

      <form onSubmit={(ev) => pushExperience2(ev, formik.values)}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            job
          </span>
          <input
            type="text"
            name="job"
            className="form-control"
            placeholder="job"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
            maxLength="53"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            place
          </span>
          <input
            type="text"
            name="place"
            className="form-control"
            placeholder="place"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
            maxLength="19"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            role
          </span>
          <input
            type="text"
            name="role"
            className="form-control"
            placeholder="role"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
            maxLength="66"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            time
          </span>
          <input
            type="text"
            name="time"
            className="form-control"
            placeholder="start year / end year            "
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
            maxLength="15"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            achievements
          </span>
          <input
            type="text"
            name="achievements"
            className="form-control"
            placeholder="achievements"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
            maxLength="79"
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
          <input
            className="btn btn-outline-secondary"
            type="reset"
            value="Add another job"
          />
          <br />
          <div>
            <Link to="/start2/education">
              <button href="#" className="btn btn-outline-dark">
                &laquo; Previous
              </button>
            </Link>

            <Link to="/start2/skills">
              <button className="btn btn-outline-dark">Next &raquo;</button>
            </Link>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
export default Experience;
