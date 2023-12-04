import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import HelpCenterSingleDetails from '@components/help-center/HelpCenterSingleDetails';
import PoliciesContent from '@components/common/TermsConditionsContent';
import CryptoFooter from '@layout/Footer/CryptoFooter';
import MarketingIntegration from '@components/integration/MarketingIntegration';
import TermsConditionsContent from '@components/common/TermsConditionsContent';



const TermsConditionsPage = () => {
    return (
        <Layout title="Term & Conditions" desc="This is help center single">
            <Navbar />
            <TermsConditionsContent />
            <MarketingIntegration />
            <CryptoFooter />
        </Layout>
    );
};

export default TermsConditionsPage;
