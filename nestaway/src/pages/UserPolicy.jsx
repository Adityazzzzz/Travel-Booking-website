import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";

const Privacy = () => {
  return (
    <main>
      <div className="container mx-auto py-12 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 flex items-center">
            <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Return to Home
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
          <p className="text-gray-600 mb-8 text-lg">At NestAway, we're committed to protecting your privacy and ensuring your data remains secure.</p>
          
          <div className="space-y-8">
            <Card className="shadow-md border-t-4 border-t-blue-500">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Introduction</h2>
                <p className="text-gray-700">
                  At NestAway, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md border-t-4 border-t-blue-500">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We may collect several types of information from and about users of our website, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Personal identifiers such as name, email address, phone number, and postal address.</li>
                  <li>Account credentials including username and password.</li>
                  <li>Payment information when you book accommodations.</li>
                  <li>Profile information such as preferences and travel history.</li>
                  <li>Communications between you and NestAway.</li>
                  <li>Usage data about how you interact with our website and services.</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-md border-t-4 border-t-blue-500">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide, maintain, and improve our services.</li>
                  <li>Process and complete transactions.</li>
                  <li>Send you administrative information and service-related notifications.</li>
                  <li>Respond to your comments, questions, and requests.</li>
                  <li>Personalize your experience and deliver content relevant to your interests.</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-md border-t-4 border-t-blue-500">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. How We Share Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We may share your personal information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Property owners and managers to facilitate bookings.</li>
                  <li>Service providers working on our behalf.</li>
                  <li>Business partners with whom we jointly offer products or services.</li>
                  <li>Legal authorities when required by law or to protect our rights.</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-md border-t-4 border-t-blue-500">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Your Rights and Choices</h2>
                <p className="text-gray-700 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Access to your personal data.</li>
                  <li>Correction of inaccurate data.</li>
                  <li>Deletion of your personal data.</li>
                  <li>Restriction or objection to certain processing activities.</li>
                  <li>Data portability.</li>
                  <li>Withdrawal of consent at any time.</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-md border-t-4 border-t-blue-500">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Security</h2>
                <p className="text-gray-700">
                  We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md border-t-4 border-t-blue-500">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Changes to This Privacy Policy</h2>
                <p className="text-gray-700">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md border-t-4 border-t-blue-500">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about this Privacy Policy, please contact us at privacy@nestaway.com.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-sm">Last Updated: April 9, 2025</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
