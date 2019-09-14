import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
      <a className="text-decoration-none" href={project.href} target="_blank">
        <div className="d-flex align-items-stretch">
          <div className="card shadow rounded">
            <img
              src={`../static/images/${project.img}`}
              className="card-img-top"
              alt={project.title}
            />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Project;
