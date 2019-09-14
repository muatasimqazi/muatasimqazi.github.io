import React from 'react';

const Project = ({ project }) => {
  return (
    <div class="col-lg-4 col-md-6 col-sm-6 mb-5">
      <a class="text-decoration-none" href={project.href} target="_blank">
        <div class="d-flex align-items-stretch">
          <div class="card shadow rounded">
            <img
              src={`../static/images/${project.img}`}
              class="card-img-top"
              alt={project.title}
            />
            <div class="card-body">
              <h5 class="card-title">{project.title}</h5>
              <p class="card-text">{project.description}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Project;
