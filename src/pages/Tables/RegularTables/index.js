import React from 'react';
import generateData from '../generateData';
import StripedTable from './StripedTable';
import PlainBackgroundTable from './PlainBackgroundTable';

const data = generateData(5);

const RegularTables = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          {/* Aquí pasamos el prop filter a StripedTable */}
          <StripedTable data={data} filter={{ type: 'TextFilter' }} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Aquí pasamos el prop filter a PlainBackgroundTable */}
          <PlainBackgroundTable data={data} filter={{ type: 'TextFilter' }} />
        </div>
      </div>
    </div>
  );
};

export default RegularTables;
