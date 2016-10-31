import React from 'react';

const Search = ({ benches, requestBenches }) => {
  return(
    <div>
      <BenchMap benches={benches} requestBenches={requestBenches}/>
      <BenchIndex />
    </div>
  );
};

export default Search;
