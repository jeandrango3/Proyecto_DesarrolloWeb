import React from 'react';
import { Link } from 'react-router-dom';

//import ChartistGraph from 'react-chartist';
//import Chartist from 'chartist';



const SalesChart = () => (
  <div className="card">
    <div className="header">
      <h4 className="title">Oferta</h4>
      <p className="category">24 Hours performance</p>
    </div>
    <div className="content">

     {/*  <ChartistGraph data={dataSales} options={optionsSales} responsiveOptions={responsiveSales} type="Line" className="ct-chart" />
    </div>
    <div className="footer">
      <div className="legend">
        <div className="item">
          <i className="fa fa-circle text-info"></i> Open
        </div>
        <div className="item">
          <i className="fa fa-circle text-danger"></i> Click
        </div>
        <div className="item">
          <i className="fa fa-circle text-warning"></i> Click Second Time
        </div>
      </div>
      */}
      <hr />
      <div className="stats">
        <i className="fa fa-history"></i>
        <div className="footer text-center">
          <Link to="./Oferta/index">
            <button type="submit" className="btn btn-info btn-fill">Submit</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default SalesChart;