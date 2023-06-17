import React, { useState } from 'react';
import Layout from '../components/Layout';
import NewsSection from '../components/NewsSection';

const NewsPage = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const handleNewsClick = (news) => {
    setSelectedNews(news);
  };

  const handleCloseNews = () => {
    setSelectedNews(null);
  };

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">News Page</h1>
        {selectedNews ? (
          <div>
            <button
              className="bg-blue-500 w-28 h-10 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={handleCloseNews}
            >
              Go Back
            </button>
            <div className="mx-auto my-8 w-4/5">
              <h2 className="text-2xl font-semibold mb-4">{selectedNews.title}</h2>
              <img
                src={`https://picsum.photos/500/300?random=${selectedNews.id}`}
                alt="News"
                className="w-full h-60 object-cover mb-4"
              />
              <p>{selectedNews.body}</p>
            </div>
          </div>
        ) : (
          <NewsSection limit={10} onItemClick={handleNewsClick} />
        )}
      </div>
    </Layout>
  );
};

export default NewsPage;
