// styles/global.js
import css from 'styled-jsx/css'

export default css.global`
  * {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Helvetica Neue, Helvetica, sans-serif !important;
  }

  body {
    color: #1f2933;
  }

  nav ul {
    width: 64rem;
  }

  .jumbotron {
    min-height: 75vh;
    /* background-image: url('../images/hero.jpeg'); */
    background: #fff;
  }

  .profile-card {
    top: 20vh;
  }

  .profile-img {
    position: relative;
    top: -90px;
    max-width: 200px;
    margin-bottom: -75px;
  }

  .bg-dark-light {
    background: rgba(50, 70, 81, 0.8);
  }

  .contact a {
    text-decoration: none;
    color: inherit;
  }

  .social-icons {
    list-style: none;
  }

  .social-icons li {
    min-width: 50px;
    height: 50px;
    line-height: 70px;
  }

  .social-icons li {
    transition: all 0.75s ease-in-out;
    -webkit-transition: all 0.75s ease-in-out;
  }

  .social-icons li:hover {
    background-color: #ff9800 !important;
    cursor: pointer;
    transform: scale(1.1);
  }

  .social-icons li a {
    color: white;
    margin: 15px;
  }

  header {
    margin-bottom: 5vh;
  }

  /* .project-img img {
    transition: all 0.75s ease-in-out;
}
.project-img img:hover {
    content: "";
    background: red;
    cursor: pointer;
} */
  .project {
    position: relative;
    background: #e8effa;
  }

  .project:hover .overlay {
    opacity: 0.95;
    cursor: pointer;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: all 0.5s ease-in;
    background-color: #dc3545;
    min-height: 300px;
    z-index: 999;
  }

  .details {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    width: 80%;
  }

  .details a {
    text-decoration: none;
    color: inherit;
  }

  .url-link:hover {
    color: #faccc8;
  }

  .url {
    background: rgba(0, 0, 0, 0.75);
  }

  .link {
    background: rgba(0, 0, 0, 0.5);
  }

  #scroll {
    width: 60px;
    height: 60px;
    position: fixed;
    z-index: 99;
    cursor: pointer;
    bottom: 20px;
    right: 30px;
  }

  #scroll:hover {
    background: #ff9800 !important;
  }

  .regular {
    font-weight: 400;
  }

  .bg-section {
    background: #e8effa;
  }

  .shadow {
    box-shadow: 0 0.25rem 1rem rgba(32, 41, 51, 0.1);
    border-radius: 4px;
  }

  a {
    color: #1f2933;
    transition: color 0.15s ease-in;
  }

  #projects a:hover {
    color: #1f2933;
    text-decoration: none;
  }

  .text-decoration-none {
    text-decoration: none;
  }

  #project .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`
