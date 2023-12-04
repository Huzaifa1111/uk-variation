import React from 'react';
import { FaFacebookF } from 'react-icons/fa';

const MarketingIntegration = () => {
  return (
    <section className="mk-integration bg-gradient ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="mk-title text-center">
              <span className="mk-subtitle fw-bold">List your products anywhere</span>
              <h2 className="mk-heading mb-0 mt-3">
                Start Selling Your Products Across All Stores
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="row justify-content-center g-4">
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="mk-app-single d-flex align-items-center p-3 justify-content-center">
                <span className="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded  ">
                  <img
                    src="/digital-marketing/amazon-logo.png"
                    alt="instagram"
                    className="img-fluid"
                  />
                </span>
                <div className="ms-3">
                  <h6 className="mk-heading mb-1">Amazon</h6>
                  {/* <p className="mb-0 fs-sm">
                    Exponent keeps all your data safe and secured.
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="mk-app-single d-flex align-items-center p-3 justify-content-center">
                <span className="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded slack">
                  <img
                    src="/digital-marketing/shopify.png"
                    alt="slack"
                    className="img-fluid"
                  />
                </span>
                <div className="ms-3">
                  <h6 className="mk-heading mb-1">Shopify</h6>

                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="mk-app-single d-flex align-items-center p-3 justify-content-center">
                <span className="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded twitter">
                  <img
                    src="/digital-marketing/noon.png"
                    alt="figma"
                    className="img-fluid"
                  />
                </span>
                <div className="ms-3">
                  <h6 className="mk-heading mb-1">Noon</h6>

                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="mk-app-single d-flex align-items-center p-3 justify-content-center">
                <span className="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded figma">
                  <img
                    src="/digital-marketing/namshi.jpeg"
                    alt="figma"
                    className="img-fluid"
                  />
                </span>
                <div className="ms-3">
                  <h6 className="mk-heading mb-1">Namshi</h6>

                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="mk-app-single d-flex align-items-center p-3 justify-content-center">
                <span className="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded facebook">
                  {/* <i className="fab fa-facebook-f"></i> */}
                  <img
                    src="/digital-marketing/ebay.png"
                    alt="figma"
                    className="img-fluid"
                  />
                </span>
                <div className="ms-3">
                  <h6 className="mk-heading mb-1">Ebay</h6>

                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="mk-app-single d-flex align-items-center p-3 justify-content-center">
                <span className="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded zapier">
                  <img
                    src="/digital-marketing/etsy.png"
                    alt="zapier"
                    className="img-fluid"
                  />
                </span>
                <div className="ms-3">
                  <h6 className="mk-heading mb-1">Etsy</h6>

                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="mk-app-single d-flex align-items-center p-3 justify-content-center">
                <span className="icon-wrapper d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded drive">
                  <img
                    src="/digital-marketing/centrepoint.png"
                    alt="drive"
                    className="img-fluid"
                  />
                </span>
                <div className="ms-3">
                  <h6 className="mk-heading mb-1">Center Point</h6>

                </div>
              </div>
            </div>
          </div>
          <p className="text-center mb-0 mt-40">
            Didn't find your store?  No worries you can still sell on your own store {' '}

          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketingIntegration;
