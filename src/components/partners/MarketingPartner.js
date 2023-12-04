import Link from 'next/link';
import React from 'react';

const MarketingPartner = () => {
  return (
    <section className="mk-partners bg-white pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="mk-title text-center">
              <h5 className="mb-0">
                Follow us on social media
              </h5>
            </div>
          </div>
        </div>
        <div className="mk-partners-list mt-5">
          <div className="mk-partner-item">
            <Link href={'https://youtube.com'} >
              <img
                src="/icons/google-text.svg"
                alt="google"
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="mk-partner-item">
            <Link href={'https://youtube.com'} >
              <img
                src="/icons/facebook-text.svg"
                alt="facebook"
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="mk-partner-item">
            <Link href={'https://youtube.com'} >
              <img src="/icons/youtube.svg" alt="youtube" className="img-fluid" />
            </Link>
          </div>
          <div className="mk-partner-item">
            <Link href={'https://youtube.com'} >
              <img src="/icons/webflow.svg" alt="webflow" className="img-fluid" />
            </Link>
          </div>

          <div className="mk-partner-item">
            <Link href={'https://youtube.com'} >
              <img src="/icons/company.svg" alt="company" className="img-fluid" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingPartner;
