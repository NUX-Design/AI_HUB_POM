export default function SiteHeader() {
  return (
    <header className={'fixed top-0 w-full z-50 bg-surface-canvas/90 backdrop-blur-md'}>
      <aside className={'w-full bg-surface-panel px-margin-mobile md:px-margin py-2 text-center text-caption font-caption text-cream-text border-b border-hairline/40'}>
        <span className={'text-muted-text'}>
          {'Unified AI Gateway v2.4 Editorial Edition — Zero latency markup across 240+ frontier models'}
        </span>
        <a className={'ml-space-xs text-primary-container font-headline-sm text-caption font-semibold hover:underline inline-flex items-center gap-1'} href={'#model-matrix'}>
          {'Inspect Matrix →'}
        </a>
      </aside>
      <div className={'h-20 w-full max-w-[1360px] mx-auto px-margin-mobile md:px-gutter flex items-center justify-between gap-space-lg'}>
        <div className={'flex items-center gap-space-md'}>
          <span className={'font-headline-sm text-[20px] font-semibold tracking-tight text-cream-text'}>
            {'AI Hub'}
          </span>
          <span className={'hidden sm:inline-block px-2 py-0.5 rounded text-[12px] font-mono border border-hairline text-muted-text'}>
            {'VOL. 02'}
          </span>
        </div>
        <nav className={'hidden xl:flex items-center gap-space-lg'} aria-label={'Primary'}>
          <a className={'motion-safe:transition-colors py-1 text-cream-text font-semibold border-b border-cream-text'} href={'#chapters'}>
            {'Chapters'}
          </a>
          <a className={'font-body-sm text-body-sm text-muted-text hover:text-cream-text motion-safe:transition-colors py-1'} href={'#model-matrix'}>
            {'Model Matrix'}
          </a>
          <a className={'font-body-sm text-body-sm text-muted-text hover:text-cream-text motion-safe:transition-colors py-1'} href={'#agent-workflows'}>
            {'Workflows'}
          </a>
          <a className={'font-body-sm text-body-sm text-muted-text hover:text-cream-text motion-safe:transition-colors py-1'} href={'#telemetry'}>
            {'Telemetry'}
          </a>
          <a className={'font-body-sm text-body-sm text-muted-text hover:text-cream-text motion-safe:transition-colors py-1'} href={'#at-cost-pricing'}>
            {'Pricing'}
          </a>
          <a className={'font-body-sm text-body-sm text-muted-text hover:text-cream-text motion-safe:transition-colors py-1'} href={'#faq'}>
            {'FAQ'}
          </a>
        </nav>
        <div className={'flex items-center gap-space-sm'}>
          <a className={'hidden sm:inline-flex items-center justify-center h-[46px] px-space-md rounded-full border border-cream-text/70 bg-transparent text-cream-text font-button-text text-[15px] hover:border-cream-text hover:bg-cream-text/5 motion-safe:transition-all'} href={'#playground'}>
            {'\n          Spec Reader\n        '}
          </a>
          <a className={'relative inline-flex items-center justify-center h-[46px] px-space-lg rounded-full text-cream-text font-button-text text-[15px] group motion-safe:transition-opacity hover:opacity-90'} href={'#get-started'}>
            <span className={'absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-r from-primary-container via-taxonomy-code-ui to-taxonomy-multimodal-scroll'}>
              <span className={'flex h-full w-full rounded-full bg-surface-canvas items-center justify-center'} />
            </span>
            <span className={'relative z-10 text-cream-text font-button-text'}>
              {'Get Universal Key'}
            </span>
          </a>
          <details className={'group relative xl:hidden'}>
            <summary className={'flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full bg-primary text-on-primary '} aria-label={'Open site navigation'}>
              <span className={'material-symbols-outlined text-[18px]'} aria-hidden={'true'}>
                {'menu_book'}
              </span>
            </summary>
            <div className={'absolute right-0 top-full z-50 mt-2 w-64 rounded-xl border border-hairline bg-surface-panel p-3 shadow-xl'}>
              <nav aria-label={'Mobile'}>
                <ul className={'m-0 flex list-none flex-col gap-1 p-0'}>
                  <li className={'list-none'}>
                    <a href={'#chapters'} className={'flex min-h-11 items-center rounded-lg px-3 text-body-sm text-cream-text hover:bg-surface-container '}>
                      {'Chapters'}
                    </a>
                  </li>
                  <li className={'list-none'}>
                    <a href={'#model-matrix'} className={'flex min-h-11 items-center rounded-lg px-3 text-body-sm text-cream-text hover:bg-surface-container '}>
                      {'Model Matrix'}
                    </a>
                  </li>
                  <li className={'list-none'}>
                    <a href={'#agent-workflows'} className={'flex min-h-11 items-center rounded-lg px-3 text-body-sm text-cream-text hover:bg-surface-container '}>
                      {'Workflows'}
                    </a>
                  </li>
                  <li className={'list-none'}>
                    <a href={'#telemetry'} className={'flex min-h-11 items-center rounded-lg px-3 text-body-sm text-cream-text hover:bg-surface-container '}>
                      {'Telemetry'}
                    </a>
                  </li>
                  <li className={'list-none'}>
                    <a href={'#at-cost-pricing'} className={'flex min-h-11 items-center rounded-lg px-3 text-body-sm text-cream-text hover:bg-surface-container '}>
                      {'Pricing'}
                    </a>
                  </li>
                  <li className={'list-none'}>
                    <a href={'#faq'} className={'flex min-h-11 items-center rounded-lg px-3 text-body-sm text-cream-text hover:bg-surface-container '}>
                      {'FAQ'}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
