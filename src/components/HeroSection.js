import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Web Portal</h1>
        <p className="text-lg mb-8">Discover the Ethiopian Orthodox Tewahedo Church</p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">Learn More</button>
      </div>
    </section>
  );
};

export default HeroSection;
