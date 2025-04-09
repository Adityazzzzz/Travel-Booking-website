import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <main>
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700">
                These Terms and Conditions constitute a legally binding agreement made between you and NestAway, concerning your access to and use of the NestAway website and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access the website or use our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
              <p className="text-gray-700 mb-4">
                In these Terms and Conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>"User," "You," and "Your" refers to you, the person accessing this website and accepting these terms.</li>
                <li>"Company," "We," "Us," and "Our" refers to NestAway.</li>
                <li>"Party" refers to either you or us.</li>
                <li>"Service" refers to the services provided by NestAway.</li>
                <li>"Content" refers to text, images, videos, audio, and all other forms of data or communication.</li>
                <li>"Host" refers to users who offer property for rent on our platform.</li>
                <li>"Guest" refers to users who rent property through our platform.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
              <p className="text-gray-700 mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
              </p>
              <p className="text-gray-700 mb-4">
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
              </p>
              <p className="text-gray-700">
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Booking and Reservations</h2>
              <p className="text-gray-700 mb-4">
                When booking a property on NestAway:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Guests agree to pay all fees and applicable taxes associated with the booking.</li>
                <li>Reservations are confirmed only after payment is processed and confirmation is issued.</li>
                <li>Hosts are responsible for the accuracy of their property listings.</li>
                <li>Cancellation policies vary by listing and are specified on each property page.</li>
                <li>NestAway reserves the right to cancel bookings in cases of suspected fraud or violation of these Terms.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of NestAway and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
              </p>
              <p className="text-gray-700">
                Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of NestAway.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">6. User Content</h2>
              <p className="text-gray-700 mb-4">
                When you create or make available any Content on our Service, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You own or have the necessary licenses, rights, consents, and permissions to use and authorize us to use all intellectual property rights in and to any Content.</li>
                <li>The Content is accurate and not misleading.</li>
                <li>The Content does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person or entity.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700">
                In no event shall NestAway, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
              <p className="text-gray-700">
                These Terms shall be governed and construed in accordance with the laws of the country where NestAway is established, without regard to its conflict of law provisions.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms, please contact us at legal@nestaway.com.
              </p>
            </section>
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-sm">Last Updated: April 9, 2025</p>
            <p className="mt-4">
              <Link to="/" className="text-blue-600 hover:underline">Return to Home</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Terms;
