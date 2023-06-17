import React from 'react';
import Layout from '../components/Layout';
import NewsSection from '../components/NewsSection';
import HeroSection from '../components/HeroSection';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomePage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <HeroSection/>
        <Carousel showArrows={true} infiniteLoop={true}>
          <div>
            <NewsSection limit={10} />
          </div>
         
          {/* Add more NewsPage components within the Carousel as needed */}
        </Carousel>
      </div>
      
    </Layout>
  );
};

export default HomePage;
