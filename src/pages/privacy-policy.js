import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import HelpCenterSingleDetails from '@components/help-center/HelpCenterSingleDetails';
import PoliciesContent from '@components/common/TermsConditionsContent';
import CryptoFooter from '@layout/Footer/CryptoFooter';
import MarketingIntegration from '@components/integration/MarketingIntegration';
import PrivacyPolicyContent from '@components/common/PrivacyPolicyContent';



const PrivacyPolicyPage = () => {
    return (
        <Layout title="Privacy Policy" desc="This is help center single">
            <Navbar />
            <PrivacyPolicyContent />
            <MarketingIntegration />
            <CryptoFooter />
        </Layout>
    );
};

export default PrivacyPolicyPage;
