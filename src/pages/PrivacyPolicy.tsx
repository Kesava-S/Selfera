import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#001e18] pt-32 pb-24 text-emerald-100/80 font-medium">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tightest leading-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/60 font-semibold">
              Effective Date: [Date to be added]
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#00f5c0]">Who We Are</h2>
            <p className="leading-relaxed">
              This privacy policy sets out how Selfera Ltd ("Selfera", "we", "us", "our") collects, uses, and protects personal information when you visit selfera.co.uk or use our services.
            </p>
            <p className="leading-relaxed">
              Selfera Ltd is the data controller responsible for the personal information described in this policy.
            </p>

            <h3 className="text-lg font-bold text-white pt-2">Company details</h3>
            <ul className="list-none space-y-1 text-sm sm:text-base">
              <li><strong>Company name:</strong> Selfera Ltd</li>
              <li><strong>Registered office:</strong> [UK registered office — to be added at registration]</li>
              <li><strong>Company registration number:</strong> [to be added at registration]</li>
              <li><strong>Trading website:</strong> selfera.co.uk</li>
            </ul>

            <h3 className="text-lg font-bold text-white pt-2">Pre-registration notice</h3>
            <p className="leading-relaxed">
              selfera.co.uk is currently operated by Automaitee Digital pending UK registration of Selfera Ltd (expected October 2026). All enquiries submitted through this site are handled by Automaitee Digital until Selfera Ltd is registered. Once registration is complete, Selfera Ltd will assume responsibility as the data controller and this notice will be removed.
            </p>

            <h3 className="text-lg font-bold text-white pt-2">Contact us</h3>
            <p className="leading-relaxed">
              For any questions about this privacy policy, to exercise your rights under UK data protection law, or to raise a concern about how we handle your personal information, please contact us at:
            </p>
            <p className="leading-relaxed font-bold text-white">
              Email: support@selfera.co.uk
            </p>
            <p className="leading-relaxed">
              Please include "Privacy" in the subject line so we can route your query to our Privacy Lead promptly.
            </p>

            <h3 className="text-lg font-bold text-white pt-2">Privacy Lead</h3>
            <p className="leading-relaxed">
              Selfera has appointed a named Privacy Lead responsible for overseeing compliance with this policy and UK data protection law. The Privacy Lead can be contacted through support@selfera.co.uk.
            </p>

            <h3 className="text-lg font-bold text-white pt-2">Complaints to the Information Commissioner's Office</h3>
            <p className="leading-relaxed">
              If you are unhappy with how we handle your personal data, we would like you to contact us first at support@selfera.co.uk so we can try to resolve the issue. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK's data protection regulator, at any time.
            </p>
            <ul className="list-none space-y-1 text-sm sm:text-base">
              <li><strong>Website:</strong> ico.org.uk</li>
              <li><strong>Phone:</strong> 0303 123 1113</li>
              <li><strong>Address:</strong> Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF</li>
            </ul>
          </section>

          <hr className="border-emerald-500/10" />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#00f5c0]">What Data We Collect</h2>
            <p className="leading-relaxed">
              We collect personal information in several ways. Some information you give us directly, some we collect automatically when you use our website, and some we receive from third parties. This section explains what we collect in each situation.
            </p>
            <p className="leading-relaxed">
              We only collect personal information that we need. If a field is optional, you can leave it blank and we will still be able to help you.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Information You Provide Directly to Us</h3>
            
            <h4 className="text-lg font-bold text-white pt-2">When you book a consultation with us</h4>
            <p className="leading-relaxed">If you use our consultation booking form, we collect:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
              <li>Your first and last name</li>
              <li>Your email address</li>
              <li>Your phone number</li>
              <li>Your business name</li>
              <li>Your business type or sector</li>
              <li>Your website URL</li>
              <li>The number of employees in your business</li>
              <li>Your preferred consultation date and time</li>
              <li>Any message or additional information you choose to share</li>
            </ul>

            <h4 className="text-lg font-bold text-white pt-2">When you contact us with a general enquiry</h4>
            <p className="leading-relaxed">If you use our general enquiries form, we collect:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
              <li>Your full name</li>
              <li>Your business email address</li>
              <li>Your company name</li>
              <li>The type of enquiry (for example, partnership, press, careers, general question, technical support, billing)</li>
              <li>Your WhatsApp number</li>
              <li>Your phone number (optional)</li>
              <li>Your message</li>
            </ul>

            <h4 className="text-lg font-bold text-white pt-2">When you sign up for our newsletter or download content</h4>
            <p className="leading-relaxed">We may offer newsletters, guides, or other downloadable resources on our website. When you sign up for these, we collect:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
              <li>Your full name</li>
              <li>Your business email address</li>
            </ul>
            <p className="leading-relaxed">
              You can unsubscribe at any time by clicking the link at the bottom of any email we send, or by contacting us at support@selfera.co.uk.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">When you become a client</h4>
            <p className="leading-relaxed">Once you engage Selfera to deliver services for your business, we collect additional information to onboard you as a client:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
              <li>Your full name, email address, and phone number</li>
              <li>Your home or business address (for invoicing and identity verification)</li>
              <li>Your business registration details</li>
              <li>Your VAT number, if applicable</li>
              <li>Details of individuals in your team who will use our services (for example, staff accounts on our dashboard)</li>
              <li>Signed contract information, including the names of authorised signatories</li>
            </ul>

            <h4 className="text-lg font-bold text-white pt-2">When we deliver services and communicate with you</h4>
            <p className="leading-relaxed">While we work with you, we collect and retain records of our communications, which may include:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
              <li>Emails sent to and from you</li>
              <li>WhatsApp messages exchanged with you or your team</li>
              <li>Phone call records and notes</li>
              <li>Video call recordings, where we have obtained your consent in advance</li>
              <li>Meeting notes, action items, and shared documents</li>
            </ul>

            <h4 className="text-lg font-bold text-white pt-2">When you make a payment</h4>
            <p className="leading-relaxed">
              We use trusted third-party payment providers to process payments. We do not store your card details directly. Depending on the payment method you use, we will share the necessary information with:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
              <li>Stripe — for card payments</li>
              <li>GoCardless — for direct debit payments</li>
            </ul>
            <p className="leading-relaxed">
              Both providers are responsible for securely handling your payment information under their own privacy policies.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Information We Collect Automatically</h3>
            <p className="leading-relaxed">
              When you visit selfera.co.uk, our website and hosting infrastructure automatically collect certain technical information. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
              <li>Your IP address</li>
              <li>Your browser type and version</li>
              <li>Your operating system</li>
              <li>Your device type (desktop, mobile, tablet)</li>
              <li>The website you came from before visiting ours</li>
              <li>Pages you visit on our website and how long you spend on each</li>
              <li>The date and time of your visit</li>
            </ul>
            <p className="leading-relaxed">
              We use cookies and similar technologies to collect some of this information. You can control cookies through our cookie banner and browser settings. Full details are in the Cookies section of this policy.
            </p>
            <p className="leading-relaxed">
              We currently use the following tools that may collect data about your visit:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
              <li>Google Analytics 4 — to understand how visitors use our website and improve the experience</li>
              <li>Meta Pixel — to measure the effectiveness of any advertising we run on Facebook and Instagram</li>
            </ul>
            <p className="leading-relaxed">
              Both tools only load if you consent to them through our cookie banner. If you decline, they will not run.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Information We Collect from Third Parties</h3>
            <p className="leading-relaxed">
              We may receive information about you from third parties in the following situations:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
              <li>Referrals from existing clients — where a client recommends you to us</li>
              <li>B2B lead generation platforms — such as LinkedIn Sales Navigator or similar services we use to identify prospective clients</li>
              <li>Public business directories — such as Companies House or industry directories</li>
              <li>Marketing partners — agencies or platforms that pass qualified leads to us</li>
            </ul>
            <p className="leading-relaxed">
              Where we receive information from third parties, we will let you know at the earliest opportunity what we have received and how we intend to use it.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Special Category Information</h3>
            <p className="leading-relaxed">
              Special category information includes information about health, biometric data, ethnicity, religion, sexual orientation, political opinions, trade union membership, and genetic data.
            </p>
            <p className="leading-relaxed">
              Selfera does not knowingly collect, process, or store special category information about you or any individual through our website or services.
            </p>
            <p className="leading-relaxed">
              If a client engages us to work with data that includes special category information relating to their own customers, staff, or third parties, we will only process that information under the client's instructions and in accordance with a written agreement. In this situation, our client is the data controller and we act as a data processor.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Children's Information</h3>
            <p className="leading-relaxed">
              Our website and services are intended for business owners and professionals. We do not knowingly collect information from anyone under the age of 18.
            </p>
            <p className="leading-relaxed">
              If you believe a child has provided personal information to us, please contact us at support@selfera.co.uk and we will delete it promptly.
            </p>
          </section>

          <hr className="border-emerald-500/10" />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#00f5c0]">How We Collect Your Personal Information</h2>
            <p className="leading-relaxed">
              We collect personal information through several channels. This section explains each of the ways your information reaches us, so you can understand exactly how we come to hold information about you.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Information You Provide to Us Directly</h3>
            
            <h4 className="text-lg font-bold text-white pt-2">Through forms on our website</h4>
            <p className="leading-relaxed">
              We collect personal information when you complete forms on selfera.co.uk. This includes our consultation booking form and our general enquiries form. From time to time, we may add other forms to the website for specific purposes. When we do, we will make clear at the point of collection what information we ask for and why.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">By email</h4>
            <p className="leading-relaxed">
              You can contact us directly at support@selfera.co.uk. When you email us, we receive your email address, any content in the email, any attachments you send, and any information visible in your email signature.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">By phone and WhatsApp</h4>
            <p className="leading-relaxed">
              If you call our business number or send us a WhatsApp message on +44 7570546554, we receive your phone number, the content of your message, and any media you share with us. We do not record phone calls. We take manual notes of important calls and store these in our customer records.
            </p>
            <p className="leading-relaxed">
              Messages sent through WhatsApp are routed through Meta's WhatsApp Business API infrastructure before they reach us. This means Meta processes your message on its servers as part of delivering it to us. Meta's own privacy policy applies to this processing.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">By post</h4>
            <p className="leading-relaxed">
              You can write to us by post. Where post is a channel you prefer, we will use it to respond to you and we will retain the correspondence in our records. Postal address details will be added once Selfera Ltd's UK registered office is confirmed.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">In video calls</h4>
            <p className="leading-relaxed">
              We hold video calls with prospective clients, clients, and partners using Zoom, Google Meet, or Microsoft Teams. During these calls we may see and hear you, and receive any content you share on screen. We do not record video calls unless we ask for and receive your consent in advance.
            </p>
            <p className="leading-relaxed">
              The video platform we use processes your call on its own servers before we see it. Each platform's own privacy policy applies to that processing.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">In person</h4>
            <p className="leading-relaxed">
              We attend industry events, meetings, and consultations in person. Where we exchange business cards, collect contact details, or take notes during in-person conversations, we retain that information in our records.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Information We Collect Automatically When You Use Our Website</h3>

            <h4 className="text-lg font-bold text-white pt-2">Through cookies and similar technologies</h4>
            <p className="leading-relaxed">
              When you visit selfera.co.uk, we and our approved third-party tools may place cookies and similar technologies on your device. These technologies collect information about how you interact with our website. Full details are set out in the Cookies section of this policy.
            </p>
            <p className="leading-relaxed">
              Automatic collection through these tools only takes place if you have given your consent through our cookie banner.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Through our website server and hosting infrastructure</h4>
            <p className="leading-relaxed">
              Our website is hosted by Vercel. Every visit to selfera.co.uk generates a server log entry that captures technical information about your visit. This is a standard part of how the internet works and happens automatically for every website you visit.
            </p>
            <p className="leading-relaxed">
              Server logs allow us to keep the website running, investigate errors, and protect against security threats.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Through our automation workflows</h4>
            <p className="leading-relaxed">
              When you submit a form on our website, your submission may pass through automation workflows we use to route your information to the right place inside our systems. These workflows run on our own infrastructure and are used to make sure your enquiry reaches the right person quickly.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Information We Receive from Third Parties</h3>

            <h4 className="text-lg font-bold text-white pt-2">From referrals</h4>
            <p className="leading-relaxed">
              An existing client, partner, or contact may pass your details to us as a recommendation. Where this happens, we will let you know at the earliest opportunity that we have received your information and how we intend to use it.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">From B2B lead generation platforms</h4>
            <p className="leading-relaxed">
              We may use platforms such as LinkedIn Sales Navigator or similar business tools to identify prospective clients whose businesses match the sectors we serve. Where we receive your professional contact information through these platforms, we rely on our legitimate interests to make initial contact, and you may object to this at any time.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">From public business directories</h4>
            <p className="leading-relaxed">
              We may look up business information about you or your company through public sources such as Companies House or industry directories.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">From marketing partners</h4>
            <p className="leading-relaxed">
              Where an agency or platform we work with passes qualified leads to us with your consent, we receive the information you agreed to share with them.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Information You Provide When You Become a Client</h3>
            <p className="leading-relaxed">
              Once you engage Selfera to deliver services, you will provide information directly during onboarding — through signed agreements, onboarding forms, calls, and emails. You may also enter information into our dashboard directly once your account is set up. Any information you provide through the dashboard is stored in your account and used to deliver the services you have engaged us for.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Combining Information from Different Sources</h3>
            <p className="leading-relaxed">
              We may combine information we receive from different channels to build an accurate picture of our relationship with you. For example, if you email us after submitting a form, we will link your email correspondence to your original form submission so we can respond in context.
            </p>
          </section>

          <hr className="border-emerald-500/10" />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#00f5c0]">Why We Use Your Personal Information and the Legal Basis for Doing So</h2>
            <p className="leading-relaxed">
              We only use your personal information where the law allows us to. Under UK data protection law, we must have a valid legal basis for every use of your information. This section explains what we do with your information, why, and the legal basis we rely on for each purpose.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Purposes and Legal Basis Summary</h3>
            <p className="leading-relaxed">
              The table below sets out each purpose we use your personal information for and the legal basis we rely on. Detailed explanations follow.
            </p>

            <div className="overflow-x-auto mt-4 mb-8">
              <table className="w-full text-left border-collapse border border-emerald-500/10">
                <thead>
                  <tr className="bg-emerald-500/5">
                    <th className="border border-emerald-500/10 p-3 text-white font-bold">Purpose</th>
                    <th className="border border-emerald-500/10 p-3 text-white font-bold">Categories of Data Used</th>
                    <th className="border border-emerald-500/10 p-3 text-white font-bold">Legal Basis</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Responding to your consultation booking</td>
                    <td className="border border-emerald-500/10 p-3">Contact details, business details, message content</td>
                    <td className="border border-emerald-500/10 p-3">Contract preparation (taking steps at your request before entering into a contract)</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Responding to general enquiries</td>
                    <td className="border border-emerald-500/10 p-3">Contact details, business details, message content</td>
                    <td className="border border-emerald-500/10 p-3">Legitimate interests (responding to enquiries about our services)</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Sending you newsletters and marketing content you have signed up for</td>
                    <td className="border border-emerald-500/10 p-3">Name, email address, preference data</td>
                    <td className="border border-emerald-500/10 p-3">Consent</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Marketing our related services to existing clients</td>
                    <td className="border border-emerald-500/10 p-3">Client contact details, service history</td>
                    <td className="border border-emerald-500/10 p-3">Legitimate interests (soft opt-in for existing customers, PECR)</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Contacting prospective clients we identify through third-party sources</td>
                    <td className="border border-emerald-500/10 p-3">Business contact details from public sources or platforms</td>
                    <td className="border border-emerald-500/10 p-3">Legitimate interests</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Onboarding you as a client</td>
                    <td className="border border-emerald-500/10 p-3">Full onboarding data, contract details</td>
                    <td className="border border-emerald-500/10 p-3">Contract performance</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Delivering the services you have engaged us for</td>
                    <td className="border border-emerald-500/10 p-3">Client business data, dashboard usage data</td>
                    <td className="border border-emerald-500/10 p-3">Contract performance</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Improving our products and services based on usage patterns</td>
                    <td className="border border-emerald-500/10 p-3">Aggregated and anonymised usage data</td>
                    <td className="border border-emerald-500/10 p-3">Legitimate interests</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Processing your payments</td>
                    <td className="border border-emerald-500/10 p-3">Payment information routed through Stripe or GoCardless</td>
                    <td className="border border-emerald-500/10 p-3">Contract performance and legal obligation</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Keeping financial and tax records</td>
                    <td className="border border-emerald-500/10 p-3">Invoices, payment records, transaction data</td>
                    <td className="border border-emerald-500/10 p-3">Legal obligation</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Running website analytics through Google Analytics 4</td>
                    <td className="border border-emerald-500/10 p-3">Website usage data, device information</td>
                    <td className="border border-emerald-500/10 p-3">Consent</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Measuring the effectiveness of our advertising through Meta Pixel</td>
                    <td className="border border-emerald-500/10 p-3">Website interaction data</td>
                    <td className="border border-emerald-500/10 p-3">Consent</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Operating our website securely and investigating errors</td>
                    <td className="border border-emerald-500/10 p-3">Server log data, IP address, technical information</td>
                    <td className="border border-emerald-500/10 p-3">Legitimate interests (recognised legitimate interest for network and information security under UK data protection law)</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Preventing and investigating fraud</td>
                    <td className="border border-emerald-500/10 p-3">Any relevant data</td>
                    <td className="border border-emerald-500/10 p-3">Legitimate interests and legal obligation</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Responding to legal requests from courts, regulators, or law enforcement</td>
                    <td className="border border-emerald-500/10 p-3">Any data legally required</td>
                    <td className="border border-emerald-500/10 p-3">Legal obligation</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Enforcing our contracts, resolving disputes, and pursuing unpaid fees</td>
                    <td className="border border-emerald-500/10 p-3">Client contact and transaction data</td>
                    <td className="border border-emerald-500/10 p-3">Legitimate interests</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-white pt-4">Detailed Explanation of Each Purpose</h3>

            <h4 className="text-lg font-bold text-white pt-2">Responding to your consultation booking</h4>
            <p className="leading-relaxed">
              When you book a consultation with us, we need to use the information you provide to schedule the meeting, understand your business, and prepare for the call. This is a step you have asked us to take before we potentially enter into a contract with you. Providing this information is not required, but if you do not provide it, we cannot arrange the consultation.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Responding to general enquiries</h4>
            <p className="leading-relaxed">
              When you contact us through our enquiries form, by email, or through WhatsApp, we use your information to respond to your question. Responding to enquiries is a standard business activity and we consider this a legitimate interest that does not override your rights. You can ask us to stop responding at any time.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Sending you newsletters and marketing content</h4>
            <p className="leading-relaxed">
              We only send marketing emails, newsletters, or promotional content if you have specifically asked us to. When you sign up, we ask for your active consent through a clear opt-in. You can unsubscribe at any time by clicking the link in any marketing email or by contacting us.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Marketing our related services to existing clients</h4>
            <p className="leading-relaxed">
              If you are already a client of ours, we may send you information about related services we think may be useful to your business. This is permitted under the "soft opt-in" rules in UK electronic marketing law. Every marketing message we send includes an easy way to unsubscribe.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Contacting prospective clients</h4>
            <p className="leading-relaxed">
              We may identify potential clients through professional networking platforms, business directories, referrals, and similar sources. Where we do, we contact you because your business matches the sectors we serve. This is our legitimate interest in growing our business. We use minimal information (name, business email, role, company). You have the right to object at any time by replying to the message or contacting us at support@selfera.co.uk.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Onboarding you as a client</h4>
            <p className="leading-relaxed">
              Once you engage Selfera to deliver services, we collect and use the information needed to set up your account, prepare and sign your contract, and provide the services you have hired us for. This processing is necessary to enter into and perform our contract with you.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Delivering our services</h4>
            <p className="leading-relaxed">
              While we deliver services under our contract with you, we use your information to run automations, provide dashboard access, communicate with your team, monitor performance, and everything else agreed in your contract. Without this information, we cannot deliver the service you are paying for.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Improving our products and services</h4>
            <p className="leading-relaxed">
              We look at how our dashboard and services are used across our client base to improve them over time. Where possible, we use anonymised or aggregated information for this. Where we cannot fully anonymise, we rely on our legitimate interest in improving our products. This does not affect the delivery of your services.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Processing your payments</h4>
            <p className="leading-relaxed">
              We use Stripe and GoCardless to process payments. We share the information they need to take payment from you (contact and payment method details). We keep records of payments as part of our contract with you and to meet our legal record-keeping duties.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Keeping financial and tax records</h4>
            <p className="leading-relaxed">
              UK law requires us to keep financial records for a minimum period (currently six years under HMRC rules and the Companies Act). We keep invoices, transaction records, and related information to meet these obligations.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Website analytics through Google Analytics 4</h4>
            <p className="leading-relaxed">
              We use Google Analytics 4 to understand how visitors use our website. This tool only loads on your device if you have accepted analytics cookies through our cookie banner. If you decline, no analytics data is collected about your visit.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Advertising measurement through Meta Pixel</h4>
            <p className="leading-relaxed">
              If we run advertising campaigns on Facebook or Instagram, we use Meta Pixel to measure how well those campaigns work. This tool only loads if you have accepted advertising cookies through our cookie banner.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Website security and error investigation</h4>
            <p className="leading-relaxed">
              Our hosting provider Vercel automatically records server logs for every visit. We use these logs to keep the website running, detect and investigate security threats, and fix problems. This is a standard operational activity for any website. UK data protection law specifically recognises this as a legitimate interest.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Fraud prevention</h4>
            <p className="leading-relaxed">
              If we identify suspicious activity, we may use your information to investigate and prevent fraud. This protects our business, our clients, and other users. UK data protection law recognises fraud prevention as a legitimate interest.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Legal requests</h4>
            <p className="leading-relaxed">
              If a court, regulator, or law enforcement agency asks us for information under valid legal authority, we may be required to provide it. We comply with these requests only where legally required.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Enforcing our contracts</h4>
            <p className="leading-relaxed">
              If a client does not pay their invoices or breaches their contract with us, we may need to use their information to pursue the debt, take legal action, or resolve the dispute. This is a legitimate business interest.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Choosing Not to Provide Information</h3>
            <p className="leading-relaxed">
              Where information is required to deliver a service or respond to your request, we will tell you at the point of collection. If you choose not to provide required information, we may not be able to help you.
            </p>
            <p className="leading-relaxed">
              For everything else (optional fields, marketing preferences, cookies), you can choose not to provide the information and we will still work with you.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Changing Your Mind</h3>
            <p className="leading-relaxed">
              Where our processing relies on your consent (marketing emails, cookies), you can withdraw that consent at any time. This does not affect any processing that has already happened based on your earlier consent. Details of how to withdraw consent are in the Your Rights section of this policy.
            </p>
          </section>

          <hr className="border-emerald-500/10" />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#00f5c0]">Who We Share Your Personal Information With</h2>
            <p className="leading-relaxed">
              We do not sell your personal information. We only share it in the specific circumstances set out below.
            </p>
            <p className="leading-relaxed">
              Where we share your information with a third party, we take steps to ensure they treat it with the same standards we do. This includes putting written data processing agreements in place and choosing providers who meet appropriate security and privacy standards.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Our Service Providers (Sub-Processors)</h3>
            <p className="leading-relaxed">
              We work with a small number of trusted service providers who process personal information on our behalf under our instructions. Each provider is bound by a written data processing agreement.
            </p>
            <p className="leading-relaxed">
              We keep an up-to-date list of our sub-processors on our website. You can view the current list at <Link to="/sub-processors" className="text-[#00f5c0] hover:underline">selfera.co.uk/sub-processors</Link>.
            </p>

            <p className="leading-relaxed mt-4 font-bold text-white">The categories of sub-processors we currently use include:</p>
            <ul className="list-none space-y-3 text-sm sm:text-base">
              <li>
                <strong>Website hosting and infrastructure</strong><br />
                Providers who host our website, run our automation workflows, store our files, and secure our systems.
              </li>
              <li>
                <strong>Database and storage</strong><br />
                Providers who store the personal information we hold in secure databases and file storage.
              </li>
              <li>
                <strong>Business communications and productivity</strong><br />
                Providers who supply our email, calendar, document, and internal collaboration tools.
              </li>
              <li>
                <strong>Payment processing</strong><br />
                Providers who process payments from clients to Selfera.
              </li>
              <li>
                <strong>Marketing and analytics platforms</strong><br />
                Providers who supply the tools we use for website analytics and, where you have consented, advertising measurement.
              </li>
              <li>
                <strong>AI service providers</strong><br />
                Providers who supply AI models and APIs we use to deliver our services. Only the specific information required for a task is sent, and only with appropriate contractual protections in place.
              </li>
              <li>
                <strong>Business platform APIs</strong><br />
                Providers whose platforms we access through APIs to deliver services to our clients, such as advertising platforms and professional networking platforms.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-white pt-4">Advance Notice of Changes to Sub-Processors</h3>
            <p className="leading-relaxed">
              When we add a new sub-processor, we will update our published sub-processor list at least 30 days before the change takes effect. Existing clients can request to be notified of updates by emailing support@selfera.co.uk.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Our Team and Contractors</h3>
            <p className="leading-relaxed">
              Members of our team and our contractors access personal information only where necessary to do their work. Everyone who accesses personal information on our behalf is bound by written confidentiality obligations and trained on data protection.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Professional Advisors</h3>
            <p className="leading-relaxed">
              We may share your information with our professional advisors where necessary. These include our accountants (for tax and financial record-keeping), our legal advisors (for advice or in the event of a dispute), and our insurers (for insurance purposes and in the event of a claim). Each of these advisors acts as an independent data controller and is bound by their own professional confidentiality duties.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Public Authorities and Legal Requirements</h3>
            <p className="leading-relaxed">
              We may share your information with courts, regulators, tax authorities, and law enforcement agencies where we are required by law to do so, or where we believe in good faith that sharing is necessary to comply with a legal obligation, protect someone's safety, or defend our legal rights.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Business Transfers</h3>
            <p className="leading-relaxed">
              If Selfera is ever sold, merged, restructured, or has any part of its business or assets transferred to another organisation, your personal information may be transferred as part of that transaction. If this happens, we will let you know in advance where possible, and the new owner will be bound by the same protections set out in this policy.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">International Transfers</h3>
            <p className="leading-relaxed">
              Some of our service providers and members of our team are located outside the United Kingdom. When your personal information is transferred outside the UK, we take steps to ensure it is protected to UK standards. Full details of how we handle international transfers are set out in the International Transfers section of this policy.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Where Selfera Acts as a Processor for Our Clients</h3>
            <p className="leading-relaxed">
              When we deliver services to a client, we sometimes handle personal information belonging to the client's own customers, staff, or contacts. In those situations, our client is the data controller and Selfera is a data processor acting under the client's instructions. We do not use that information for our own purposes.
            </p>
            <p className="leading-relaxed">
              If you are a customer, employee, or contact of one of our clients and you want to exercise your rights in relation to the information they hold about you, you should contact the client directly. We will support them in responding to your request as required by our agreement with them.
            </p>
          </section>

          <hr className="border-emerald-500/10" />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#00f5c0]">International Transfers of Your Personal Information</h2>
            <p className="leading-relaxed">
              Selfera is a UK company, but some of the service providers we work with and members of our team are located outside the United Kingdom. This means your personal information may be transferred to countries outside the UK.
            </p>
            <p className="leading-relaxed">
              Whenever we transfer your information outside the UK, we take the steps required by UK data protection law to ensure it continues to be protected to the same standard.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Where Your Information Goes</h3>
            <p className="leading-relaxed">
              The main destinations for international transfers of personal information at Selfera are:
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Within the United Kingdom</h4>
            <p className="leading-relaxed">
              Some of our providers and operations are based in the UK. No international transfer applies to these.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Within the European Union</h4>
            <p className="leading-relaxed">
              Some of our hosting and database infrastructure is located in the European Union. The UK has recognised the EU as providing an adequate level of protection for personal data, so these transfers do not require additional safeguards.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">United States</h4>
            <p className="leading-relaxed">
              Several of our providers (including our website host, AI service providers, payment provider, business productivity provider, and advertising platforms) are based in the United States. Transfers to these providers are protected in one of two ways:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
              <li>Where the provider is certified under the UK-US Data Bridge, transfers are covered by that framework</li>
              <li>Where the provider is not certified, we use the UK International Data Transfer Agreement (IDTA) or Standard Contractual Clauses with the UK Addendum</li>
            </ul>

            <h4 className="text-lg font-bold text-white pt-2">India</h4>
            <p className="leading-relaxed">
              Our subsidiary Selfera India Pvt Ltd, which handles technology and operations work, is based in India. India does not have a UK adequacy decision, so all transfers of personal information from Selfera UK Ltd to Selfera India Pvt Ltd are governed by a signed UK International Data Transfer Agreement (IDTA).
            </p>
            <p className="leading-relaxed">
              In addition, we have completed a Transfer Impact Assessment to identify any risks specific to India and implemented additional technical safeguards (including encryption in transit, encryption at rest for sensitive data, and access controls) to ensure your information is protected.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Selfera India Pvt Ltd</h3>
            <p className="leading-relaxed">
              Selfera India Pvt Ltd is a wholly-owned subsidiary of Selfera UK Ltd. It handles all technology, engineering, and operational delivery work for Selfera globally. Where our India team members access UK client data, it is only to deliver the services our UK clients have engaged us for.
            </p>
            <p className="leading-relaxed">
              Access from India is governed by the same IDTA and internal safeguards that apply to all our data transfers. All Selfera India team members are bound by written confidentiality obligations, receive data protection training, and can only access what they need for their specific role.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Occasional Support Access</h4>
            <p className="leading-relaxed">
              Where our India team needs to provide urgent technical support, troubleshoot an issue, or respond to a security incident affecting UK client data, that access is still governed by the IDTA and our internal safeguards. We do not grant any team member access to UK personal data outside these controls.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Onward Transfers</h3>
            <p className="leading-relaxed">
              Some of our sub-processors may engage their own service providers (fourth parties) to help deliver their services to us. Where this happens, our sub-processors are contractually required to ensure equivalent safeguards apply to any onward transfer of your information. We review our sub-processors' policies and contractual arrangements to make sure this is in place.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Notification of Changes</h3>
            <p className="leading-relaxed">
              When we add a new international transfer destination or change the safeguards we rely on, we update our sub-processor list at <Link to="/sub-processors" className="text-[#00f5c0] hover:underline">selfera.co.uk/sub-processors</Link> at least 30 days before the change takes effect.
            </p>
            <p className="leading-relaxed">
              Existing clients can request advance notification of changes by emailing <strong className="text-white">support@selfera.co.uk</strong>.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Your Rights Wherever Your Data Is</h3>
            <p className="leading-relaxed">
              Wherever your personal information is processed, your rights under UK data protection law continue to apply. You can exercise your rights by contacting us at <strong className="text-white">support@selfera.co.uk</strong>, and we will make sure your request is actioned regardless of where the data is physically located.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Copies of Our Safeguards</h3>
            <p className="leading-relaxed">
              You have the right to request a copy of the safeguards we rely on for international transfers, including our IDTA, Standard Contractual Clauses, or UK-US Data Bridge certifications. Some information may be redacted for confidentiality or legal reasons, but we will provide a meaningful summary of the protections in place.
            </p>
            <p className="leading-relaxed">
              To request a copy, email <strong className="text-white">support@selfera.co.uk</strong> with <strong className="text-white">"Transfer safeguards request"</strong> in the subject line.
            </p>
          </section>

          <hr className="border-emerald-500/10" />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#00f5c0]">How Long We Keep Your Personal Information</h2>
            <p className="leading-relaxed">
              We keep your personal information only for as long as we need it for the purposes we collected it for. When we no longer need it, we delete it or anonymise it so it can no longer identify you.
            </p>
            <p className="leading-relaxed">
              For some categories of information, UK law requires us to keep records for a minimum period. Where legal retention obligations apply, we keep the information for that period even if you ask us to delete it earlier. When the legal retention period ends, we delete the information.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Retention Periods by Category</h3>
            <p className="leading-relaxed">
              The table below sets out how long we keep different categories of personal information. If your information falls into more than one category, we apply the longest retention period.
            </p>

            <div className="overflow-x-auto mt-4 mb-8">
              <table className="w-full text-left border-collapse border border-emerald-500/10">
                <thead>
                  <tr className="bg-emerald-500/5">
                    <th className="border border-emerald-500/10 p-3 text-white font-bold">Category of Information</th>
                    <th className="border border-emerald-500/10 p-3 text-white font-bold">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Website server logs and technical data</td>
                    <td className="border border-emerald-500/10 p-3">90 days</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Website analytics data (Google Analytics 4)</td>
                    <td className="border border-emerald-500/10 p-3">14 months</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Cookies</td>
                    <td className="border border-emerald-500/10 p-3">Set individually for each cookie — see our Cookies section</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Consultation booking data (where the person does not become a client)</td>
                    <td className="border border-emerald-500/10 p-3">24 months from the booking date</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">General enquiries data (where the person does not become a client)</td>
                    <td className="border border-emerald-500/10 p-3">24 months from the enquiry date</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Newsletter subscribers (active)</td>
                    <td className="border border-emerald-500/10 p-3">For as long as you remain subscribed</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Newsletter unsubscribers</td>
                    <td className="border border-emerald-500/10 p-3">We delete your personal information immediately and keep only your email address on a suppression list so we do not accidentally contact you again</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Video call recordings (where consent was given)</td>
                    <td className="border border-emerald-500/10 p-3">12 months from the date of the call, unless required for a specific purpose</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Client contract and delivery records (during engagement)</td>
                    <td className="border border-emerald-500/10 p-3">For the duration of the engagement</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Client contract and delivery records (after engagement ends)</td>
                    <td className="border border-emerald-500/10 p-3">6 years from the end of the engagement</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Financial records, invoices, and tax records</td>
                    <td className="border border-emerald-500/10 p-3">6 years from the end of the accounting period (HMRC requirement)</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Email correspondence with clients and enquirers</td>
                    <td className="border border-emerald-500/10 p-3">6 years</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">WhatsApp business messages</td>
                    <td className="border border-emerald-500/10 p-3">6 years</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Marketing engagement data (opens, clicks, browsing)</td>
                    <td className="border border-emerald-500/10 p-3">For the duration of your subscription plus 6 months</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Employment records (Selfera India Pvt Ltd staff)</td>
                    <td className="border border-emerald-500/10 p-3">6 years after employment ends</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3">Cookie consent records</td>
                    <td className="border border-emerald-500/10 p-3">12 months from the date of consent</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-white pt-4">Data Held Solely to Meet Legal Obligations</h3>
            <p className="leading-relaxed">
              Where we keep information only because the law requires us to (for example, invoices kept to meet HMRC record-keeping duties), we restrict access to that information to authorised personnel. It is not used for any other purpose.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Backups</h3>
            <p className="leading-relaxed">
              For a short period after we delete your personal information from our live systems, a copy may remain in our secure backup systems. This copy is protected by the same security controls as our live systems, is not accessed for any operational purpose, and is deleted within 90 days as our backup cycles complete.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Automatic Deletion</h3>
            <p className="leading-relaxed">
              Our systems are designed to automatically delete or anonymise personal information at the end of its retention period. Where automatic deletion is not technically possible, we conduct regular reviews and delete manually.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Requests to Delete Your Information Sooner</h3>
            <p className="leading-relaxed">
              You have the right to ask us to delete your personal information before the retention period ends. Details of how to make this request are in the Your Rights section of this policy.
            </p>
            <p className="leading-relaxed">
              If any of your information is legally required to be retained (for example, invoices under HMRC rules), we cannot delete it before the legal retention period expires. Where this is the case, we will:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
              <li>Anonymise the information where possible so it can no longer identify you</li>
              <li>Delete everything not required by law</li>
              <li>Continue to keep only the minimum information required by law until the retention period ends</li>
              <li>Delete it as soon as the retention period expires</li>
            </ul>
            <p className="leading-relaxed">
              We will always explain to you what we can and cannot delete when we respond to your request.
            </p>
          </section>

          <hr className="border-emerald-500/10" />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#00f5c0]">Your Rights Over Your Personal Information</h2>
            <p className="leading-relaxed">
              UK data protection law gives you a number of rights over your personal information. This section explains what those rights are, when they apply, and how to exercise them.
            </p>
            <p className="leading-relaxed">
              We take your rights seriously. Where you make a valid request, we will action it as quickly as we can and always within the legally required timeframes.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">The Rights You Have</h3>

            <h4 className="text-lg font-bold text-white pt-2">The right to be informed</h4>
            <p className="leading-relaxed">
              You have the right to know how we use your personal information. That is exactly what this privacy policy is for.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">The right of access</h4>
            <p className="leading-relaxed">
              You have the right to ask for a copy of the personal information we hold about you, along with information about how we use it. This is known as a Subject Access Request.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">The right to rectification</h4>
            <p className="leading-relaxed">
              If any of your personal information is inaccurate or incomplete, you can ask us to correct it or fill in the missing details.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">The right to erasure</h4>
            <p className="leading-relaxed">
              You can ask us to delete your personal information. This is sometimes called the "right to be forgotten". Where UK law requires us to keep certain information (for example, invoices and tax records under HMRC rules), we cannot delete it until the legal retention period ends. Where this is the case, we will explain to you exactly what we can and cannot delete, and we will delete what we can.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">The right to restrict processing</h4>
            <p className="leading-relaxed">
              You can ask us to pause our processing of your personal information in certain situations, for example while a dispute or correction is being resolved.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">The right to data portability</h4>
            <p className="leading-relaxed">
              For information you have provided to us directly, and where we process it based on your consent or a contract with you, you have the right to receive that information in a machine-readable format (JSON or CSV) so you can move it to another service.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">The right to object</h4>
            <p className="leading-relaxed">
              You can object to our use of your personal information where we rely on legitimate interests. If we cannot show a strong reason to continue, we will stop.
            </p>
            <p className="leading-relaxed">
              You can also object to direct marketing at any time, and we will stop immediately. Your email address will remain on our suppression list only, to make sure we never contact you again by accident.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Rights related to automated decision-making</h4>
            <p className="leading-relaxed">
              Selfera does not make any decisions about you based solely on automated processing. Every significant decision that could affect you involves a human review by our team. Where automation is used to help us work efficiently, a human is always in the loop.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">The right to withdraw consent</h4>
            <p className="leading-relaxed">
              Where we process your personal information based on your consent (for example, marketing emails or non-essential cookies), you can withdraw your consent at any time. Withdrawing consent does not affect any processing we carried out before you withdrew it.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">The right to complain to the Information Commissioner's Office</h4>
            <p className="leading-relaxed">
              If you are unhappy with how we handle your personal information, we would like you to contact us first at <strong className="text-white">support@selfera.co.uk</strong> so we can try to resolve the issue. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK's data protection regulator, at any time.
            </p>

            <p className="leading-relaxed font-bold text-white mt-2">ICO contact details:</p>
            <ul className="list-none space-y-1 text-sm sm:text-base mb-4">
              <li><strong>Website:</strong> ico.org.uk</li>
              <li><strong>Phone:</strong> 0303 123 1113</li>
              <li><strong>Address:</strong> Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF</li>
            </ul>

            <h3 className="text-xl font-bold text-white pt-4">How to Exercise Your Rights</h3>
            <p className="leading-relaxed">
              To exercise any of your rights, contact us at <strong className="text-white">support@selfera.co.uk</strong> with <strong className="text-white">"Rights Request"</strong> in the subject line. Please tell us:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
              <li>Which right you want to exercise</li>
              <li>What personal information the request relates to</li>
              <li>Any relevant context that will help us action your request quickly</li>
            </ul>

            <p className="leading-relaxed mt-4">
              We may need to verify your identity before we can act on your request. This is to protect your information from being disclosed to someone who is not you. We will only ask for identity verification where it is appropriate for the type of request. For sensitive requests such as access, deletion, or portability, we may ask for proof of identity such as a photograph of a government-issued ID, or we may ask you to verify from an email address we already have on record.
            </p>
            <p className="leading-relaxed">
              If someone is making a request on your behalf (such as a solicitor or a family member), we will need to see valid written authorisation before we can act.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Response Format</h3>
            <p className="leading-relaxed">
              We will respond to your Subject Access Request or portability request in the format you prefer where possible. Standard options are:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
              <li>JSON (machine-readable, technical)</li>
              <li>CSV (spreadsheet-friendly)</li>
              <li>PDF (human-readable)</li>
            </ul>
            <p className="leading-relaxed mt-4">
              If you have a preference, please let us know when you make your request. If you do not tell us, we will provide the information in the format we consider most useful for your request.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">How Long We Take to Respond</h3>
            <p className="leading-relaxed">
              We will respond to your rights request within one month of receiving it. In some cases, if your request is particularly complex or you have made several requests, we may need up to two additional months. If this happens, we will let you know within the first month and explain why.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Cost</h3>
            <p className="leading-relaxed">
              Exercising your rights is normally free of charge. In limited circumstances, such as where a request is clearly excessive (for example, requesting the same information repeatedly), we may charge a reasonable fee to cover our administrative costs, or we may refuse to act on the request. If this applies, we will explain why and set out any fee before proceeding.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Where We Cannot Fully Action Your Request</h3>
            <p className="leading-relaxed">
              There are some situations where we may not be able to fully action your request. These include:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
              <li>Where UK law requires us to keep certain information</li>
              <li>Where the information is needed to defend legal claims</li>
              <li>Where the request would infringe the rights of another person</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Where this applies, we will explain what we can and cannot do, and we will always help you understand your remaining options, including your right to complain to the ICO.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Special Note on AI and Automation</h3>
            <p className="leading-relaxed">
              Because AI is central to how we deliver our services, we understand you may have specific questions about how automation affects your personal information. You have the right to ask:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
              <li>What AI systems have processed your information</li>
              <li>What outputs, decisions, or profiles have been generated</li>
              <li>Whether any of that information is used to improve our services in future</li>
            </ul>
            <p className="leading-relaxed mt-4">
              We will respond openly and fully. Where we use AI to help us work more efficiently, a human always makes the final decision on anything that affects you. If you would like more detail about how AI is used with your information, please ask us at <strong className="text-white">support@selfera.co.uk</strong>.
            </p>
          </section>

          <hr className="border-emerald-500/10" />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#00f5c0]">Cookies and Similar Technologies</h2>
            <p className="leading-relaxed">
              Our website uses cookies and similar storage technologies to help our site work, to understand how visitors use it, and where you consent, to measure the effectiveness of any advertising we run.
            </p>
            <p className="leading-relaxed">
              This section gives you a summary of how we use cookies. Our full Cookie Policy is available at <Link to="/cookie-policy" className="text-[#00f5c0] hover:underline">selfera.co.uk/cookie-policy</Link>, where you can also see the full list of cookies we use.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">What Cookies Are</h3>
            <p className="leading-relaxed">
              Cookies are small text files that a website places on your device when you visit. They allow the website to remember information about your visit, such as your preferences or actions.
            </p>
            <p className="leading-relaxed">
              We also use similar technologies including local storage, session storage, and web beacons. Throughout this policy, when we say "cookies", we mean all of these together.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Categories of Cookies We Use</h3>
            <p className="leading-relaxed">
              We group cookies into three categories:
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Strictly necessary cookies</h4>
            <p className="leading-relaxed">
              These cookies are essential for our website to work. They enable core functions like session management and security. Without these cookies, our website cannot function properly. These cookies do not require your consent and cannot be turned off.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Analytics cookies</h4>
            <p className="leading-relaxed">
              These cookies help us understand how visitors use our website by collecting information about pages viewed, how long visitors stay, and any errors they encounter. We use Google Analytics 4 for this purpose, with IP anonymisation enabled so we cannot identify individual visitors from analytics data alone. These cookies only load if you accept them.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Marketing cookies</h4>
            <p className="leading-relaxed">
              These cookies are used to measure the effectiveness of advertising we run on other platforms and to help those platforms show relevant content. We use Meta Pixel, LinkedIn Insight Tag, and Google Ads conversion tracking for this purpose. These cookies may follow you to other websites after you leave ours. These cookies only load if you accept them.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Your Cookie Choices</h3>
            <p className="leading-relaxed">
              When you first visit our website, our cookie banner asks for your consent before any non-essential cookies are placed. You can choose to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
              <li>Accept all cookies</li>
              <li>Reject all non-essential cookies</li>
              <li>Customise your choices by turning specific categories on or off</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Rejecting non-essential cookies does not affect your ability to use our website. It only means we cannot measure your visit or advertising effectiveness.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Changing Your Cookie Choices</h3>
            <p className="leading-relaxed">
              You can change your cookie preferences at any time by clicking the "Cookie preferences" link in the footer of any page. This will reopen the same choice screen so you can update your selection.
            </p>
            <p className="leading-relaxed">
              You can also delete cookies at any time through your browser settings. Instructions for each browser are available in our full Cookie Policy.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">How Long Cookies Last</h3>
            <p className="leading-relaxed">
              Different cookies last for different periods, from the length of a single visit to up to 12 months. The full list of cookies with their individual durations is available in our Cookie Policy at <Link to="/cookie-policy" className="text-[#00f5c0] hover:underline">selfera.co.uk/cookie-policy</Link>.
            </p>
            <p className="leading-relaxed">
              Your cookie consent choice is remembered for 12 months. After that, we will ask again.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Consent Records</h3>
            <p className="leading-relaxed">
              When you give or update your cookie consent, we record the choice you made, when you made it, and the version of our cookie policy at that time. This is required by law as evidence that consent was properly obtained. We keep these records for 12 months.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Third-Party Tracking</h3>
            <p className="leading-relaxed">
              Some of the cookies we use (marketing cookies) are placed by third parties such as Meta, Google, and LinkedIn. These providers may use the data they collect through our website to build profiles of your interests and show you relevant content on their own platforms and other websites.
            </p>
            <p className="leading-relaxed">
              To learn more about how these providers use your data, please see their own privacy policies:
            </p>
            <ul className="list-none space-y-1 text-sm sm:text-base mb-4">
              <li><strong>Google:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#00f5c0] hover:underline">policies.google.com/privacy</a></li>
              <li><strong>Meta:</strong> <a href="https://www.meta.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#00f5c0] hover:underline">meta.com/privacy</a></li>
              <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#00f5c0] hover:underline">linkedin.com/legal/privacy-policy</a></li>
            </ul>

            <h3 className="text-xl font-bold text-white pt-4">Server-Side Tracking</h3>
            <p className="leading-relaxed">
              We do not currently use server-side tracking, meaning we do not send information about your visit to third parties from our own servers. All tracking currently happens through cookies loaded in your browser, and only with your consent.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Do Not Track Signals</h3>
            <p className="leading-relaxed">
              Some browsers can send a "Do Not Track" signal to websites. There is no common standard for how websites should interpret these signals. Our website does not currently respond automatically to Do Not Track signals. However, you can achieve the same effect by rejecting non-essential cookies through our cookie banner.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Changes to How Cookies Work</h3>
            <p className="leading-relaxed">
              The way websites use cookies is changing. In particular, third-party cookies are being phased out by major browsers. As these changes take effect, we may update the cookies we use and how they work. We will update this section and our Cookie Policy to reflect any material changes.
            </p>
          </section>

          <hr className="border-emerald-500/10" />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#00f5c0]">How We Keep Your Personal Information Safe</h2>
            <p className="leading-relaxed">
              Protecting your personal information is a core part of how we operate. This section explains the measures we take to keep your information safe from unauthorised access, loss, misuse, or accidental disclosure.
            </p>
            <p className="leading-relaxed">
              We follow the security principles set out in UK data protection law and continuously review our approach as threats and technologies change.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Technical Measures</h3>
            <p className="leading-relaxed">
              We use technical safeguards designed to protect your information at every stage.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
              <li><strong>Encryption in transit</strong> — all data moving between your device, our website, and our systems is protected using industry-standard encryption protocols so it cannot be read if intercepted.</li>
              <li><strong>Encryption at rest</strong> — sensitive information stored in our systems is protected by encryption so it cannot be read if the underlying storage is compromised.</li>
              <li><strong>Access controls</strong> — only authorised team members can access personal information, and only what they need to do their job. We use role-based permissions to enforce this.</li>
              <li><strong>Two-factor authentication</strong> — every member of our team accessing Selfera systems must use two-factor authentication to sign in.</li>
              <li><strong>Password management</strong> — we use a dedicated password management tool to store credentials securely and enforce strong password policies.</li>
              <li><strong>Client data isolation</strong> — each of our clients has their own separate infrastructure. One client's data is never stored alongside another client's data. This means there is no risk of one client accidentally seeing another client's information.</li>
              <li><strong>Backups</strong> — we take encrypted backups regularly and test that we can restore from them. Backup data is protected with the same controls as our live systems.</li>
              <li><strong>Network security</strong> — our website is protected by a web application firewall and rate limiting to defend against automated attacks.</li>
              <li><strong>Vulnerability management</strong> — we monitor for known vulnerabilities in the tools and libraries we use and apply security updates promptly.</li>
            </ul>

            <h3 className="text-xl font-bold text-white pt-4">Organisational Measures</h3>
            <p className="leading-relaxed">
              Technical measures work alongside people and processes.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
              <li><strong>Written policies</strong> — we have documented data protection, HR, and project management policies that apply to everyone in our team.</li>
              <li><strong>Signed agreements</strong> — every team member and contractor signs a written agreement with confidentiality obligations before they access any personal information.</li>
              <li><strong>Training</strong> — everyone in our team completes data protection and security training as part of onboarding, and refresher training every year.</li>
              <li><strong>Least privilege access</strong> — team members only access the information they need for their specific role, and access is reviewed regularly.</li>
              <li><strong>Sub-processor due diligence</strong> — before we engage any service provider that will process personal information on our behalf, we assess their security posture and put a written data processing agreement in place.</li>
              <li><strong>Incident response plan</strong> — we have a documented plan for responding to security incidents, so we can act quickly if something goes wrong.</li>
              <li><strong>Regular review</strong> — we review our security measures at least annually and after any material change to our systems or services.</li>
            </ul>

            <h3 className="text-xl font-bold text-white pt-4">Physical Measures</h3>
            <p className="leading-relaxed">
              Our office is secured with controlled access and clean-desk practices are followed for sensitive documents. Workstations are encrypted and hardware is securely disposed of at the end of its life.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Responsible Disclosure</h3>
            <p className="leading-relaxed">
              If you are a security researcher and you believe you have found a security issue affecting Selfera, we want to hear from you. Please contact us at <strong className="text-white">support@selfera.co.uk</strong> with <strong className="text-white">"Security Report"</strong> in the subject line.
            </p>
            <p className="leading-relaxed">
              We appreciate researchers who report issues responsibly. If you follow our responsible disclosure process, we will:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
              <li>Acknowledge your report within 5 working days</li>
              <li>Keep you informed as we investigate and fix the issue</li>
              <li>Credit you for your finding if you would like us to</li>
              <li>Not pursue any legal action against you for good-faith research conducted under these terms</li>
            </ul>
            <p className="leading-relaxed mt-4">
              We do not currently offer paid rewards for security reports.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">In the Event of a Personal Data Breach</h3>
            <p className="leading-relaxed">
              If a personal data breach happens and is likely to result in a risk to individuals, we will notify the Information Commissioner's Office within the required 72-hour period.
            </p>
            <p className="leading-relaxed">
              If a personal data breach is likely to result in a high risk to your rights and freedoms, we will notify you without undue delay so you can take steps to protect yourself. We will explain what happened, what information was affected, what we are doing about it, and what you can do to protect yourself.
            </p>
            <p className="leading-relaxed">
              We keep an internal log of all personal data breaches, including those that do not require notification, so we can learn from every incident and prevent recurrence.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">No System Is Perfect</h3>
            <p className="leading-relaxed">
              No security measures can guarantee complete safety. What we can promise is that we take security seriously, we invest in it continuously, and we will always be honest with you if something goes wrong.
            </p>
            <p className="leading-relaxed">
              If you have any questions or concerns about how we protect your information, please contact us at <strong className="text-white">support@selfera.co.uk</strong>.
            </p>
          </section>

        </motion.div>
      </div>
    </div>
  );
}
