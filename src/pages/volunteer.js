import React from 'react';

import Layout from '@common/Layout';
import { CommonNavBar } from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Events from '@sections/Events';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';


const iframe = '<iframe class="airtable-embed" src="https://airtable.com/embed/shrI7YrJjLLqCIISR?backgroundColor=white" frameborder="0" onmousewheel="" width="100%" height="1400px" style="background: #fff; margin-top: 72px; border: 1px solid #ccc;"></iframe>'



const IndexPage = () => (
  <Layout>
    <CommonNavBar />
    <div dangerouslySetInnerHTML={ {__html: iframe} } />
    </Layout>
);

export default IndexPage;
