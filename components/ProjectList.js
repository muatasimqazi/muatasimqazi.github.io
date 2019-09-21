import React from 'react'
import Project from './Project'

const projects = [
  {
    href: 'http://www.balochidictionary.com',
    img: 'balochi-dictionary02.png',
    title: 'Dictionary Website',
    description:
      'An online dictionary website in my native language with more than 30,000 unique entries; also available as a Facebook Messenger bot to look up words; built with NodeJS, Express and Heroku'
  },
  {
    href: 'https://covered-dev-7d37b.firebaseapp.com',
    img: 'covered.jpg',
    title: 'Application for Shift Workers',
    description:
      'A single-page web application to simplify scheduling needs of shift workers developed in collaboration with two other team members where I was responsible for building the user interfaces.'
  },
  {
    href: 'http://www.bexpress.com.pk',
    img: 'balochistan-express02.png',
    title: 'Newspaper Website',
    description:
      'A website for a print publication built with WordPress and MySQL.'
  },
  {
    href: 'https://balochistan-encyclopedia.firebaseapp.com',
    img: 'balochistan-encyclopedia02.png',
    title: 'Encyclopedia Project',
    description:
      'An engaging crowd-sourced website to document my indigenous culture and history utilizing front-end publishing and editing, user authentication and instant search'
  },
  {
    href: 'https://info343b-w18.github.io/challenges-muatasimqazi/moviebrowser',
    img: 'movie-browser02.png',
    title: 'Movie Browser',
    description:
      'A web application that allows users to search for movies, read reviews.'
  },
  {
    href: 'https://chat-8520a.firebaseapp.com/',
    img: 'slack-clone02.png',
    title: 'Slack Clone',
    description:
      'A website built as part of a class project that provides most functionalities offered by Slack.'
  }
].map(project => {
  return <Project key={project.title} project={project} />
})

const ProjectList = props => {
  return (
    <section id='projects' className='bg-section '>
      <div className='container pb-5 pt-5'>
        <div className='row m-0 pb-3'>
          <h3>Selected Projects</h3>
        </div>
        <div className='row justify-content-md-center card-deck'>
          {projects}
        </div>
      </div>
    </section>
  )
}

export default ProjectList
