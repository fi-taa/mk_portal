import React from 'react';
import Layout from '../components/Layout';
import HistorySection from '../components/HistorySection';

const HistoryPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">History of the Ethiopian Orthodox Tewahedo Church</h1>
        <HistorySection />
        {/* Add more content for the history page */}
      </div>
    </Layout>
  );
};

export default HistoryPage;
