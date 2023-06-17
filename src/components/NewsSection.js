import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';

const NewsSection = ({ limit }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [visibleNews, setVisibleNews] = useState(limit);

  useEffect(() => {
    fetchNewsData();
  }, []);

  const fetchNewsData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setNewsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = (news) => {
    setSelectedNews(news);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedNews(null);
    setShowModal(false);
  };

  const loadMoreNews = () => {
    setVisibleNews((prevVisibleNews) => prevVisibleNews + limit);
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 m-20 text-black">
      {newsData.slice(0, visibleNews).map((news) => (
        <div
          key={news.id}
          className="cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          onClick={() => openModal(news)}
        >
          <img
            src={`https://picsum.photos/500/300?random=${news.id}`}
            alt="News"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
            <p className="text-black">
              {news.body}
            </p>
          </div>
        </div>
      ))}
      {visibleNews < newsData.length && (
        <button
          className="bg-blue-500 w-28 h-10 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
          onClick={loadMoreNews}
        >
          Load More
        </button>
      )}
      <Modal isOpen={showModal} onClose={closeModal}>
        {selectedNews && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{selectedNews.title}</h2>
            <img
              src={`https://picsum.photos/500/300?random=${selectedNews.id}`}
              alt="News"
              className="w-full h-60 object-cover mb-4"
            />
            <p>{selectedNews.body}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default NewsSection;
