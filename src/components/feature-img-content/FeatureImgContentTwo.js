import React from 'react';
import Image from 'next/image';
import {
  FaBezierCurve,
  FaCheckCircle,
  FaCog,
  FaFingerprint,
} from 'react-icons/fa';
import { FiPackage, FiUsers, FiUserX } from 'react-icons/fi';
import { GrDeliver } from 'react-icons/gr';

const FeatureImgContentTwo = ({ bgWhite }) => {
  return (
    <section className={`feature-section-two ptb-120 ${bgWhite ? 'bg-white' : 'bg-light'
      } `}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-heading">
              <h4 className="h5 text-primary">Our Values</h4>
              <h2>The Core Values that Drive Everything</h2>
              <p>
                Quickly incubate functional channels with multidisciplinary
                architectures. Authoritatively fabricate formulate exceptional
                innovation.
              </p>
              <ul className="list-unstyled mt-5">
                <li className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-primary rounded me-4">
                    <span className="fas text-white">
                      <FiPackage className="fa-lg" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="h5">Quality &amp; Original Products</h3>
                    <p>
                      We never ever compromise on our quality of products. our products are checked and verified.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-danger rounded me-4">
                    <span className="fas text-white">
                      <FiUsers className="fa-lg" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="h5">Customer Satisfication </h3>
                    <p>
                      We care about you and your customers too by delivery on time and make sure the product reached to them with care.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-dark rounded me-4">
                    <span className="fas text-white">
                      <GrDeliver className="fa-lg" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="h5">Make Dropshipping much easier</h3>
                    <p>
                      Don't worry about product hunting or importing from outside. we are here to make them all available for you to sell it for yourself.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-7">
            <div className="feature-img-wrap position-relative d-flex flex-column align-items-end">
              <ul className="img-overlay-list list-unstyled position-absolute">
                <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">
                  <FaCheckCircle className="fas fa-2x me-2 text-primary mb-1" />
                  <h6 className="mb-0">Create a Free Account</h6>
                </li>
                <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">
                  <FaCheckCircle className="fas fa-2x me-2 text-primary mb-1" />
                  <h6 className="mb-0">Latest Inventory in the market</h6>
                </li>
                <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">
                  <FaCheckCircle className="fas fa-2x me-2 text-primary mb-1" />
                  <h6 className="mb-0">Easy & Fast Shipment</h6>
                </li>
              </ul>
              <Image
                width={493}
                height={662}
                src="/pages-images/naxi-warehouse.jpg"
                alt="feature image"
                className="img-fluid rounded-custom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImgContentTwo;
