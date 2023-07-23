import React from 'react';
import EmailChart from '../EmailChart';
import SalesChart from '../SalesChart';
import UserBehaviorChart from '../UserBehaviorChart';
import Tasks from '../Tasks';

const informacion = () => (
  <div className="content">
    
    <div className="container-fluid">
    <div className="row">
        <div className="col-md-12">
          <UserBehaviorChart />
        </div>
      
      </div>

      <div className="row">
        <div className="col-md-4">
          <EmailChart />
        </div>
        <div className="col-md-4">
          <SalesChart />
        </div>
        <div className="col-md-4">
          <Tasks/>
        </div>
      </div>
      
    </div>
  </div>
);

export default informacion;