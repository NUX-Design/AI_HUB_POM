export default function SiteFooter() {
  return (
    <footer className={'w-full bg-surface-panel border-t border-hairline'}>
      <div className={'max-w-[1360px] mx-auto px-margin-mobile md:px-gutter pt-space-xl pb-space-lg'}>
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-space-xl pb-space-xl border-b border-hairline'}>
          <div className={'lg:col-span-2 flex flex-col gap-space-sm'}>
            <div className={'flex items-center gap-space-xs'}>
              <span className={'font-headline-sm text-[22px] font-semibold text-cream-text'}>
                {'AI Hub'}
              </span>
              <span className={'font-caption text-caption text-primary-container border border-primary-container/30 px-2 py-0.5 rounded-full font-mono'}>
                {'v2.4 Editorial'}
              </span>
            </div>
            <p className={'font-section-eyebrow text-section-eyebrow text-muted-text font-mono'}>
              {'{ The Definitive Machine Intelligence Layer }'}
            </p>
            <p className={'font-body-sm text-body-sm text-muted-text max-w-sm mt-space-xs'}>
              {'\n            Mathematical vector precision and low-jitter packet routing across OpenAI, Anthropic, Google DeepMind, and open-weights infrastructure.\n          '}
            </p>
            <div className={'flex items-center gap-2 mt-space-md'}>
              <span className={'inline-block w-2 h-2 rounded-full bg-primary-container motion-safe:animate-pulse'} />
              <span className={'font-caption text-caption text-cream-text font-mono'}>
                {'Global Mesh Active • Zero Latency Overhead'}
              </span>
            </div>
          </div>
          <div>
            <h2 className={'font-caption text-caption text-muted-text uppercase tracking-wider mb-space-md font-mono'}>
              {'Monographs'}
            </h2>
            <ul className={'flex flex-col gap-space-xs font-body-sm text-body-sm'}>
              <li className={'py-0.5'}>
                <a className={'text-cream-text/80 hover:text-cream-text motion-safe:transition-colors'} href={'#chapters'}>
                  {'01 Architectural Superiority'}
                </a>
              </li>
              <li className={'py-0.5'}>
                <a className={'text-cream-text/80 hover:text-cream-text motion-safe:transition-colors'} href={'#chapters'}>
                  {'02 Telemetry & Benchmarks'}
                </a>
              </li>
              <li className={'py-0.5'}>
                <a className={'text-cream-text/80 hover:text-cream-text motion-safe:transition-colors'} href={'#chapters'}>
                  {'03 Zero Refactoring'}
                </a>
              </li>
              <li className={'py-0.5'}>
                <a className={'text-cream-text/80 hover:text-cream-text motion-safe:transition-colors'} href={'#agent-workflows'}>
                  {'04 Autonomous Agents'}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={'font-caption text-caption text-muted-text uppercase tracking-wider mb-space-md font-mono'}>
              {'Matrix Catalog'}
            </h2>
            <ul className={'flex flex-col gap-space-xs font-body-sm text-body-sm'}>
              <li className={'py-0.5'}>
                <a className={'text-cream-text/80 hover:text-cream-text motion-safe:transition-colors'} href={'#model-matrix'}>
                  {'Claude 3.5 Sonnet'}
                </a>
              </li>
              <li className={'py-0.5'}>
                <a className={'text-cream-text/80 hover:text-cream-text motion-safe:transition-colors'} href={'#model-matrix'}>
                  {'GPT-4o Omnimodal'}
                </a>
              </li>
              <li className={'py-0.5'}>
                <a className={'text-cream-text/80 hover:text-cream-text motion-safe:transition-colors'} href={'#model-matrix'}>
                  {'Gemini 1.5 Flash'}
                </a>
              </li>
              <li className={'py-0.5'}>
                <a className={'text-cream-text/80 hover:text-cream-text motion-safe:transition-colors'} href={'#model-matrix'}>
                  {'DeepSeek-V3 MoE'}
                </a>
              </li>
              <li className={'py-0.5'}>
                <a className={'text-cream-text/80 hover:text-cream-text motion-safe:transition-colors'} href={'#model-matrix'}>
                  {'Qwen 2.5 Coder'}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={'font-caption text-caption text-muted-text uppercase tracking-wider mb-space-md font-mono'}>
              {'Developers'}
            </h2>
            <ul className={'flex flex-col gap-space-xs font-body-sm text-body-sm'}>
              <li className={'py-0.5'}>
                <a className={'text-cream-text/80 hover:text-cream-text motion-safe:transition-colors'} href={'#playground'}>
                  {'Spec Reader'}
                </a>
              </li>
              <li className={'py-0.5'}>
                <a className={'text-cream-text/80 hover:text-cream-text motion-safe:transition-colors'} href={'#telemetry'}>
                  {'Console Telemetry'}
                </a>
              </li>
              <li className={'py-0.5'}>
                <a className={'text-cream-text/80 hover:text-cream-text motion-safe:transition-colors'} href={'#chapters'}>
                  {'Rust Proxy Architecture'}
                </a>
              </li>
              <li className={'py-0.5'}>
                <a className={'text-cream-text/80 hover:text-cream-text motion-safe:transition-colors'} href={'#at-cost-pricing'}>
                  {'Token Audit Logs'}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={'font-caption text-caption text-muted-text uppercase tracking-wider mb-space-md font-mono'}>
              {'Organisation'}
            </h2>
            <ul className={'flex flex-col gap-space-xs font-body-sm text-body-sm'}>
              <li className={'py-0.5'}>
                <a className={'text-cream-text/80 hover:text-cream-text motion-safe:transition-colors'} href={'#chapters'}>
                  {'Manifesto'}
                </a>
              </li>
              <li className={'py-0.5'}>
                <a className={'text-cream-text/80 hover:text-cream-text motion-safe:transition-colors'} href={'#faq'}>
                  {'Zero Retention Policy'}
                </a>
              </li>
              <li className={'py-0.5'}>
                <a className={'text-cream-text/80 hover:text-cream-text motion-safe:transition-colors'} href={'#at-cost-pricing'}>
                  {'SOC2 Type II'}
                </a>
              </li>
              <li className={'py-0.5'}>
                <a className={'text-cream-text/80 hover:text-cream-text motion-safe:transition-colors'} href={'#get-started'}>
                  {'Security Inquiries'}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={'flex flex-col md:flex-row items-center justify-between gap-space-md pt-space-lg font-caption text-caption text-muted-text font-mono'}>
          <div>
            {'© 2025 AI Hub Labs Inc. Architectural Model Matrix Magazine Issue № 02.'}
          </div>
          <div className={'flex items-center gap-space-lg'}>
            <a className={'hover:text-cream-text motion-safe:transition-colors'} href={'#faq'}>
              {'Privacy'}
            </a>
            <a className={'hover:text-cream-text motion-safe:transition-colors'} href={'#faq'}>
              {'Terms'}
            </a>
            <a className={'hover:text-cream-text motion-safe:transition-colors'} href={'#telemetry'}>
              {'Audit Key'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
