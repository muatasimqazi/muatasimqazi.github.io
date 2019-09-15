import React from 'react';
import Link from 'next/link';
import withLayout from '../components/Layout';
import Intro from '../components/Intro';
import ProjectList from '../components/ProjectList';
import Contact from '../components/Contact';

const Home = () => (
  <>
    <Intro />
    <ProjectList />
    <Contact />
  </>
);

export default withLayout(Home);
