import React from 'react';

const Intro = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-3 align-self-center">
          <div className="card-body">
            <img
              className="card-img-tops rounded-circle img-fluid"
              src="../static/images/muatasim-qazi.jpeg"
              alt="Card image cap"
            />
            <h4 className="card-text pb-3 text-center regular">
              Muatasim Qazi
            </h4>
          </div>
        </div>

        <div className="col-sm-9">
          <div className="card border-0">
            <div className="card-body mt-5">
              <h2 className="">
                Software Engineer | actively seeking FT roles
              </h2>
              <p className="regular pb-3">
                I am a Software Engineer experienced in full-stack development
                seeking full-time opportunities. I am currently enrolled at the
                University of Washington's Informatics program as a full-time
                undergraduate student. I will be graduating in June ’19.
              </p>
              <p className="regular pb-3">
                Work Status: No sponsorship needed (domestic candidate)
              </p>

              <ul className="d-flex text-white social-icons p-0">
                <li className="rounded-circle bg-dark mr-3">
                  <a href="https://www.linkedin.com/in/muatasimqazi/">
                    <i className="h5 fab fa-linkedin"></i>
                  </a>
                </li>
                <li className="rounded-circle bg-dark mr-3">
                  <a href="https://github.com/muatasimqazi">
                    <i className="h5 fab fa-github"></i>
                  </a>
                </li>
                <li className="rounded-circle bg-dark mr-3">
                  <a href="https://twitter.com/muatasimqazi">
                    <i className="h5 fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
