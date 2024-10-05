import React from "react";

const HeaderBar = ({ filterValueSearch }) => {
  const backgroundImageStyle = {
    backgroundImage: "url('./background-food.png')",
    height: "400px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  };

  const searchProduct = (e) => {
    filterValueSearch(e.target.value);
  };

  return (
    <>
      <section className="header-section" style={backgroundImageStyle}>
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src="logo.png" alt="logo" height={65} />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <ul className="list-unstyled d-flex gap-3 m-0">
                  <li className="pe-auto">Help</li>
                  <li className="pe-auto">Log in</li>
                  <li className="pe-auto">Sign up</li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="text-center">
            <h1 className="display-5">EatBox</h1>
            <p className="fs-3">Discover the best food & drinks in Kolhapur</p>
            <div className="input-group mb-3 w-sm-100 w-50 mx-auto shadow">
              <span
                className="input-group-text rounded-start-5 p-3"
                id="basic-addon1"
              >
                <i className="bx bx-search fs-5"></i>
              </span>
              <input
                type="text"
                className="form-control rounded-end-5"
                placeholder="Search Products"
                aria-label="Search Products"
                aria-describedby="basic-addon1"
                onChange={searchProduct}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderBar;
