import React from 'react'

// const links = [
//   { href: 'https://zeit.co/now', label: 'ZEIT' },
//   { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`;
//   return link;
// });

const Nav = () => (
  <nav className="navbar navbar-expand-sm navbar-light container">
    <span className="navbar-brand mb-0 h1 regular"> Muatasim Qazi </span>
    <div
      className="collapse navbar-collapse justify-content-between"
      id="navbar"
    >
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="#about">
          About
        </a>
        <a className="nav-item nav-link" href="#projects">
          Projects
        </a>
        <a className="nav-item nav-link" href="#contact">
          Contact
        </a>
      </div>
      <div className="navbar-nav">
        <a
          className="nav-item nav-link"
          href="../static/media/mqazi-resume.pdf"
        >
          Resume
        </a>
      </div>
    </div>
  </nav>
)

export default Nav
