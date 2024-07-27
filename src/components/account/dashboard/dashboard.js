import React from 'react';

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 bg-dark sidebar">
          <h3 className="text-white">Menu</h3>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Reports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Analytics</a>
            </li>
          </ul>
        </div>
        <div className="col-md-10 p-5">
          <h1>Dashboard Content</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;