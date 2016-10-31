import React from 'react';

const BenchItem = ({bench}) => {
  return(
    <div className='bench-container' key={bench.id}>
      <span className='bench-description'>Description</span>
      <span>{bench.description}</span>
    </div>
  );
};

export default BenchItem;
