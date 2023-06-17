import React, { useState } from 'react';
import Layout from '../../components/Layout';
import DistrictCenterSection from '../../components/DistrictCenterSection';

const districtCentersData = [
  {
    id: 1,
    name: 'District Center 1',
    country: 'Country A',
    region: 'Region X',
    zone: 'Zone Alpha',
  },
  {
    id: 2,
    name: 'District Center 2',
    country: 'Country A',
    region: 'Region Y',
    zone: 'Zone Beta',
  },
  {
    id: 3,
    name: 'District Center 3',
    country: 'Country B',
    region: 'Region X',
    zone: 'Zone Gamma',
  },
  {
    id: 4,
    name: 'District Center 4',
    country: 'Country B',
    region: 'Region Z',
    zone: 'Zone Delta',
  },
];

const DistrictCentersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDistrictCenters = districtCentersData.filter((districtCenter) => {
    const { country, region, zone } = districtCenter;
    const searchQuery = searchTerm.toLowerCase();
    return (
      country.toLowerCase().includes(searchQuery) ||
      region.toLowerCase().includes(searchQuery) ||
      zone.toLowerCase().includes(searchQuery)
    );
  });

  return (
    <Layout>
      <div className="container mx-auto py-8 text-black">
        <h1 className="text-4xl font-bold mb-4">District Centers</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by country, region, or zone"
            className="border border-gray-300 rounded-md py-2 px-4 w-full"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <DistrictCenterSection districtCenters={filteredDistrictCenters} />
      </div>
    </Layout>
  );
};

export default DistrictCentersPage;
