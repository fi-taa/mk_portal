import React from 'react';
import DistrictCenterCard from './DistrictCenterCard';

const DistrictCenterSection = ({ districtCenters }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 m-4">
      {districtCenters.map((districtCenter) => (
        <DistrictCenterCard key={districtCenter.id} districtCenter={districtCenter} />
      ))}
    </div>
  );
};

export default DistrictCenterSection;
