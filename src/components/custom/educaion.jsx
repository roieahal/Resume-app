import { useFormik } from "formik";
import { Link } from "react-router-dom";

const Education = (props) => {
  const formik = useFormik({
    initialValues: {
      nameOfSchoole: "",
      years: "",
      achivments: "",
      c1: "",
    },
  });

  return (
    <div>
      <p
        style={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="h2"
      >
        Education
      </p>
      <form onSubmit={(event) => props.onsubmitED(event, formik.values)}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Name of school
          </span>
          <input
            name="nameOfSchoole"
            type="text"
            className="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
            maxLength="20"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Years
          </span>
          <input
            type="text"
            name="years"
            className="form-control"
            placeholder="start year / end year"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
            maxLength="15"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Achivments</span>
          <textarea
            name="achivments"
            className="form-control"
            aria-label="With textarea"
            onChange={formik.handleChange}
            maxLength="100"
            required
          ></textarea>
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
            value="Add another education"
          />
          <br />
          <div>
            <Link to="/start3/aboutme">
              <button href="#" className="btn btn-outline-dark">
                &laquo; Previous
              </button>
            </Link>

            <Link to="/start3/experience">
              <button className="btn btn-outline-dark">Next &raquo;</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Education;
