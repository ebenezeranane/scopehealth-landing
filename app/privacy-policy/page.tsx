// pages/privacy-policy.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | ScopeHealth</title>
        <meta name="description" content="ScopeHealth Privacy Policy" />
      </Head>
      
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="bg-white shadow-md rounded-lg p-8">
            <div className="border-b pb-4 mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>
              <p className="text-gray-600 mt-2">Effective Date: May 20, 2025</p>
            </div>
            
            <div className="prose max-w-none text-gray-700">
              <p className="mb-6">
                ScopeHealth is committed to protecting your privacy. This Privacy Policy explains how we collect, use, 
                and protect your information when you use our mobile application.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Information We Collect</h2>
              <p className="mb-3">We may collect the following information:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Device information, including model, operating system version, and unique identifiers.</li>
                <li>Phone state (via READ_PHONE_STATE), such as your device ID and network status, used solely for analytics, crash reporting, or authentication.</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Use of Information</h2>
              <p className="mb-3">We use the collected data to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Improve app performance and user experience.</li>
                <li>Monitor usage and detect bugs or crashes.</li>
                <li>Provide customer support.</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Sharing of Information</h2>
              <p className="mb-3">
                We do not sell or share your personal data with third parties, except:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>When required by law.</li>
                <li>With service providers who help us operate our app (e.g., analytics).</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Your Consent</h2>
              <p className="mb-6">
                By using our app, you consent to our collection and use of your information as described in this policy.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Security</h2>
              <p className="mb-6">
                We implement industry-standard measures to protect your data. However, no method of transmission over the internet is 100% secure.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Changes to This Policy</h2>
              <p className="mb-6">
                We may update our Privacy Policy from time to time. Changes will be posted on this page.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>
              <p className="mb-6">
                If you have any questions about this policy, contact us at:{' '}
                <Link href="https://scopehealth.com" className="text-blue-600 hover:text-blue-800">
                  scopehealth.com
                </Link>
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t text-gray-600 text-sm">
              <p>&copy; {new Date().getFullYear()} ScopeHealth. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;