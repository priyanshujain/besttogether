import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Events from '@sections/Events';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Events />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
