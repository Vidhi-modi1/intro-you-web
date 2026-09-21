import { useState } from "react";
import FooterApp from "./FooterApp";
import HeaderApp from "./HeaderApp";

const PolicyPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return <div className="min-h-screen bg-white">
    {/* Header */}
    <HeaderApp />

    {/* Main Content */}

    <main className="flex-1 max-w-4xl mx-auto px-6 py-12 text-gray-800 post-content">
      <h1 className="text-4xl font-bold mb-4 text-[#820080] text-center">Privacy Policy</h1>
      {/* <p className="text-sm text-gray-500 mb-8">Effective Date: 14 October 2025</p> */}

      {/* Section 1 */}
      <section className="mb-6">
        <p className="mb-2">Effective Date: 14th October 2025</p>
        <p className="mb-2"> This Privacy Policy explains how IntroYou collects, uses, stores, and protects your personal data
          when you use our matchmaking service. We are committed to safeguarding your privacy and
          handling your data in a secure, transparent, and lawful manner.</p>

        <h2 className="font-semibold text-xl text-[#820080] mb-2">1. Who We Are</h2>
        <p className="mb-2">
IntroYou is operated and supplied by Intro International Group L.L.C-FZ,
a company registered in Dubai, United Arab Emirates, with its registered
address at Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba,
Dubai, U.A.E. We are the primary data controller for all personal data
collected through the IntroYou platform.
        </p>
        <p className="mb-2">
          Payments are processed by Triple AMT Group Ltd (Company No.
10502502), a UK-based entity with its registered office at 20–22
Wenlock Road, London, England, N1 7GU, that acts solely as a
payment collection agent on our behalf. Triple AMT may access certain
personal identifiers (such as your email address) strictly for payment
processing and customer support. Triple AMT is registered with the
Information Commissioner’s Office (ICO) in the UK.
        </p>
        <h2 className="font-semibold text-xl text-[#820080] mb-2"> 2. Scope</h2>
        <p className="mb-2">
          This policy applies to all users of the IntroYou service, including website visitors and
          registered users. By using our platform, you consent to the collection and processing of your
          personal data in accordance with this policy.
        </p>
        <h2 className="font-semibold text-xl text-[#820080] mb-2">  3. Data We Collect </h2>
        <p className="mb-2">
          We may collect and process the following categories of personal data:
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact details: name, email address, phone number</li>
            <li>Identity and demographic data: date of birth, gender, ethnicity, religion, sexuality, nationality</li>
            <li>Lifestyle preferences: dietary habits, relationship preferences, hobbies, values</li>
            <li>Location: city, country, and distance preferences for matchmaking</li>
            <li>Account and usage data: profile photos, login history, match interactions</li>
            <li>Payment-related data (processed by Triple AMT): email address, payment confirmations (no
              card details stored)</li>
          </ul>
        </p>
        <p className="mb-2">
          We only collect the minimum data necessary to offer a safe and personalised matchmaking service.
        </p>
        <h2 className="font-semibold text-xl text-[#820080] mb-2"> 4. Legal Basis for Processing</h2>
        <p className="mb-2">
          We rely on the following lawful bases to collect and use your data:
          <ul className="list-disc pl-5 space-y-1">
            <li> Consent: for sensitive data (e.g. religion, sexuality)</li>
            <li>Performance of a contract: to deliver matchmaking services</li>
            <li> Legal obligation: for compliance and regulatory requirements</li>
            <li>Legitimate interests: to improve services, prevent fraud, ensure platform security</li>
          </ul>
        </p>
        <h2 className="font-semibold text-xl text-[#820080] mb-2">  5. Sensitive Data</h2>
        <p className="mb-2">
          As part of your profile, you may provide information classified as sensitive under
          UK GDPR (e.g. religious belief, sexual orientation, ethnicity). We collect and process such data
          only with your explicit consent for the purposes of matchmaking. You may withdraw this consent at
          any time, although it may limit your ability to use our service.
        </p>

        <h2 className="font-semibold text-xl text-[#820080] mb-2">  6. Use of Your Data</h2>
        <p className="mb-2">
          Your data is used for the following purposes:

          <ul className="list-disc pl-5 space-y-1">
            <li> To create and curate your matchmaking profile</li>
            <li>To deliver match suggestions based on compatibility</li>
            <li>To communicate with you about matches, platform updates, or service improvements</li>
            <li>To process payments and provide customer support</li>
            <li>To investigate and address abuse, fraud, or security breaches</li>
            <li>To meet legal and regulatory requirements</li>
          </ul>
        </p>

        <h2 className="font-semibold text-xl text-[#820080] mb-2">  7. Data Sharing </h2>
        <p className="mb-2">
          We do not sell your personal data. Your data may be shared only with:

          <ul className="list-disc pl-5 space-y-1">
            <li> Matchmaking team members under strict confidentiality</li>
            <li>Payment processor (Triple AMT) for payment collection purposes only</li>
            <li> Technical providers (e.g. web hosting, analytics, support tools) acting as processors under
              contract</li>
          </ul>
        </p>

        <h2 className="font-semibold text-xl text-[#820080] mb-2"> 8. International Transfers </h2>
        <p className="mb-2">
          Your data is controlled from the UAE but may be stored or processed
          outside the UK or UAE, depending on our infrastructure providers. We ensure that appropriate
          safeguards are in place (e.g. standard contractual clauses) for any international transfers, in line with
          UK GDPR.
        </p>

        <h2 className="font-semibold text-xl text-[#820080] mb-2">  9. Data Retention </h2>
        <p className="mb-2">
          We retain your data only for as long as necessary:

          <ul className="list-disc pl-5 space-y-1">
            <li>For active users: while your account remains open</li>
            <li> For inactive users: for a maximum of 24 months of inactivity</li>
            <li>For payment and legal records: up to 7 years, as required by law</li>
          </ul>
          You may request deletion of your data at any time by contacting <a href="mailto:support@intro-you.com" className="text-[#820080] underline ml-1">support@intro-you.com</a>
        </p>

        <h2 className="font-semibold text-xl text-[#820080] mb-2"> 10. Your Rights </h2>
        <p className="mb-2">
          Under the UK GDPR, you have the right to:

          <ul className="list-disc pl-5 space-y-1">
            <li>Access your personal data</li>
            <li> Correct or update your information</li>
            <li>Withdraw consent (for sensitive data)</li>
            <li>Request deletion of your account and data</li>
            <li> Object to or restrict processing in certain circumstances</li>
            <li>Lodge a complaint with the UK Information Commissioner’s Office (ICO)</li>

          </ul>
        </p>

        <h2 className="font-semibold text-xl text-[#820080] mb-2">  11. Data Security </h2>
        <p className="mb-2">
          We take appropriate technical and organisational measures to protect your data
          from unauthorised access, loss, misuse, or alteration. These include encryption, secure hosting,
          access controls, and internal policy enforcement.
        </p>

        <h2 className="font-semibold text-xl text-[#820080] mb-2"> 12. Age Restriction</h2>
        <p className="mb-2">
          IntroYou is strictly for users aged 18 and over. We do not knowingly collect or
          store data from individuals under the age of 18. If we become aware that a user is underage, we will
          delete the account and associated data immediately.
        </p>

        <h2 className="font-semibold text-xl text-[#820080] mb-2">  13. Third-Party Services</h2>
        <p className="mb-2">
          We may use third-party tools (e.g. analytics, customer support platforms)
          to operate the platform efficiently. These processors have access only to the data necessary for their
          function and are bound by confidentiality and data protection obligations.
        </p>

        <h2 className="font-semibold text-xl text-[#820080] mb-2"> 14. Contact Us</h2>
        <p className="mb-2">
          If you have questions or concerns about this Privacy Policy or how we handle your
          data, please contact:
        </p>

        <p className="mb-2"> Data Protection Officer (DPO) Intro International Group L.L.C-FZ, Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E. Email: <a href="mailto:support@intro-you.com" className="text-[#820080] underline ml-1">support@intro-you.com</a></p>

        <h2 className="font-semibold text-xl text-[#820080] mb-2"> 15. Updates to This Policy</h2>
        <p className="mb-2">
          We may update this policy from time to time to reflect changes in law,
          technology, or service practices. When we do, we will notify users via email or platform notices.
          Your continued use of the Service indicates your agreement to the updated terms.
        </p>
      </section>
    </main>


    {/* Footer */}
    <FooterApp />
  </div>
}

export default PolicyPage;