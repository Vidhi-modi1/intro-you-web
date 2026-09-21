import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logoImage from "figma:asset/1317259af126a2231a0e530aedf3b68e2e27ad9e.png";
import instagramIcon from "figma:asset/f7eaad85d15b011eed12057556a4b1ed5ee82bab.png";
import tiktokIcon from "figma:asset/e2588539a1e2311495c764cb38440d49056e7b2f.png";
import footerHeartIcon from "figma:asset/825ba557c87de8f2b4335468874e5eb17f98f401.png";
import FooterApp from "./FooterApp";
import HeaderApp from "./HeaderApp";

const TermsPage = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate()

  return <div className="min-h-screen bg-white">
    {/* Header */}
    <HeaderApp />

    {/* Main Content */}
    <main className="flex-1 max-w-4xl mx-auto px-6 py-12 text-gray-800 post-content">
      <h1 className="text-4xl font-bold mb-4 text-[#820080] text-center">
        Terms and Conditions of Use
      </h1>

      {/* -------------------- 1. Introduction -------------------- */}
      <section className="mb-6">
        <h2 className="font-semibold text-lg text-[#820080] mb-2">
          1. Introduction
        </h2>
        <p className="mb-2">
            Welcome to IntroYou, a premium matchmaking platform operated by Intro International Group 
            L.L.C-FZ, a UAE-registered company (referred to as “IntroYou”, “we”, or “us”). We provide 
            personal matchmaking and introduction services via our platform at
          <a href="https://intro-you.com" className="text-[#820080] underline ml-1">https://intro-you.com</a>.
        </p>
        <p className="mb-2">
All payments for our services are securely collected
by Triple AMT Group Ltd (Company No. 10502502),
a company registered in England and Wales with
its registered office at 20–22 Wenlock Road,
London, England, N1 7GU, acting solely as a
payment collection agent on our behalf. The
service itself is provided by Intro International
Group L.L.C-FZ, registered at Meydan Grandstand,
6th floor, Meydan Road, Nad Al Sheba, Dubai,
U.A.E.
        </p>
        <p>
        By using the platform, you agree to these Terms. If you do not agree, you must not use the service.
        </p>
      </section>

      {/* -------------------- 2. Definitions -------------------- */}
      <section className="mb-6">
        <h2 className="font-semibold text-lg text-[#820080] mb-2">2. Definitions</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>“Platform” / “Service” </strong>– The matchmaking website and services offered by IntroYou.</li>
          <li><strong>“User” / “Member” / “You” </strong>– Anyone who accesses, registers for, or uses the Platform.</li>
          <li><strong>“IntroYou” / “We” / “Us” </strong>– Intro International Group L.L.C-FZ, the service provider.</li>
          <li><strong>“Triple AMT Group Ltd” </strong>– The UK-based payment collection agent acting on behalf of 
          IntroYou.</li>
          <li><strong>“Membership Plans” </strong>– Our service tiers: Passive (Free), Complete Membership (One
            time), and Concierge (One-time).</li>
          <li><strong>“Match” </strong>– A suggested introduction made via the Platform.</li>
          <li><strong>“Message” </strong>– Any communication sent between matched users on the Platform.</li>
        </ul>
      </section>

      {/* -------------------- 3. Eligibility and Age Confirmation -------------------- */}
      <section className="mb-6">
        <h2 className="font-semibold text-lg text-[#820080] mb-2">
          3. Eligibility and Age Confirmation
        </h2>
        <p className="mb-2">
          <strong>3.1 Adult Only Service (18+):</strong> The IntroYou Service is strictly for adults <strong>aged 18 or over</strong>.
          By registering for an account or otherwise using the Platform, you represent and warrant that you are at least
          eighteen (18) years old and legally capable of entering into this agreement.
          We do not permit anyone under 18 to use IntroYou. You will be required to confirm your age during sign-up,
          and you will <strong>not be allowed to proceed</strong> without explicitly confirming that you are 18 or older. If
          we discover or have reason to suspect that a user is under 18, we reserve the right
          to suspend or terminate the account immediately.
        </p>
        <p>
          <strong>3.2 Legal Capacity:</strong> By using the Service, you also confirm that you have the right, 
          authority and capacity to agree to these Terms and to abide by them. You must not 
          have been previously prohibited by us from using the Service. The Service is 
          offered for personal use; you may not use it if you are barred by law from doing so 
          or if using the Service would violate any applicable laws or regulations in your 
          jurisdiction.
        </p>
      </section>

      {/* -------------------- 4. Account Registration and User Account Security -------------------- */}
      <section className="mb-6">
        <h2 className="font-semibold text-lg text-[#820080] mb-2">
            4. Account Registration and User Account Security 
        </h2>
        <p className="mb-2">
          <strong>4.1 Account Creation:</strong> To use certain features of IntroYou (such as creating a 
            profile or messaging matches), you must register and create a personal user 
            account. When creating an account, you will be asked to provide truthful, accurate, 
            current and complete information about yourself. This includes basic personal 
            details and <strong>matchmaking-related information</strong> about you, such as your <strong>religion, 
            sexuality, lifestyle preferences,</strong> and other personal attributes. We collect these 
            sensitive details solely to improve our matchmaking service and provide you with 
            more compatible handpicked match suggestions. The IntroYou service is not 
            offered to, marketed to, or intended for residents of the United Arab Emirates. All 
            services including matchmaking, user support, and platform operation are supplied 
            exclusively from the UAE by Intro International Group L.L.C-FZ, Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E. Payments may be 
            collected by a UK-based payment agent, but the place of supply remains the UAE.
            By creating an account and providing this information, <strong>you explicitly consent to 
            our collection and use of your sensitive personal data</strong> for matchmaking 
            purposes, in accordance with our Privacy Policy and applicable data protection 
            laws. If you do not consent to this, please do not provide such information or do 
            not use the Service.
        </p>
        <p className="mb-2">
          <strong>4.2 Accuracy of Information:</strong> You agree to provide accurate and truthful 
          information when registering and to keep your account information updated as 
          necessary. You must not create an account using false identity information, or on 
          behalf of someone other than yourself. <strong>Impersonation is strictly prohibited.</strong> Each 
          individual is allowed to maintain only one account; creating multiple accounts for 
          the same person without our permission is not allowed.
        </p>
        <p className="mb-2">
          <strong>4.3 Account Security: </strong> You are responsible for maintaining the confidentiality of 
            your account login credentials (username and password). You must not share your 
            password with anyone or permit others to access the Service through your 
            account. You agree to <strong>notify us immediately</strong> at our support contact if you suspect 
            any unauthorised access to or use of your account or any breach of security. You 
            are responsible for all activities that occur under your account, whether or not 
            authorised by you. IntroYou will not be liable for any loss or damage arising from 
            unauthorised use of your account, and you may be held liable for losses incurred 
            by us or others due to such unauthorised use.
        </p>
        <p className="mb-2">
          <strong>4.4 Account Use and Ownership:</strong> Your account is personal to you and may not 
            be transferred or assigned to any other person or entity. You agree not to allow 
            others to use your account. If you are creating an account on behalf of a business 
            or other entity (only if explicitly permitted by us in certain cases), you represent that 
            you have authority to bind that entity to these Terms (otherwise, only individual 
            personal accounts are allowed).
        </p>
        <p className="mb-2">
          <strong>4.5 Profile Information and Privacy:</strong> The information you provide in your profile 
              (except your login credentials and certain private data) may be visible to other 
              users of the Service. This includes the personal details and preferences you 
              choose to include in your dating profile. Please <strong>do not include contact details </strong>
              such as your last name, telephone numbers, email addresses, home or work 
              address, or social media handles in the public sections of your profile. For safety 
              and privacy, IntroYou may remove or hide any personal contact information you 
              post publicly on the Platform. Communication with other members should occur 
              via the Service’s messaging tools until you both mutually decide to share contact 
              details outside the Platform. Remember that any information you include in your 
              profile or share with matches is at your discretion; <strong>do not post anything you are 
              not comfortable being public or shared.</strong>
        </p>
        <p>
          <strong>4.6 Sensitive Data Handling:</strong> We understand that some of the information 
            collected during onboarding (such as religion or sexual orientation) may be 
            considered sensitive personal data. We handle this information in line with our 
            Privacy Policy and in compliance with applicable UK data protection laws, 
            including the Data Protection Act 2018 and UK GDPR. This data is processed 
            securely and only used for relevant matching purposes based on your preferences.
        </p>
      </section>

      {/* -------------------- 5. Services and Membership Plans -------------------- */}
      <section className="mb-6">
        <h2 className="font-semibold text-lg text-[#820080] mb-2">
        5. Services and Membership Plans 
        </h2>
        <p className="mb-2">
          <strong>5.1 Overview of Membership Plans: </strong>
          IntroYou offers multiple membership tiers to 
          cater to different user needs. Currently, we provide a <strong>Free Passive Plan</strong> and two 
          premium paid plans known as the <strong>Complete Membership Plan</strong> priced at £199.00 
          and <strong>Concierge Plan </strong>
           priced at £499.00. IntroYou uses a human-curated matchmaking model and does not rely on automated or algorithmic matching systems.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-2">
          <li>The <strong>Passive Membership:</strong> is free. You may be shown to others and 
          occasionally receive match suggestions.</li>
          <li>The <strong>Complete Membership </strong> (£199.00) is a one-time paid plan that includes 
            enhanced profile visibility and a personalised matchmaking experience. 
            Each match is thoughtfully hand-selected by our team based on your 
            unique preferences, values, and profile. While less intensive than the 
            Concierge service, it still offers tailored, human-led matching to help you 
            connect with the right kind of people.</li>
          <li>The <strong>Concierge Membership:</strong> (£499.00) is our most exclusive tier and offers 
          a fully bespoke matchmaking experience. You’ll receive direct support from 
          our matchmaking team, who will personally get to know you, fine-tune your 
          profile, and hand-curate each introduction. Every match is carefully selected 
          based on deep compatibility insights and your relationship goals. This 
          service is ideal for individuals who want a high-touch, human-led approach 
          with tailored guidance every step of the way.
          </li>
        </ul>
      </section>

      {/* -------------------- 6. Fees, Refunds and Cancellation Policy -------------------- */}
      <section className="mb-6">
        <h2 className="font-semibold text-lg text-[#820080] mb-2">
          6. Fees, Refunds and Cancellation Policy
        </h2>
        <p className="mb-2">
          <strong>6.1 Payment Obligations:</strong> When you choose to purchase a Complete Membership 
              plan or Concierge plan (or any other paid feature we may offer), you agree to pay 
              the one-time fee shown for that service. Payment must be made in full at the time 
              of purchase using one of the payment methods provided (e.g., credit/debit card). 
              You will receive a confirmation (on-screen and/or via email) once your payment is 
              successfully processed and your premium membership is activated.
        </p>
        <p className="mb-2">
          <strong>6.2 No Refunds Policy:</strong> All fees and charges for IntroYou memberships or services 
are final and non-refundable. This applies to all tiers – Free, Complete Member, 
Concierge – though of course free users incur no charges. Once you have made a 
payment for a Complete Membership plan or Concierge plan, you will not be 
eligible for a refund of that payment, whether in full or pro-rated, <strong>under any 
circumstances,</strong> except in cases where a refund is required by law. For example, 
we do not provide refunds if you are dissatisfied with the Service, if you did not 
successfully find a match or partner, or if you simply change your mind after 
purchase. We urge you to review the features of each plan carefully before 
upgrading, and if you are unsure, you may wish to remain on the free plan until you 
are ready. Exception: If any applicable consumer law or regulation provides you a 
right of refund or cancellation that cannot be contractually excluded, we will 
honour such obligation. By purchasing a membership and <strong>immediately accessing 
our services,</strong> you agree that we may begin providing the services right away and 
that you thereby waive any statutory cancellation right that would otherwise apply 
(to the extent permitted by law). This is because our matchmaking service and 
benefits start immediately upon purchase of a premium plan.
        </p>
        <p className="mb-2">
          <strong>6.3 Upgrades and Downgrades:</strong> Because our plans are one-time purchases 
rather than ongoing subscriptions, “downgrading” doesn’t apply in the traditional 
sense (as you won’t be automatically billed again). If you are on the Free Passive 
plan, you can choose to upgrade to the Complete Membership plan or Concierge 
plan at any time by making the required payment. If you are a Complete member 
and wish to experience the Concierge service, you can separately purchase the 
Concierge Plan (contact us if you have questions about how existing Complete 
Membership benefits might be handled in that case). Note that purchasing a higher 
tier while already on another will not typically cancel the lower tier; since plans are 
one-off, you will simply have both sets of benefits (in practice, the higher tier 
usually encompasses all features of the lower tier plus more). We do not offer a 
partial refund or credit for choosing a lower tier after having a higher tier; e.g., if 
you bought Concierge, you cannot downgrade to Complete Membership and 
receive the difference back, as each purchase is independent.
        </p>
        <p className="mb-2">
          <strong>6.4 Account Termination and Forfeiture of Fees: </strong> If your account is terminated by 
              us due to your breach of these Terms or inappropriate conduct, you will <strong>not</strong> be 
              entitled to any refund of fees you have paid. Similarly, if you choose to delete your 
              account or terminate your use of the Service voluntarily, any unused time or 
              features of a paid plan are forfeited and not refundable. The no-refund policy 
              stands regardless of account status, so we encourage all users to abide by the 
              rules to avoid losing access without compensation.
        </p>
        <p>
          <strong>6.5 Chargebacks and Payment Disputes:</strong> You agree to contact us first and 
            attempt to resolve any payment-related issue by emailing our support team if you 
            believe a charge was made in error. In the event you dispute a charge with your 
            bank or credit card (by requesting a chargeback) without first providing us an 
            opportunity to address the issue, we reserve the right to suspend or terminate your 
            account. Initiating a chargeback for a valid fee may be interpreted as fraudulent 
            behaviour or an indication that you no longer wish to be a member. We further 
            reserve the right to pursue any amounts that are improperly refunded via 
            chargeback, and you may be responsible for any chargeback fees or costs 
            incurred by us as a result of your dispute. We will, of course, abide by financial 
            regulations and work with your bank to resolve genuine cases of fraud or theft of 
            your payment information.
        </p>
      </section>

      {/* -------------------- 7. Acceptable Use and User Conduct -------------------- */}
      <section className="mb-6">
        <h2 className="font-semibold text-lg text-[#820080] mb-2">
        7. Acceptable Use and User Conduct
        </h2>
        <p className="mb-2">
        We are committed to maintaining a respectful, safe, and lawful environment on 
IntroYou. By using our Service, you agree to follow these rules. Violating any of 
them may result in immediate suspension or termination of your account and 
removal of any offending content. 
        </p>
        <p className="mb-2">
          <strong>7.1 Lawful and Personal Use Only: </strong> You will use IntroYou <strong>only for personal, non
            commercial purposes</strong> and in a manner consistent with all applicable laws and 
            regulations. You may not use the Service for any unlawful purpose or for promotion 
            of illegal activities. You may not use the Service to recruit or solicit members for 
            any commercial enterprise, scheme, or competitive activity.  The Service is 
            intended for matchmaking between individual people for personal relationships; 
            any other use (such as business networking, solicitation, or data collection) is 
            prohibited without our explicit written consent.
        </p>
        <p className="mb-2">
          <strong>7.2 Prohibited Content and Activities: </strong> You must not post, upload, send, or 
          otherwise make available any Content or engage in any activity on the Service that:
          <ul className="list-disc pl-5 space-y-2 mb-2">
            <li><strong>Violates Laws or Rights: </strong> Is illegal or encourages any illegal activity; infringes 
or violates the rights of any other person or entity (including intellectual property 
rights and privacy/publicity rights).</li>
            <li><strong>False or Misleading: </strong> Contains false, misleading, or fraudulent information, 
impersonates any person or entity, or misrepresents your identity (including using 
profile photos of another person without permission, or otherwise catfishing).</li>
            <li><strong>Offensive or Obscene:</strong> Is defamatory, libellous, hateful, racially or ethnically 
offensive, harassing, threatening, or abusive; contains language or material that is 
obscene, pornographic (except non-explicit adult content in private messages if 
between consenting adults, but any illegal pornographic content is strictly 
forbidden), or content that is otherwise objectionable or contrary to public decency 
standards. You must not use derogatory slurs or attack others on the basis of race, 
religion, gender, sexual orientation, disability, etc.
            </li>
            <li><strong>Violent or Harmful:</strong> Contains or promotes excessive violence, or any content 
that is likely to upset, embarrass, disturb, or harass any other person. This includes 
content that could be considered bullying or stalking.</li>
            <li><strong>Discriminatory or Hateful:</strong> Promotes racism, bigotry, hatred, or physical harm 
            of any kind against any group or individual.</li>
            <li><strong>Sexually Inappropriate:</strong> While IntroYou is a curated matching making service, 
                it is not for overt sexual solicitation. You may not use the Service to proposition 
                any sexual services, and you may not send unsolicited sexually explicit material to 
                other users. Nude or sexually explicit images in your public profile are not allowed. 
                Any sharing of adult content in private messages should be consensual and lawful 
                (no minors, etc.), and if a user asks you to stop sending such content, you must 
                stop.</li>
            <li><strong>Privacy-Invasive:</strong> Contains another person’s personal information or data 
without their consent. For example, do not post someone else’s full name, contact 
details, photographs, or other personal data in any public area</li>
            <li><strong>Spam or Commercial:</strong> Constitutes unsolicited or unauthorised advertising, 
promotional materials, junk mail, spam, chain letters, pyramid schemes, or any 
other form of solicitation. You may not use the Service to advertise other 
businesses or dating services, nor to send repetitive messages to multiple users 
for a commercial purpose.</li>
            <li><strong>Malicious Code:</strong> Contains software viruses, worms, Trojan horses, spyware, or 
any other harmful code. You must not upload files or content that could damage or 
interfere with the operation of the Service or other users’ devices.  </li>
            <li><strong>Interference and Data Mining:</strong> Involves using automated scripts, bots, 
scrapers, or other automated means to access, collect information or otherwise 
interact with the Service without our express permission. You must not attempt to 
circumvent any security or access controls on the Platform, probe or test 
vulnerabilities, or disrupt the normal flow of dialogue or otherwise act in a manner 
that negatively affects other users' ability to engage in real time exchanges.</li>
          </ul>
        </p>

        <p className="mb-2">
          <strong>7.3 Respectful Interaction with Others:</strong> You agree to treat other users with 
          respect and courtesy. Specifically, you will not <strong>harass</strong> or <strong>abuse</strong> other members. If 
someone tells you they do not wish to communicate further, you must cease 
contacting them. IntroYou provides features (such as unmatch) to empower users 
to stop unwanted communication; you must not attempt to bypass a block by 
using another account or any other means. Any form of persistent harassment, 
stalking, intimidation, or threats towards other users is strictly forbidden.

        </p>

        <p className="mb-2">
          <strong>7.4 No Data Harvesting or Profiling: </strong> You may not collect or harvest any 
information about other users (including usernames, real names, email addresses, 
photos, or profile content) for any purpose without their express consent. The use 
of the Platform's information for any data mining or data gathering, especially for 
commercial or competitive purposes, is prohibited. Likewise, you must not use any 
information obtained from the Service to harm, abuse, or exploit any person.
        </p>
        <p className="mb-2">
          <strong> 7.5 Posting and Profile Guidelines: </strong> Any content you add to your profile or post in 
          the Service must adhere to these Terms. This means, for example, <strong>no explicit
            contact information in profiles</strong>, no copyrighted images or text you don't have 
rights to, and no offensive or illegal material. We reserve the right to review, 
approve, and remove profile content to ensure it meets our guidelines. Profile 
pictures should be of you (or include you) and should not be fake people or 
celebrities, etc. We may employ human moderators to screen profiles and content. 
However, we do not guarantee that all inappropriate content will be caught or 
removed immediately. Users should report any profiles that violate these rules.
        </p>

        <p className="mb-2">
          <strong>7.6 Reliance on Our Matching: </strong> Our matches are based on the information you 
provide and compatibility. While we work to deliver meaningful introductions, we 
do not guarantee outcomes. You are responsible for deciding whom to connect 
with and how to engage. Use your own judgment and common sense in all 
interactions..
        </p>

        <p className="mb-2">
          <strong>7.7 Reporting Misconduct: </strong> If you witness or experience any content or behaviour 
on the Service that violates these Terms or makes you feel unsafe, we encourage 
you to report it to us. You can report a user or content through the tools provided 
on the Platform (if available) or by contacting us directly. We will investigate reports 
and take appropriate action. However, please note that we are not responsible for 
user behaviour, and any action we take is at our discretion.
        </p>
      </section>

      {/* -------------------- 8. User Content and Intellectual Property Rights -------------------- */}
      <section className="mb-6">
        <h2 className="font-semibold text-lg text-[#820080] mb-2">
          8. User Content and Intellectual Property Rights
        </h2>
        <p className="mb-2">
        8.1 You retain ownership of all content you submit to IntroYou, including your 
profile information, photos, and other personal inputs. By uploading or sharing 
content on the platform, you grant us a worldwide, non-exclusive, royalty-free 
licence to use, modify, display, and distribute your content solely for the purpose 
of operating, improving, and promoting the Service. This includes, for example, 
showing your profile to potential matches, adjusting images for layout purposes, or 
using testimonials (only with separate consent). This licence continues even after 
you delete your content or close your account, though we will stop publicly 
displaying your content where reasonably practical, except where needed for 
backup, legal compliance, or internal use in anonymised form. 
        </p>
        <p className="mb-2">
        You are responsible for the accuracy, legality, and rights of any content you 
provide. You must not upload anything that infringes on others’ rights, is false or 
misleading, or violates our Acceptable Use standards. We may moderate or 
remove content that breaches these Terms, and repeated or serious violations may 
lead to suspension or termination of your account.

        </p>
        <p>
        IntroYou and its licensors retain all rights to the Service itself, including our brand, 
algorithms, designs, software, and proprietary matchmaking systems. You may not 
copy, reverse-engineer, or reuse any part of the platform beyond what is necessary 
to use the service as intended. All IntroYou trademarks and logos are owned by 
Intro International Group L.L.C-FZ and may not be used without our permission. 
The platform may contain content from other users or third parties, such as 
articles, ads, or links. We are not responsible for the accuracy or content of any 
third-party material or external websites, and you access them at your own risk. If 
you submit feedback, ideas, or bug reports, you agree we may use them freely to 
improve the Service without compensation or obligation.
        </p>
      </section>
      {/* -------------------- 9. Privacy and Data Protection -------------------- */}
      <section className="mb-6">
        <h2 className="font-semibold text-lg text-[#820080] mb-2">
        9. Privacy and Data Protection
        </h2>
        <p className="mb-2">
        Your privacy is very important to us. Our use of your personal data is governed by 
        our <strong> Privacy Policy</strong> (available on our website), which is hereby incorporated into 
these Terms by reference. By using the Service, you acknowledge that you have 
read and understood the Privacy Policy and you agree to the collection, use, 
storage, and disclosure of your information as described therein.
        </p>
        <p className="mb-2">
          <strong>9.1 Personal Data Collection: </strong> Your privacy matters deeply to us. By using IntroYou, you agree to the collection, 
use, and sharing of your personal information as described in our Privacy Policy , 
which is incorporated into these Terms. 
        </p>

        <p className="mb-2">
        We collect various types of personal data to deliver our matchmaking service — 
including basic details (e.g. name, age, location) and more sensitive attributes (e.g. 
religion, ethnicity, sexual orientation, lifestyle preferences) that you choose to 
share. This information helps us tailor matches based on compatibility. Providing 
such data is optional, but withholding it may limit the quality of your matches. By 
submitting this information, you consent to our processing of it. 
        </p>

        <p className="mb-2">
        Your data is used in line with UK data protection laws (including UK GDPR and the 
Data Protection Act 2018). We use it to build your profile, suggest matches, deliver 
match alerts, and improve the service. Some profile information will be visible to 
other users (e.g. your first name, age, general location, and profile answers), but 
your private contact details are never shared by us. You decide when and if to 
share personal information with a match.
        </p>
        <p className="mb-2">
        Sensitive data (like religion or sexual orientation) is handled with extra care and 
only used to enhance your matchmaking experience. You can remove or update 
this data at any time. We store your information securely and only share it with 
trusted service providers (e.g. payment processors or hosting platforms) who help 
us operate the Service — never for advertising resale. 
        </p>

        <p className="mb-2">
        We employ reasonable security measures, but no system is completely foolproof. 
You’re responsible for protecting your password and account. Likewise, if you 
choose to share information with other users, we can’t control how they use it — 
so always proceed cautiously and follow our safety tips. For full details on your 
rights or to make a privacy-related request (such as data access, correction, or 
deletion), please refer to our Privacy Policy or contact us using the details in 
Section 16.
        </p>
      </section>

      {/* -------------------- 10. Account Suspension and Termination -------------------- */}
      <section className="mb-6">
        <h2 className="font-semibold text-lg text-[#820080] mb-2">
        10. Account Suspension and Termination 
        </h2>
        <p className="mb-2">
        10.1 We reserve the right to suspend or terminate your account at any time if you 
violate these Terms or engage in behaviour that harms our platform, users, or 
reputation. This includes harassment, abuse, fraud, hate speech, impersonation, 
illegal content, or misuse of the Service as outlined in our Acceptable Use policy. 
        </p>
        <p className="mb-2">
        Serious violations — such as impersonation, underage use, scams, or illegal 
content — may result in immediate and permanent removal without notice. We 
may also take action due to legal requests, non-payment, security issues, or 
prolonged inactivity.
        </p>
        <p className="mb-2">
        If your account is suspended, you may lose access to some or all features. If 
terminated, your access will be revoked entirely and your profile and data may be 
deleted. No refunds will be issued if termination is due to a breach of these Terms. 
We may also prohibit you from registering again. 
        </p>
        <p className="mb-2">
        You may delete your own account at any time through your settings or by 
contacting us. If you do, your profile will be removed from public view, but some 
data may be retained securely for legal or operational reasons. No refunds will be 
issued for unused time on a paid plan.
        </p>
        <p className="mb-2">
        If you believe your account was wrongly terminated, you may appeal by contacting 
us. We will review the case and decide at our discretion — our decision will be 
final. IntroYou also reserves the right to modify, suspend, or discontinue the 
Service entirely. If we shut down the platform (not due to your misconduct), we will 
try to notify paid users in advance and may offer a partial refund for unused 
services.
        </p>
      </section>

      {/* -------------------- 11. Disclaimers -------------------- */}
      <section className="mb-6">
        <h2 className="font-semibold text-lg text-[#820080] mb-2">11. Disclaimers</h2>
        <p className="mb-2">
          <strong>11.1 Service Provided "As Is": </strong> IntroYou is provided on an <strong>"as is" and "as
            available"</strong> basis to the maximum extent permitted by law. While we strive to 
            provide a high-quality, enjoyable service, <strong>we make no warranty or 
            representation </strong> that (a) the Service will meet your expectations or achieve any 
specific results (such as finding you a perfect match or any partner at all), (b) the 
Service will be uninterrupted, timely, secure, or error-free, (c) the information or 
content obtained through the Service will be accurate or reliable, or (d) any defects 
or errors in the Service will be corrected.
        </p>



        <p className="mb-2"><strong>11.2 No Warranty of Outcomes: </strong> IntroYou <strong>does not guarantee any specific
            outcomes</strong>  from the use of the Service. Matchmaking is a subjective and personal 
process; compatibility and chemistry between people cannot be assured by any 
platform. We provide tools and suggestions to help you meet new people, but we 
do not promise that you will find a date, relationship, companionship, or otherwise 
successfully meet someone to your liking. Any decisions you make or actions you 
take in reliance on any matches or communications through the Service are 
entirely at your own risk.
        </p>

        <p className="mb-2">
          <strong> 11.3 User Content and Conduct: </strong>IntroYou is a platform designed to facilitate 
meaningful introductions between users. We take user safety and authenticity 
seriously — every profile is manually reviewed by our team before being approved. 
However, while we make every reasonable effort to ensure the accuracy and 
legitimacy of user profiles, we cannot guarantee that all users are who they claim 
to be or that false information will never slip through. Misrepresentation remains a 
risk on any online platform. We urge you to exercise caution in all interactions and 
use your judgement when communicating with others. IntroYou is not responsible 
for the accuracy of user-generated content, which does not necessarily reflect our 
views or opinions.
        </p>

        <p className="mb-2">
          <strong>11.4 No Liability for User Actions: </strong>You acknowledge that interactions with other 
          users, whether online or in person, are solely at your own risk. IntroYou <strong> is not 
          responsible or liable for the conduct of any user </strong> on or off the Platform. We do 
not conduct criminal background checks on users at this time (unless explicitly 
stated otherwise as a feature), nor do we inquire into the backgrounds of all our 
users. We do not make any warranties as to the character or veracity of individuals 
you may meet through our Service. You should always use due diligence and 
common sense when deciding to communicate with or meet in person with 
another user. For example, we recommend you initially use the in-platform 
messaging, then maybe a phone/video call, and only meet in a public place once 
you feel comfortable. Never divulge financial information and never send money to 
people you have only met online, no matter how convincing their story may be.
        </p>

        <p className="mb-2">
          <strong>11.5 Community Guidelines and Limitations: </strong>We maintain rules and tools to 
foster a safe community, but we cannot guarantee that other users will always 
abide by these rules. Some users may engage in inappropriate behaviour, and you 
may be exposed to content that you consider offensive or that violates our 
policies. While we may remove offending users or content when we become 
aware,<strong> we are not responsible for any failure or delay in removing such 
material.</strong> You hereby release IntroYou (and our employees, agents, affiliates, and 
partners) from any liability relating to the acts or omissions of other users. 
However, nothing in this clause is intended to limit any mandatory rights you may 
have as a consumer under law.
        </p>

        <p className="mb-2">
          <strong>11.6 Third-Party Services: </strong>Sometimes, IntroYou may integrate or recommend 
third-party services or content (for example, a payment gateway, identity 
verification service, external articles, etc.). We do not control those third parties 
and provide any such integration for convenience only. We disclaim all 
responsibility for the acts or omissions of any third-party service providers. Your 
use of any third-party services is subject to their terms of use and privacy policies, 
and it's your responsibility to review those before using such services.
        </p>
        <p className="mb-2">
          <strong>11.7 Technical Issues: </strong>While we aim for a smooth experience, you acknowledge 
that the Service may occasionally be subject to interruptions, delays, or errors due 
to technical issues, maintenance, or factors outside our control. We will not be 
liable for any loss or damage caused by an interruption or malfunction of the 
Service, although we will make reasonable efforts to support and restore the 
Service in a timely manner.
        </p>
        <p className="mb-2">
          <strong>11.8 No Implied Warranties: </strong>To the fullest extent allowed by law, we specifically 
disclaim all warranties of any kind, whether express, implied or statutory, including 
but not limited to any warranties of merchantability, satisfactory quality, fitness for 
a particular purpose, non-infringement, quiet enjoyment, or accuracy of data. No 
advice or information, whether oral or written, obtained by you from us or through 
the Service shall create any warranty not expressly stated in these Terms.
        </p>
      </section>

      {/* -------------------- 12. No Guarantee of Match Outcomes -------------------- */}
      <section className="mb-6">
        <h2 className="font-semibold text-lg text-[#820080] mb-2">
        12. No Guarantee of Match Outcomes 
        </h2>
        <p className="mb-2">
        While aspects of this have been covered above, we want to clearly restate our 
        policy regarding matchmaking results:
        </p>
        <p className="mb-2">
        IntroYou makes no guarantee that you will find a successful match, date, partner, 
or relationship through the Service. Every user’s journey is different. Match 
outcomes depend on many personal factors beyond our control – including effort, 
compatibility, chemistry, and sometimes pure chance. Any introductions or 
suggestions made through our platform are based on the information available and 
our human-led curation process, but they do not constitute promises or 
assurances of any specific result.
        </p>
        <p className="mb-2">
        Furthermore, IntroYou is not responsible for what happens in your interactions with 
other users, whether online or offline. For example, if you meet someone in person 
after matching, the quality or consequences of that interaction remain your own 
responsibility. We urge all users to approach connections with openness, but also 
with common sense, caution, and realistic expectations.
        </p>
        <p className="mb-2">
        If you have a disappointing experience, please understand that this is not grounds 
for compensation or refund under our No Refunds policy. However, we welcome 
constructive feedback, and if another user behaves inappropriately or 
misrepresents themselves, we encourage you to report it so our team can take 
appropriate action.
        </p>
      </section>

      {/* -------------------- 13. Limitation of Liability -------------------- */}
      <section className="mb-6">
        <h2 className="font-semibold text-lg text-[#820080] mb-2">
        13. Limitation of Liability 
        </h2>
        <p className="mb-2"><strong>13.1 Exclusion of Certain Types of Damages:</strong>
        To the fullest extent permitted by 
law, Intro International Group L.L.C-FZ, Triple AMT Group Ltd, and all affiliated 
entities, officers, employees, partners, agents, and licensors ("IntroYou Parties") 
will not be liable for any indirect, incidental, special, consequential, punitive, or 
exemplary damages. This includes any loss of profits, revenue, goodwill, 
opportunities, or data—whether arising directly or indirectly—resulting from your 
use (or inability to use) the Service or your interactions with other users. This 
applies even if we have been advised of the possibility of such damages and 
regardless of the legal basis (contract, tort, negligence, strict liability, etc.).
        </p>
        <p className="mb-2"><strong>13.2 Cap on Liability: </strong>
        Except for the types of liability that cannot be limited by law 
        (described in Section 13.3 below), <strong>  the maximum aggregate liability of the 
IntroYou Parties to you for all claims arising out of or relating to the Service or 
these Terms</strong> will be limited to the greater of: (a) the total amount you have paid to 
us for the Service in the <strong>twelve (12) months</strong> prior to the event or circumstance 
giving rise to your claim; or (b) <strong>£100 GBP</strong> (one hundred British Pounds). If you have 
not paid any amount to us (for example, if you are a free member and have not 
made any purchases), our total liability to you under this agreement or related to 
the Service shall not exceed £100. This cap on liability applies cumulatively to all of 
your claims, meaning it is a maximum for everything in the aggregate, not per 
claim. You acknowledge and agree that the pricing of any paid services (if 
applicable) reflects this allocation of risk and the limitation of liability specified 
herein, and that we would not provide the Service to you without such limitations.
        </p>

        <p className="mb-2"><strong> 13.3 Non-Excludable Liability: </strong>
        Nothing in these Terms shall exclude or limit any 
        liability which <strong>cannot be excluded or limited by law.</strong>. In particular, <strong>we do not 
        exclude or limit</strong> liability for: (i) death or personal injury caused by our negligence, 
or the negligence of our employees or agents; (ii) fraud or fraudulent 
misrepresentation; or (iii) any other liability to the extent that such liability cannot 
be excluded or limited under applicable law (for example, under the Consumer 
Rights Act 2015 or other consumer protection laws that may apply). The provisions 
of this Section 13 are subject to this important caveat.
        </p>
        <p className="mb-2"><strong> 13.4 Consumer Rights: </strong>
        As a consumer, you may have certain legal rights that 
cannot be waived or limited by contract. These Terms are not intended to override 
any statutory rights you have as long as those rights apply to the relationship 
between you and us. In the event that any provision of these Terms is found to 
contradict a mandatory right or requirement under applicable law, that provision 
shall be interpreted in such a way as to give maximum effect to the original intent 
permitted by law, and if it cannot be interpreted in a compliant way, it shall be 
severed (removed) from the agreement as per Section 15, and the rest of the Terms 
shall remain valid.
        </p>
        <p className="mb-2"><strong>13.5 Indemnity:  </strong>
          You agree to <strong>indemnify, defend, and hold harmless</strong> IntroYou, 
Intro International Group L.L.C-FZ, Triple AMT Group Ltd, and our respective 
directors, officers, employees, and agents from and against any and all complaints, 
demands, claims, damages, losses, costs, liabilities, and expenses (including 
reasonable solicitor’s fees) arising out of or relating to: (a) your use or misuse of the 
Service; (b) your breach of these Terms or violation of any applicable law or 
regulation; (c) your infringement or violation of any rights of a third party (for 
example, posting someone else’s copyrighted material, or violating another user’s 
privacy or rights); or (d) any content you post or share on the Platform. We reserve 
the right, at your expense, to assume the exclusive defence and control of any 
matter otherwise subject to indemnification by you (in which case you agree to 
cooperate with our defence of such claim). You agree not to settle any such matter 
without our prior written consent. This indemnification obligation will survive any 
termination of your account or of the Service.
        </p>
      </section>

      {/* -------------------- 14. Dispute Resolution -------------------- */}
      <section className="mb-6">
        <h2 className="font-semibold text-lg text-[#820080] mb-2">
          14. Dispute Resolution
        </h2>
        <p className="mb-2">
          <strong>14.1 Initial Resolution Efforts:</strong> If you have a complaint or dispute with IntroYou or
          another user related to the Service, we encourage you to <strong>contact us first</strong> to 
attempt to resolve the issue informally. Often, issues can be resolved quickly 
through our customer support without the need for legal action. You can reach our 
support team via email at Support(@)Intro-you.com. Please provide as much detail 
as possible about your concern to assist us in resolving it.
        </p>
        <p className="mb-2">
          <strong>14.2 Mediation (Optional): </strong> If a dispute arises between you and IntroYou that 
cannot be resolved through customer support interactions, we may suggest (but 
not require) mediation or an alternative dispute resolution (ADR) mechanism as a 
faster and lower-cost alternative to court. Any such process would be voluntary 
and would require agreement by both you and us. If agreed, a neutral third-party 
mediator or ADR service could help facilitate a settlement. This is not mandatory, 
but it is an option we may propose depending on the nature of the dispute.
        </p>
        <p className="mb-2">
          <strong> 14.3 Court Proceedings: </strong> In the event any dispute is not resolved informally or 
through an agreed ADR, either party may pursue legal remedies in accordance 
with Section 15.2 (Governing Law and Jurisdiction) below. These Terms do not 
require arbitration or any waiver of your right to go to court (we have not included a 
binding arbitration clause, given the UK context, unless it is separately agreed in a 
specific case).
        </p>
        <p className="mb-2">
          <strong> 14.4 No Class Actions: </strong> You and IntroYou agree that any proceedings to resolve or 
          litigate any dispute will be conducted <strong>solely on an individual basis</strong>, and not in a 
class, consolidated, or representative action. This means neither you nor we shall 
join a claim with the claim of any other person or entity, or bring a claim as a 
representative of a class or in a private attorney-general capacity on behalf of 
others, to the extent permitted by law. (Note: This clause is intended to prevent 
class action litigation, but if such a waiver of class actions is not permitted by 
applicable law in some circumstances, it would not apply in those circumstances.)</p>
        <p className="mb-2">
          <strong>14.5 Injunctive Relief: </strong> Notwithstanding the above, we reserve the right to seek 
injunctive or equitable relief in any court of competent jurisdiction to prevent or 
stop any misuse of our intellectual property or other violations of these Terms that 
could cause irreparable harm (since in such cases monetary damages might not 
be a sufficient remedy).
        </p>
      </section>

      {/* -------------------- 15. Governing Law and Jurisdiction -------------------- */}
      <section className="mb-6">
        <h2 className="font-semibold text-lg text-[#820080] mb-2">
        15. Governing Law and Jurisdiction 
        </h2>
        <p>
        15.1 The IntroYou matchmaking service is operated and supplied by Intro 
International Group L.L.C-FZ, a company established in Dubai, (UAE). All services, 
including curation, moderation, and user support, are delivered from outside the 
United Kingdom. However, for the convenience and protection of our UK-based 
customers, these Terms are governed by the laws of England and Wales, and any 
disputes will be subject to the jurisdiction of the English courts. This does not 
affect your statutory rights as a UK consumer. Payments for the service may be 
processed by Triple AMT Group Ltd, a UK-based entity acting solely as a payment 
collection agent on behalf of the UAE-based service provider. Triple AMT Group 
does not supply the service itself.
        </p>
      </section>

      {/* -------------------- 16. Miscellaneous Provisions -------------------- */}
      <section className="mb-6">
        <h2 className="font-semibold text-lg text-[#820080] mb-2">
          16. Miscellaneous Provisions
        </h2>
        <p className="mb-2">
          <strong>16.1 Entire Agreement: </strong> These Terms (along with the Privacy Policy and any other 
policies or guidelines we may provide within the Service from time to time, which 
are incorporated by reference) constitute the <strong>entire agreement</strong> between you and 
IntroYou regarding your use of the Service. They supersede any and all prior 
agreements, understandings, or arrangements between you and us, whether 
written or oral, in relation to the Service. You acknowledge that you have not relied 
on any representation, warranty, or promise not expressly set out in these Terms.
        </p>
        <p className="mb-2">
          <strong>16.2 Severability: </strong> If any provision of these Terms is found by a court or competent 
authority to be invalid, illegal, or unenforceable, that provision (or the offending part 
of it) shall be deemed deleted or modified to the minimum extent necessary, and 
the remaining provisions of the Terms will continue in full force and effect. In other 
words, the invalid part will be severed, but the rest of the agreement remains valid 
and enforceable. If a provision can be interpreted in two ways, one of which would 
make it invalid and one of which would make it valid, we intend for the valid 
interpretation to be used.
        </p>
        <p className="mb-2">
          <strong>16.3 No Waiver: </strong> Our failure or delay in exercising any right, power, or remedy 
provided by these Terms or by law shall not constitute a waiver of that or any other 
right, power, or remedy. Similarly, if we do exercise any right or remedy (in part or 
in full), it does not prevent us from exercising that right or any other right in the 
future. To be clear: if you break one of these Terms and we don’t immediately take 
action, it does not mean we are waiving our rights (such as the right to enforce that 
term later or enforce other terms).
        </p>
        <p className="mb-2">
          <strong>16.4 Assignment: </strong> You may not assign or transfer any of your rights or obligations 
under these Terms to any third party without our prior written consent. Any attempt 
by you to assign, transfer, or delegate these Terms without consent will be null and 
void. IntroYou (Intro International Group L.L.C-FZ) has the right to assign or 
transfer its rights and obligations under these Terms (in whole or in part) to any 
third party as part of a merger, acquisition, sale of business or assets, or by 
operation of law, or otherwise. In such cases, we will ensure that your rights are 
not reduced under the Terms and will provide notice to you if required by law.
        </p>
        <p className="mb-2">
          <strong>16.5 Relationship of Parties: </strong>Nothing in these Terms is intended to create any 
agency, partnership, joint venture, or employment relationship between you and 
IntroYou. You and IntroYou are independent contracting parties. You have no 
authority to bind IntroYou or to act on our behalf, and vice versa.
        </p>
        <p className="mb-2">
          <strong>16.6 Third-Party Rights: </strong> A person who is not a party to these Terms (except for 
Triple AMT Group Ltd solely in its role as payment agent, and affiliates of IntroYou 
where applicable) has no right under the UK Contracts (Rights of Third Parties) Act 
1999 (or any equivalent legislation) to enforce any term of these Terms. This means 
that only you and IntroYou (and our permitted assignees) have the right to enforce 
the provisions of this agreement; no third party (except as explicitly stated) can 
claim benefit or enforce any part of these Terms. For clarity, while Triple AMT 
Group Ltd is mentioned in these Terms in relation to payment, it is acting on behalf 
of IntroYou’s operator and is not intended as a separate contracting party giving 
promises directly to users – the contract remains between you and the service 
provider (Intro International Group L.L.C-FZ).
        </p>
        <p className="mb-2">
          <strong>16.7 Notices: </strong> We may provide you with notices or communications about the 
Service and these Terms electronically: for example, via email (to the address 
associated with your account) or via notifications within the Platform. Electronic 
notices are considered received by you within 24 hours of the time posted or sent. 
If we need to send a notice by postal mail (for instance, if required by law), it will be 
to the address you have on file with your account or any other address you provide 
for that purpose. You are responsible for keeping your contact information up to 
date. For notices you need to send to us under these Terms or for any questions 
about these Terms, please refer to Section 17 (Contact Information) below.
        </p>
        <p className="mb-2">
          <strong>16.8 Language: </strong> These Terms and any contract between us are only in the English 
language. If we provide a translation of these Terms into another language, it is for 
convenience, and the English text will govern in case of any conflict or discrepancy 
in interpretation.
        </p>
        <p className="mb-2">
          <strong>16.9 Headings: </strong> The headings used in these Terms (section titles, etc.) are for 
convenience and reference only. They do not form part of the Terms and will not 
affect the interpretation of any provisions.
        </p>
        <p className="mb-2">
          <strong>16.10 Survival: </strong> Any provisions of these Terms which by their nature should survive 
termination of this agreement (including but not limited to provisions regarding 
limitation of liability, indemnity, disclaimers of warranties, user content licenses, 
governing law, and dispute resolution) shall survive termination of your account or 
of the Service.
        </p>
      </section>

      {/* -------------------- 17. Contact Information -------------------- */}
      <section>
        <h2 className="font-semibold text-lg text-[#820080] mb-2">
          17. Contact Information
        </h2>
        <p className="mb-2">
        If you have any questions, concerns, complaints or feedback regarding these 
Terms or the IntroYou service, or if you need to contact us for any reason, please 
reach out to us using the information below:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Email:</strong>You can contact our customer support team via email at  <a href="mailto:support@intro-you.com" className="text-[#820080] underline">support@intro-you.com</a>
          (or through the support/contact form on the IntroYou 
website). We strive to respond to user inquiries promptly, typically within 2 
business days. (Please include your account email or username and the nature of 
your inquiry in any correspondence.)
          </li>

        </ul>
      </section>
    </main>


    {/* Footer */}
    <FooterApp />
  </div>
}

export default TermsPage;