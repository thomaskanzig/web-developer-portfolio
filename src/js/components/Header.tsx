import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  About me
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Skills
                </a>
              </li>
            </ul>

            <div className="text-end">
              <button type="button" className="btn btn-warning">
                <i className="bi bi-send-fill"/> Contact me
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
