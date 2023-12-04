import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import HelpCenterDetails from '@components/help-center/HelpCenterDetails';
import HelpCenterHeader from '@components/help-center/HelpCenterHeader';
import MarketingIntegration from '@components/integration/MarketingIntegration';
import CryptoFooter from '@layout/Footer/CryptoFooter';
import PageHeader from '@components/common/PageHeader';
import FaqTwo from '@components/faq/FaqTwo';


const HelpCenter = () => {
  return (
    <Layout title="Help Center" desc="This is help center page">
      <Navbar />
      <PageHeader
        title="Help & Support"
        desc="Seamlessly actualize client-based users after out-of-the-box value data through frictionless expertise. Proactively coordinate quality quality vectors vis-a-vis supply chains. Quickly engage client-centric web services."
      />
      {/* <HelpCenterDetails /> */}
      <FaqTwo />
      <MarketingIntegration />
      <CryptoFooter />
    </Layout>
  );
};

export default HelpCenter;
