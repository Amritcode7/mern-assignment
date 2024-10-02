import React from "react";
import Img from "../assets/america.jpg";

const ServiceItem = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src={Img} className="card-img-top" alt="Card Image" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={Img} className="card-img-top" alt="Card Image" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
