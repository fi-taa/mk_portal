// _app.js
import React from 'react';
import { useRouter } from 'next/router';
import IndexPage from './index';
import HistoryPage from './history';
import NewsPage from './news';
import DistrictCentersPage from './districtCenters';
import InternalCommunicationPage from './internalCommunication';
import './globals.css'

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  // Check the current route and render the corresponding page component
  const renderPageComponent = () => {
    switch (router.pathname) {
      case '/':
        return <IndexPage {...pageProps} />;
      case '/history':
        return <HistoryPage {...pageProps} />;
      case '/news':
        return <NewsPage {...pageProps} />;
      case '/districtCenters':
        return <DistrictCentersPage {...pageProps} />;
      case '/internalCommunication':
        return <InternalCommunicationPage {...pageProps} />;
      default:
        return <Component {...pageProps} />;
    }
  };

  return renderPageComponent();
};

export default App;
