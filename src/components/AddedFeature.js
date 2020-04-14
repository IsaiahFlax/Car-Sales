import React from 'react';

const AddedFeature = ({removeFeatureHandler, feature}) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() =>removeFeatureHandler(feature)}>X</button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;