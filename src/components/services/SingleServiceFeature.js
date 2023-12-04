import React from 'react';
import Image from 'next/image';
import { FaHeart, FaRegUser } from 'react-icons/fa';
import { BsWatch } from 'react-icons/bs';

const SingleServiceFeature = () => {
  return (
    <section className="feature-section ptb-120">
      <div className="container">
        <div className="row align-items-lg-center justify-content-between">
          <div className="col-lg-5 order-lg-2 mb-7 mb-lg-0">
            <div className="mb-4">
              <h2>Quick Order Processing & Quick Delivery</h2>
              <p>
                Retaining your customer isn't easy these days in dropshipping But we got you covered with fast order processing and delivering it to your customer doorstep with minimum time .{' '}
              </p>
            </div>
            <ul className="list-unstyled d-flex flex-wrap list-two-col mt-5">
              <li>
                <span>
                  <i className="fal fa-2x text-primary mb-4">
                    <FaHeart />
                  </i>
                </span>
                <h3 className="h5">Extra Care Delivery</h3>
                <p>We care about your products that needs to be delivered with care.</p>
              </li>
              <li>
                <span>
                  <i className="fal fa-2x text-primary mb-4">
                    <BsWatch />
                  </i>
                </span>
                <h3 className="h5">On Time Delivery</h3>
                <p>We are known for quick delivery to your customers </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="pr-lg-4 mt-md-4 position-relative">
              <div className="bg-light text-center rounded-custom overflow-hidden p-lg-5 p-4 mx-lg-auto">
                <Image
                  width={540}
                  height={407}
                  src="/pages-images/fast-delivery.jpg"
                  alt=""
                  className="img-fluid shadow-sm rounded-custom"
                />
                <div className="position-absolute bg-secondary-dark z--1 dot-mask dm-size-16 dm-wh-350 top--40 left--40 top-left"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleServiceFeature;
