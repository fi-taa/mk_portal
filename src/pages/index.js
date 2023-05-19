import React from 'react';
import Layout from '../components/Layout';
import NewsSection from '../components/NewsSection';

const HomePage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lectus mauris.</p>
        <NewsSection limit={4} />
      </div>
    </Layout>
  );
};

export default HomePage;
