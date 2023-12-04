import MarketingPartner from "@components/partners/MarketingPartner";
import { headerMenu } from "@utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";
import { appRoutes } from "src/routes";

const CryptoFooter = () => {
  return (
    <footer className="footer-light text-black crypto-footer pt-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="crypto-footer-widget text-center">
              <div className="">
                <Link href="/" >
                  <a className="crypto-logo"><Image
                    src="/brand-logo/logo-color.png"
                    className="mb-30"
                    alt="logo"
                    width={113}
                    height={36}
                  /></a>
                </Link>
                <p>
                  Naxi.ae is online platform for wholesellers who wants to sell and ship their products to their customers directly.
                </p>
              </div>
              <nav className="crypto-footer-nav py-5">
                <ul className="list-unstyled list-inline">


                  {headerMenu?.map((item, i) => {
                    return (<>
                      <li className="list-inline-item px-lg-4 px-3">
                        <div key={i + 1}>
                          <Link
                            href={item.href}
                          >
                            <a className="text-decoration-none fw-semibold ">{item.name}</a>
                          </Link>
                        </div>
                      </li>
                    </>)
                  })}
                </ul>
              </nav>

              {/* <h4 className="text-black mb-4 fw-medium">
                Follow us on social media
              </h4>
              <ul className="list-unstyled crypto-footer-social pb-40">
                <li className="list-inline-item">
                  <a href="#/">
                    <i><FaFacebookF /></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#/">
                    <i><FaTwitter /></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#/">
                    <i><FaDribbble /></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#/">
                    <i><FaBehance /></i>
                  </a>
                </li>
              </ul> */}

            </div>
          </div>
        </div>
      </div>
      <MarketingPartner />

      <div className="crypto-footer-border py-3">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-7">
              <div className="crypto-footer-left">
                <p className="m-0 text-center text-lg-start">
                  All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="crypto-footer-right text-center text-md-end">
                <ul className="list-unstyled mt-3 mt-md-0">
                  <li className="list-inline-item pe-2">
                    <Link href={appRoutes.termsCondition}>
                      <a className="text-decoration-none">Terms & Conditions</a>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href={appRoutes.privacyPolicy} >
                      <a className="text-decoration-none">Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


    </footer >
  );
};

export default CryptoFooter;
