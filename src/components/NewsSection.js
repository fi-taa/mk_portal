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

  const handleParagraphClick = (news) => {
    setSelectedNews(news);
    setShowModal(true);
  };

  const extractFirst20Words = (text) => {
    const words = text.split(' ');
    if (words.length <= 20) {
      return text;
    }
    return words.slice(0, 20).join(' ') + '...';
  };

  const loadMoreNews = () => {
    setVisibleNews((prevVisibleNews) => prevVisibleNews + limit);
  };

  const loadLessNews = () => {
    setVisibleNews((prevVisibleNews) => prevVisibleNews - limit);
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 m-20">
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
            {news.body.length > 20 ? (
              <p className="text-black">
                {extractFirst20Words(news.body)}
                {news.body.length > 20 && (
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => handleParagraphClick(news)}
                  >
                    ...More
                  </span>
                )}
              </p>
            ) : (
              <p>{news.body}</p>
            )}
          </div>
        </div>
      ))}
      <div className="flex gap-4">
      {limit && visibleNews < newsData.length && limit !== Infinity && (
        <button
          className="bg-blue-500 w-28 h-10 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={loadMoreNews}
        >
          Load More
        </button>
      )}
      {visibleNews > limit && (
        <button
          className="bg-blue-500 w-28 h-10 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={loadLessNews}
        >
          Load Less
        </button>
      )}
      </div>
      <Modal isOpen={showModal} onClose={closeModal}>
        {selectedNews && (
          <div className="text-black">
            <h2 className="text-2xl text-black font-semibold mb-4">{selectedNews.title}</h2>
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
