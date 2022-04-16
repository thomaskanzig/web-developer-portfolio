import React from "react";
import BootstrapThemes from "../../img/bootstrap-themes.png";

class Hero extends React.Component {
  render() {
    return (
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={BootstrapThemes}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Hi, I'm Thomas</h1>
            <p className="lead lh-1 mb-4">
              a <span className="fw-bold">fullstack web developer</span> from
              Vienna.
            </p>
            <p className="lead">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
