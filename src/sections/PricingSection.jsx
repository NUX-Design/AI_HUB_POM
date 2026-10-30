export default function PricingSection() {
  return (
    <section className={'w-full py-24 px-margin-mobile md:px-margin border-b border-hairline bg-surface-canvas'} id={'at-cost-pricing'}>
      <div className={'max-w-[1360px] mx-auto'}>
        <div className={'flex flex-col items-center text-center mb-16'}>
          <div className={'font-section-eyebrow text-section-eyebrow text-muted-text mb-space-xs font-mono'}>
            {'\n              { Token Economics & Pricing }\n            '}
          </div>
          <h2 className={'font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-cream-text tracking-tight font-semibold max-w-3xl'}>
            {'\n              True At-Cost Token Consumption\n            '}
          </h2>
          <p className={'font-body-md text-body-md text-muted-text max-w-xl mt-3'}>
            {'\n              We never add markups to token costs from OpenAI, Anthropic, or Google. You pay raw upstream rates plus a flat gateway membership.\n            '}
          </p>
        </div>
        <div className={'grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-20'}>
          <div className={'bg-surface-panel p-8 rounded-xl border border-hairline flex flex-col justify-between'}>
            <div>
              <span className={'inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-mono text-muted-text border border-hairline'}>
                {'\n                  Hobbyist & Sandbox\n                '}
              </span>
              <div className={'mt-4 mb-2'}>
                <span className={'font-headline-lg text-[44px] text-cream-text font-mono font-semibold'}>
                  {'$0'}
                </span>
                <span className={'font-body-sm text-muted-text'}>
                  {'/ month'}
                </span>
              </div>
              <p className={'font-body-sm text-muted-text'}>
                {'\n                  Direct pass-through token billing. Immediate access to all 240+ models with no commitments or hidden fees.\n                '}
              </p>
              <div className={'space-y-3 mt-8 pt-6 border-t border-hairline font-body-sm text-cream-text/90'}>
                <div className={'flex items-center gap-2.5'}>
                  <span className={'material-symbols-outlined text-[18px] text-primary'} aria-hidden={'true'}>
                    {'check'}
                  </span>
                  <span>
                    {'1 Universal API Key'}
                  </span>
                </div>
                <div className={'flex items-center gap-2.5'}>
                  <span className={'material-symbols-outlined text-[18px] text-primary'} aria-hidden={'true'}>
                    {'check'}
                  </span>
                  <span>
                    {'10,000 Free Semantic Cache hits'}
                  </span>
                </div>
                <div className={'flex items-center gap-2.5'}>
                  <span className={'material-symbols-outlined text-[18px] text-primary'} aria-hidden={'true'}>
                    {'check'}
                  </span>
                  <span>
                    {'Zero-login API docs & playground'}
                  </span>
                </div>
              </div>
            </div>
            <div className={'mt-10'}>
              <a className={'w-full inline-flex items-center justify-center h-[50px] rounded-full border border-cream-text text-cream-text font-button-text hover:bg-cream-text/10 motion-safe:transition-colors'} href={'#get-started'}>
                {'\n                  Generate Free Key\n                '}
              </a>
            </div>
          </div>
          <div className={'bg-surface-panel p-8 rounded-xl border-2 border-primary-container relative flex flex-col justify-between'}>
            <div className={'absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container font-caption text-[12px] font-mono font-semibold px-3 py-0.5 rounded-full uppercase tracking-wider'}>
              {'\n                Production Choice\n              '}
            </div>
            <div>
              <span className={'inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-mono border border-primary text-primary'}>
                {'\n                  Engineering Teams\n                '}
              </span>
              <div className={'mt-4 mb-2'}>
                <span className={'font-headline-lg text-[44px] text-cream-text font-mono font-semibold'}>
                  {'$29'}
                </span>
                <span className={'font-body-sm text-muted-text'}>
                  {'/ month'}
                </span>
              </div>
              <p className={'font-body-sm text-muted-text'}>
                {'\n                  High-availability routing for scaling apps. Multi-region redundancy, rate-limit hedging, and team keys.\n                '}
              </p>
              <div className={'space-y-3 mt-8 pt-6 border-t border-hairline font-body-sm text-cream-text/90'}>
                <div className={'flex items-center gap-2.5'}>
                  <span className={'material-symbols-outlined text-[18px] text-primary'} aria-hidden={'true'}>
                    {'check'}
                  </span>
                  <span>
                    {'All models at 0% token surcharge'}
                  </span>
                </div>
                <div className={'flex items-center gap-2.5'}>
                  <span className={'material-symbols-outlined text-[18px] text-primary'} aria-hidden={'true'}>
                    {'check'}
                  </span>
                  <span>
                    {'Smart Failover & Hedged Routing'}
                  </span>
                </div>
                <div className={'flex items-center gap-2.5'}>
                  <span className={'material-symbols-outlined text-[18px] text-primary'} aria-hidden={'true'}>
                    {'check'}
                  </span>
                  <span>
                    {'1,000,000 Semantic Cache queries'}
                  </span>
                </div>
                <div className={'flex items-center gap-2.5'}>
                  <span className={'material-symbols-outlined text-[18px] text-primary'} aria-hidden={'true'}>
                    {'check'}
                  </span>
                  <span>
                    {'Team RBAC & monthly budget caps'}
                  </span>
                </div>
              </div>
            </div>
            <div className={'mt-10'}>
              <a className={'relative w-full inline-flex items-center justify-center h-[50px] rounded-full text-cream-text font-button-text group motion-safe:transition-opacity hover:opacity-90'} href={'#get-started'}>
                <span className={'absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-r from-primary-container via-taxonomy-code-ui to-taxonomy-multimodal-scroll'}>
                  <span className={'flex h-full w-full rounded-full bg-surface-canvas items-center justify-center'} />
                </span>
                <span className={'relative z-10 text-cream-text font-button-text'}>
                  {'Start 14-Day Free Trial'}
                </span>
              </a>
            </div>
          </div>
          <div className={'bg-surface-panel p-8 rounded-xl border border-hairline flex flex-col justify-between'}>
            <div>
              <span className={'inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-mono text-muted-text border border-hairline'}>
                {'\n                  Enterprise Infrastructure\n                '}
              </span>
              <div className={'mt-4 mb-2'}>
                <span className={'font-headline-lg text-[44px] text-cream-text font-mono font-semibold'}>
                  {'Custom'}
                </span>
              </div>
              <p className={'font-body-sm text-muted-text'}>
                {'\n                  Isolated VPC deployments, Bring-Your-Own-Key (BYOK) negotiation pass-through, and SOC2 compliance.\n                '}
              </p>
              <div className={'space-y-3 mt-8 pt-6 border-t border-hairline font-body-sm text-cream-text/90'}>
                <div className={'flex items-center gap-2.5'}>
                  <span className={'material-symbols-outlined text-[18px] text-primary'} aria-hidden={'true'}>
                    {'check'}
                  </span>
                  <span>
                    {'Dedicated Bare-Metal Edge Proxies'}
                  </span>
                </div>
                <div className={'flex items-center gap-2.5'}>
                  <span className={'material-symbols-outlined text-[18px] text-primary'} aria-hidden={'true'}>
                    {'check'}
                  </span>
                  <span>
                    {'Bring-Your-Own-Key (BYOK) support'}
                  </span>
                </div>
                <div className={'flex items-center gap-2.5'}>
                  <span className={'material-symbols-outlined text-[18px] text-primary'} aria-hidden={'true'}>
                    {'check'}
                  </span>
                  <span>
                    {'Unlimited semantic vector memory'}
                  </span>
                </div>
                <div className={'flex items-center gap-2.5'}>
                  <span className={'material-symbols-outlined text-[18px] text-primary'} aria-hidden={'true'}>
                    {'check'}
                  </span>
                  <span>
                    {'99.99% Custom SLA guarantee'}
                  </span>
                </div>
              </div>
            </div>
            <div className={'mt-10'}>
              <a className={'w-full inline-flex items-center justify-center h-[50px] rounded-full border border-cream-text text-cream-text font-button-text hover:bg-cream-text/10 motion-safe:transition-colors'} href={'#get-started'}>
                {'\n                  Contact Systems Architects\n                '}
              </a>
            </div>
          </div>
        </div>
        <div className={'w-full overflow-x-auto bg-surface-panel rounded-xl border border-hairline p-6'} role={'region'} tabIndex={0} aria-labelledby={'feature-matrix-heading'}>
          <h3 id={'feature-matrix-heading'} className={'font-headline-sm text-[20px] text-cream-text font-semibold mb-4'}>
            {'Detailed Feature Matrix'}
          </h3>
          <table className={'w-full text-left border-collapse text-body-sm'}>
            <caption className={'sr-only'}>
              {'Feature comparison across Sandbox, Production, and Enterprise plans.'}
            </caption>
            <thead>
              <tr className={'border-b border-hairline text-caption font-mono text-muted-text'}>
                <th className={'py-3 px-4'} scope={'col'}>
                  {'Capability'}
                </th>
                <th className={'py-3 px-4'} scope={'col'}>
                  {'Sandbox ($0)'}
                </th>
                <th className={'py-3 px-4'} scope={'col'}>
                  {'Production ($29)'}
                </th>
                <th className={'py-3 px-4'} scope={'col'}>
                  {'Enterprise (Custom)'}
                </th>
              </tr>
            </thead>
            <tbody className={'divide-y divide-hairline font-mono text-[13px] text-cream-text/80'}>
              <tr>
                <th className={'py-3 px-4 font-sans text-cream-text'} scope={'row'}>
                  {'Token Markup'}
                </th>
                <td className={'py-3 px-4 text-primary font-semibold'}>
                  {'0.0%'}
                </td>
                <td className={'py-3 px-4 text-primary font-semibold'}>
                  {'0.0%'}
                </td>
                <td className={'py-3 px-4 text-primary font-semibold'}>
                  {'0.0%'}
                </td>
              </tr>
              <tr>
                <th className={'py-3 px-4 font-sans text-cream-text'} scope={'row'}>
                  {'Smart Outage Failover'}
                </th>
                <td className={'py-3 px-4 text-muted-text'}>
                  {'Manual'}
                </td>
                <td className={'py-3 px-4 text-primary'}>
                  {'Automated sub-10ms'}
                </td>
                <td className={'py-3 px-4 text-primary'}>
                  {'Custom Hedged Routes'}
                </td>
              </tr>
              <tr>
                <th className={'py-3 px-4 font-sans text-cream-text'} scope={'row'}>
                  {'Data Retention'}
                </th>
                <td className={'py-3 px-4'}>
                  {'Zero (RAM only)'}
                </td>
                <td className={'py-3 px-4'}>
                  {'Zero (RAM only)'}
                </td>
                <td className={'py-3 px-4'}>
                  {'Zero + VPC Auditing'}
                </td>
              </tr>
              <tr>
                <th className={'py-3 px-4 font-sans text-cream-text'} scope={'row'}>
                  {'BYOK (Bring Your Own Key)'}
                </th>
                <td className={'py-3 px-4 text-muted-text'}>
                  {'No'}
                </td>
                <td className={'py-3 px-4 text-muted-text'}>
                  {'No'}
                </td>
                <td className={'py-3 px-4 text-primary'}>
                  {'Yes (Unlimited)'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={'max-w-[880px] mx-auto mt-24'} id={'faq'}>
          <div className={'text-center mb-12'}>
            <span className={'font-section-eyebrow text-muted-text font-mono'}>
              {'{ Inquiries & Answers }'}
            </span>
            <h3 className={'font-headline-md text-headline-sm lg:text-headline-md text-cream-text font-semibold mt-2'}>
              {'\n                Frequently Addressed Inquiries\n              '}
            </h3>
          </div>
          <div className={'space-y-4'}>
            <details className={'bg-surface-panel rounded-lg border border-hairline overflow-hidden faq-item group'}>
              <summary className={'w-full py-5 px-6 flex items-center justify-between text-left text-cream-text hover:text-primary motion-safe:transition-colors list-none cursor-pointer group-open:text-primary '}>
                <span className={'font-button-text text-[17px]'}>
                  {'How is zero percent token surcharge verified?'}
                </span>
                <span className={'material-symbols-outlined faq-icon text-[20px] motion-safe:transition-transform duration-200 group-open:rotate-180'} aria-hidden={'true'}>
                  {'expand_more'}
                </span>
              </summary>
              <div className={'faq-content  px-6 pb-6 pt-1 text-body-md text-muted-text border-t border-hairline'}>
                {'\n                  Every request response includes our raw upstream HTTP receipt headers matching official Anthropic, OpenAI, or Google token consumption figures. Your itemized usage ledger mirrors provider rates down to 6 decimal places.\n                '}
              </div>
            </details>
            <details className={'bg-surface-panel rounded-lg border border-hairline overflow-hidden faq-item group'}>
              <summary className={'w-full py-5 px-6 flex items-center justify-between text-left text-cream-text hover:text-primary motion-safe:transition-colors list-none cursor-pointer group-open:text-primary '}>
                <span className={'font-button-text text-[17px]'}>
                  {'Does AI Hub store prompt payloads or train on data?'}
                </span>
                <span className={'material-symbols-outlined faq-icon text-[20px] motion-safe:transition-transform duration-200 group-open:rotate-180'} aria-hidden={'true'}>
                  {'expand_more'}
                </span>
              </summary>
              <div className={'faq-content  px-6 pb-6 pt-1 text-body-md text-muted-text border-t border-hairline'}>
                {'\n                  Strictly zero data retention. Data packets stream ephemerally through RAM buffers without touching persistent disks. Furthermore, our enterprise upstream agreements legally guarantee that frontier providers do not train on API traffic.\n                '}
              </div>
            </details>
            <details className={'bg-surface-panel rounded-lg border border-hairline overflow-hidden faq-item group'}>
              <summary className={'w-full py-5 px-6 flex items-center justify-between text-left text-cream-text hover:text-primary motion-safe:transition-colors list-none cursor-pointer group-open:text-primary '}>
                <span className={'font-button-text text-[17px]'}>
                  {'Can I swap from OpenAI to Claude in 10 seconds?'}
                </span>
                <span className={'material-symbols-outlined faq-icon text-[20px] motion-safe:transition-transform duration-200 group-open:rotate-180'} aria-hidden={'true'}>
                  {'expand_more'}
                </span>
              </summary>
              <div className={'faq-content  px-6 pb-6 pt-1 text-body-md text-muted-text border-t border-hairline'}>
                {'\n                  Yes. Simply change the string value of the "model" parameter from "gpt-4o" to "anthropic/claude-3-5-sonnet". Our gateway normalizes parameter translation, tools/functions payloads, and streaming deltas automatically.\n                '}
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
