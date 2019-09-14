import React from 'react';
import Link from 'next/link';
import withLayout from '../components/Layout';
import Intro from '../components/Intro';
import ProjectList from '../components/ProjectList';

const Home = () => (
  <>
    <Intro />
    <ProjectList />
  </>
);

export default withLayout(Home);
