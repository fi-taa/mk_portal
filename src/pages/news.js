import React, { useState } from 'react';
import Layout from '../components/Layout';
import NewsSection from '../components/NewsSection';

const NewsPage = () => {
  const [visibleNews, setVisibleNews] = useState(10);

  const loadMoreNews = () => {
    setVisibleNews((prevVisibleNews) => prevVisibleNews + 10);
  };

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">News Page</h1>
        <NewsSection limit={visibleNews} />
       
      </div>
    </Layout>
  );
};

export default NewsPage;
