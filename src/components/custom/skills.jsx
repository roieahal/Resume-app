import { useFormik } from "formik";
import { Link } from "react-router-dom";
import React from "react";

function Skills(props) {
  const { pushSkills, pushSkills2, pushSkills3, downlod } = props;
  const formik = useFormik({
    initialValues: {
      languages: [],
      languages2: [],
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
        Skills
      </p>

      <form onSubmit={(ev) => pushSkills(ev, formik.values)}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="languages"
                value="Javascript"
                id="flexCheckDefault"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Javascript
              </label>
            </div>
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="languages"
                value="Python"
                id="flexCheckDefault"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Python
              </label>
            </div>
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="languages"
                value="Java"
                id="flexCheckDefault"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Java
              </label>
            </div>
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="languages"
                value="PHP"
                id="flexCheckDefault"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                PHP
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="languages"
                value="C#"
                id="flexCheckDefault"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                C#
              </label>
            </div>
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="languages"
                value="C++"
                id="flexCheckDefault"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                C++
              </label>
            </div>
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="languages"
                value="C"
                id="flexCheckDefault"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                C
              </label>
            </div>
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="languages"
                value="Typescript"
                id="flexCheckDefault"
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Typescript
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-outline-primary">
          Send information
        </button>
      </form>
      <form onSubmit={(ev) => pushSkills2(ev, formik.values)}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            add skill{" "}
          </span>
          <input
            name="languages2"
            type="text"
            id="personalSkill"
            className="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
            placeholder="Add Skill"
            onChange={formik.handleChange}
            maxLength="10"
          />
        </div>

        <button type="submit" className="btn btn-outline-primary">
          Send information
        </button>
      </form>

      <form onSubmit={(ev) => pushSkills3(ev, formik.values)}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            add languages{" "}
          </span>
          <input
            name="languages3"
            type="text"
            className="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
            placeholder="Add languages or any other skill you would like"
            maxLength="100"
          />
        </div>

        <button type="submit" className="btn btn-outline-primary">
          Send information
        </button>
      </form>
      <div>
        <Link to="/start3/experience">
          <button href="#" className="btn btn-outline-dark">
            &laquo; Previous
          </button>
        </Link>
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            type="button"
            onClick={() => downlod()}
            className="btn btn-danger"
          >
            make PDF
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skills;
