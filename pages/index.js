import React from 'react';
import Link from 'next/link';
import withLayout from '../components/Layout';
import Intro from '../components/Intro';

const Home = () => <Intro />;

export default withLayout(Home);
