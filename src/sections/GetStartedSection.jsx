export default function GetStartedSection() {
  return (
    <section className={'relative w-full py-28 px-margin-mobile md:px-margin bg-surface-canvas overflow-hidden'} id={'get-started'}>
      <div className={'pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[850px] h-[360px] opacity-25 blur-[120px] rounded-full bg-gradient-to-r from-primary via-taxonomy-code-ui to-taxonomy-multimodal-scroll'} />
      <div className={'relative max-w-[1360px] mx-auto text-center flex flex-col items-center'}>
        <div className={'font-section-eyebrow text-section-eyebrow text-muted-text mb-space-sm font-mono'}>
          {'\n            { Connect Frontier Intelligence }\n          '}
        </div>
        <h2 className={'font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-cream-text tracking-tight font-semibold max-w-4xl text-balance'}>
          {'\n            Stop juggling 12 API accounts. Build on AI Hub today.\n          '}
        </h2>
        <p className={'font-body-lead text-body-lead text-muted-text max-w-2xl mt-space-md leading-relaxed'}>
          {'\n            Obtain your cryptographically signed universal key in 30 seconds. No credit card required to explore the sandbox matrix.\n          '}
        </p>
        <div className={'flex flex-wrap items-center justify-center gap-space-md mt-space-xl'}>
          <a className={'relative inline-flex items-center justify-center h-[52px] px-space-xl rounded-full text-cream-text font-button-text group motion-safe:transition-opacity hover:opacity-95'} href={'#get-started'}>
            <span className={'absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-r from-primary-container via-taxonomy-code-ui to-taxonomy-multimodal-scroll'}>
              <span className={'flex h-full w-full rounded-full bg-surface-canvas items-center justify-center'} />
            </span>
            <span className={'relative z-10 flex items-center gap-2 text-cream-text font-button-text'}>
              <span>
                {'Start Free Sandbox'}
              </span>
              <span className={'material-symbols-outlined text-[19px] text-primary'} aria-hidden={'true'}>
                {'arrow_forward'}
              </span>
            </span>
          </a>
          <a className={'inline-flex items-center justify-center h-[52px] px-space-xl rounded-full border border-cream-text bg-transparent text-cream-text font-button-text hover:bg-cream-text/10 motion-safe:transition-colors'} href={'#model-matrix'}>
            {'\n              Inspect Model Specs\n            '}
          </a>
        </div>
      </div>
    </section>
  );
}
