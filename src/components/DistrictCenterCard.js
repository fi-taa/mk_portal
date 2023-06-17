import React, { useState } from 'react';

const DistrictCenterCard = ({ districtCenter }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="border border-gray-300 rounded-md p-4">
      <h3 className="text-lg font-semibold mb-2">{districtCenter.name}</h3>
      <p>
        <strong>Country:</strong> {districtCenter.country}
      </p>
      <p>
        <strong>Region:</strong> {districtCenter.region}
      </p>
      <p>
        <strong>Zone:</strong> {districtCenter.zone}
      </p>
      <button
        className="text-blue-500 underline mt-2"
        onClick={toggleDetails}
      >
        Show Details
      </button>
      {showDetails && (
        <DistrictCenterDetails
          districtCenter={districtCenter}
          onClose={() => setShowDetails(false)}
        />
      )}
    </div>
  );
};

const DistrictCenterDetails = ({ districtCenter, onClose }) => {
    const { name, country, region, zone, address, contact, email, latitude, longitude } = districtCenter;
  
    const handleLocationClick = () => {
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      window.open(url, '_blank');
    };
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="max-w-lg w-full p-6 bg-white rounded-md shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{name}</h2>
          <p>
            <strong>Country:</strong> {country}
          </p>
          <p>
            <strong>Region:</strong> {region}
          </p>
          <p>
            <strong>Zone:</strong> {zone}
          </p>
          <p>
            <strong>Address:</strong> {address}
          </p>
          <p>
            <strong>Contact:</strong> {contact}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <button
            className="text-blue-500 underline mt-4"
            onClick={handleLocationClick}
          >
            View Location on Google Maps
          </button>
          <button
            className="text-blue-500 underline mt-2 block"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  

export default DistrictCenterCard;
