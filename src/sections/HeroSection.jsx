export default function HeroSection() {
  return (
    <section className={'relative w-full overflow-hidden border-b border-hairline py-20 lg:py-32 px-margin-mobile md:px-margin'}>
      <div className={'pointer-events-none absolute -top-24 left-1/4 -translate-x-1/2 w-[520px] h-[520px] rounded-full opacity-35 blur-[130px] bg-gradient-to-br from-taxonomy-multimodal-scroll via-decorative-lipstick-pink to-transparent'} />
      <div className={'pointer-events-none absolute top-10 right-1/4 translate-x-1/4 w-[560px] h-[560px] rounded-full opacity-30 blur-[140px] bg-gradient-to-bl from-taxonomy-code-ui via-taxonomy-text-llm to-transparent'} />
      <div className={'pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-30 blur-[130px] bg-gradient-to-t from-primary-container via-tertiary-fixed to-transparent'} />
      <div className={'relative max-w-[1360px] mx-auto flex flex-col items-center text-center'}>
        <div className={'inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-hairline bg-surface-panel/80 mb-space-md'}>
          <span className={'w-2 h-2 rounded-full bg-primary-container motion-safe:animate-ping'} />
          <span className={'font-section-eyebrow text-[13px] text-cream-text/90 tracking-widest uppercase font-mono'}>
            {'Issue № 02 • Machine Intelligence Architecture'}
          </span>
        </div>
        <h1 className={'font-headline-xl text-[44px] sm:text-[64px] lg:text-[104px] text-cream-text max-w-6xl tracking-tight leading-[0.98] text-balance font-semibold'}>
          {'\n            The Definitive Gateway to Machine Intelligence\n          '}
        </h1>
        <p className={'font-body-lead text-body-lead text-muted-text max-w-3xl mt-space-lg text-balance leading-relaxed'}>
          {'\n            Consolidate 240+ frontier large language models, vision engines, and autonomous reasoning agents through one cryptographically signed endpoint. Pure at-cost token routing with mathematical latency transparency.\n          '}
        </p>
        <div className={'flex flex-wrap items-center justify-center gap-space-md mt-space-xl'}>
          <a className={'relative inline-flex items-center justify-center h-[52px] px-space-xl rounded-full text-cream-text font-button-text group motion-safe:transition-all duration-300 hover:opacity-95'} href={'#get-started'}>
            <span className={'absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-r from-primary-container via-taxonomy-code-ui to-taxonomy-multimodal-scroll'}>
              <span className={'flex h-full w-full rounded-full bg-surface-canvas items-center justify-center'} />
            </span>
            <span className={'relative z-10 flex items-center gap-2 text-cream-text font-button-text'}>
              <span>
                {'Issue Free Gateway Key'}
              </span>
              <span className={'material-symbols-outlined text-[19px] text-primary'} aria-hidden={'true'}>
                {'north_east'}
              </span>
            </span>
          </a>
          <a className={'inline-flex items-center justify-center h-[52px] px-space-xl rounded-full border border-cream-text bg-transparent text-cream-text font-button-text hover:bg-cream-text/10 motion-safe:transition-all'} href={'#model-matrix'}>
            {'\n              Browse Model Catalog\n            '}
          </a>
          <a className={'inline-flex items-center gap-2 h-[52px] px-space-md text-muted-text hover:text-cream-text font-button-text motion-safe:transition-colors'} href={'#chapters'}>
            <span className={'material-symbols-outlined text-[18px]'} aria-hidden={'true'}>
              {'auto_stories'}
            </span>
            <span>
              {'Read Architecture Essays'}
            </span>
          </a>
        </div>
        <div className={'w-full max-w-5xl mt-20 pt-8 border-t border-hairline/70'}>
          <div className={'grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-hairline bg-surface-panel/60 rounded-xl border border-hairline'}>
            <div className={'p-6 flex flex-col items-center md:items-start text-center md:text-left'}>
              <span className={'text-caption font-caption text-taxonomy-code-ui font-mono uppercase tracking-wider'}>
                {'Catalogue Depth'}
              </span>
              <span className={'font-headline-lg text-[48px] text-cream-text font-semibold tracking-tight mt-1'}>
                {'240+'}
              </span>
              <p className={'text-body-sm font-caption text-muted-text mt-1'}>
                {'Frontier foundation models & fine-tunes benchmarked live.'}
              </p>
            </div>
            <div className={'p-6 flex flex-col items-center md:items-start text-center md:text-left'}>
              <span className={'text-caption font-caption text-primary-container font-mono uppercase tracking-wider'}>
                {'Pricing Philosophy'}
              </span>
              <span className={'font-headline-lg text-[48px] text-cream-text font-semibold tracking-tight mt-1'}>
                {'$0'}
              </span>
              <p className={'text-body-sm font-caption text-muted-text mt-1'}>
                {'Gateway surcharge on tokens. Direct at-cost provider invoicing.'}
              </p>
            </div>
            <div className={'p-6 flex flex-col items-center md:items-start text-center md:text-left'}>
              <span className={'text-caption font-caption text-taxonomy-multimodal-scroll font-mono uppercase tracking-wider'}>
                {'Unified Credential'}
              </span>
              <span className={'font-headline-lg text-[48px] text-cream-text font-semibold tracking-tight mt-1'}>
                {'1 Key'}
              </span>
              <p className={'text-body-sm font-caption text-muted-text mt-1'}>
                {'Drop-in replacement for OpenAI SDK with deterministic failover.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
