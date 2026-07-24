import { motion } from 'framer-motion';

export default function SubProcessors() {
  return (
    <div className="min-h-screen bg-[#001e18] pt-32 pb-24 text-emerald-100/80 font-medium">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tightest leading-tight mb-4">
              Selfera Sub-Processor List
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/60 font-semibold">
              Last updated: [DATE at publication]
            </p>
          </div>

          <section className="space-y-4">
            <p className="leading-relaxed">
              Selfera engages the following sub-processors to deliver our services. This list is updated at least 30 days before any change takes effect.
            </p>

            <div className="overflow-x-auto mt-4 mb-8">
              <table className="w-full text-left border-collapse border border-emerald-500/10">
                <thead>
                  <tr className="bg-emerald-500/5">
                    <th className="border border-emerald-500/10 p-3 text-white font-bold">Sub-Processor</th>
                    <th className="border border-emerald-500/10 p-3 text-white font-bold">Purpose</th>
                    <th className="border border-emerald-500/10 p-3 text-white font-bold">Location</th>
                    <th className="border border-emerald-500/10 p-3 text-white font-bold">Safeguard</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border border-emerald-500/10 p-3 font-semibold text-white">Vercel</td>
                    <td className="border border-emerald-500/10 p-3">Website hosting</td>
                    <td className="border border-emerald-500/10 p-3">United States</td>
                    <td className="border border-emerald-500/10 p-3">UK-US Data Bridge / SCCs</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3 font-semibold text-white">Hostinger</td>
                    <td className="border border-emerald-500/10 p-3">Automation workflow infrastructure (n8n) and email hosting</td>
                    <td className="border border-emerald-500/10 p-3">European Union</td>
                    <td className="border border-emerald-500/10 p-3">UK adequacy (EU)</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3 font-semibold text-white">Supabase</td>
                    <td className="border border-emerald-500/10 p-3">Database hosting</td>
                    <td className="border border-emerald-500/10 p-3">European Union (region selected: eu-west-2 or similar)</td>
                    <td className="border border-emerald-500/10 p-3">UK adequacy (EU)</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3 font-semibold text-white">Cloudflare</td>
                    <td className="border border-emerald-500/10 p-3">File storage (R2) and content delivery</td>
                    <td className="border border-emerald-500/10 p-3">Global</td>
                    <td className="border border-emerald-500/10 p-3">UK-US Data Bridge / SCCs</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3 font-semibold text-white">Google<br/><span className="font-normal text-xs text-emerald-100/60">(Google Workspace, Google Analytics 4, Google Ads API, Google Search Console API, Google Cloud APIs)</span></td>
                    <td className="border border-emerald-500/10 p-3">Business productivity, analytics, and advertising platform access</td>
                    <td className="border border-emerald-500/10 p-3">United States</td>
                    <td className="border border-emerald-500/10 p-3">UK-US Data Bridge</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3 font-semibold text-white">Meta Platforms<br/><span className="font-normal text-xs text-emerald-100/60">(WhatsApp Business API, Meta Pixel, Meta Marketing API)</span></td>
                    <td className="border border-emerald-500/10 p-3">Business messaging, advertising measurement, and platform APIs</td>
                    <td className="border border-emerald-500/10 p-3">United States</td>
                    <td className="border border-emerald-500/10 p-3">UK-US Data Bridge / SCCs</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3 font-semibold text-white">LinkedIn<br/><span className="font-normal text-xs text-emerald-100/60">(LinkedIn API, LinkedIn Sales Navigator)</span></td>
                    <td className="border border-emerald-500/10 p-3">Business networking platform access and B2B lead generation</td>
                    <td className="border border-emerald-500/10 p-3">United States (Microsoft)</td>
                    <td className="border border-emerald-500/10 p-3">UK-US Data Bridge</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3 font-semibold text-white">Anthropic</td>
                    <td className="border border-emerald-500/10 p-3">AI model API (Claude)</td>
                    <td className="border border-emerald-500/10 p-3">United States</td>
                    <td className="border border-emerald-500/10 p-3">SCCs and UK Addendum</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3 font-semibold text-white">OpenAI</td>
                    <td className="border border-emerald-500/10 p-3">AI model API</td>
                    <td className="border border-emerald-500/10 p-3">United States</td>
                    <td className="border border-emerald-500/10 p-3">SCCs and UK Addendum</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3 font-semibold text-white">Stripe</td>
                    <td className="border border-emerald-500/10 p-3">Payment processing (card payments)</td>
                    <td className="border border-emerald-500/10 p-3">United States and United Kingdom</td>
                    <td className="border border-emerald-500/10 p-3">UK-US Data Bridge / UK entity</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3 font-semibold text-white">GoCardless</td>
                    <td className="border border-emerald-500/10 p-3">Payment processing (direct debit)</td>
                    <td className="border border-emerald-500/10 p-3">United Kingdom</td>
                    <td className="border border-emerald-500/10 p-3">UK-based</td>
                  </tr>
                  <tr>
                    <td className="border border-emerald-500/10 p-3 font-semibold text-white">Automaitee Digital</td>
                    <td className="border border-emerald-500/10 p-3">Delivery team services (Selfera's overseas processor)</td>
                    <td className="border border-emerald-500/10 p-3">India</td>
                    <td className="border border-emerald-500/10 p-3">UK International Data Transfer Agreement (IDTA)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="leading-relaxed pt-4">
              When we add a new sub-processor or change one on this list, we update this page at least 30 days before the change takes effect.
            </p>

            <p className="leading-relaxed">
              To subscribe to sub-processor updates, email <strong className="text-white">support@selfera.co.uk</strong> with <strong className="text-white">"Subscribe to sub-processor notifications"</strong> in the subject line.
            </p>
          </section>

        </motion.div>
      </div>
    </div>
  );
}
