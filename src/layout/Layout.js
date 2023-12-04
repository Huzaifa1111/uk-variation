import React from "react";
import Head from "next/head";

const Layout = ({ children, title, desc, hasClass, classOpt }) => {
  return (
    <div
      className={`main-wrapper ${hasClass ? "overflow-hidden" : ""
        } ${classOpt}`}
    >
      <Head>
        <title>
          {title
            ? `Naxi.ae | ${title}`
            : "Naxi.ae - Official Website"}
        </title>
        {desc && <meta name="description" content={desc} />}
        <link rel="icon" href="/digi-h-shape-1.png" />
      </Head>

      {children}
    </div>
  );
};

export default Layout;
