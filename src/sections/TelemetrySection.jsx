export default function TelemetrySection() {
  return (
    <section className={'w-full py-24 px-margin-mobile md:px-margin border-b border-hairline bg-surface-canvas'} id={'telemetry'}>
      <div className={'max-w-[1360px] mx-auto'}>
        <div className={'flex flex-col items-center text-center mb-16'}>
          <div className={'font-section-eyebrow text-section-eyebrow text-muted-text mb-space-xs font-mono'}>
            {'\n              { Console Telemetry Snapshot }\n            '}
          </div>
          <h2 className={'font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-cream-text tracking-tight font-semibold max-w-3xl'}>
            {'\n              Microsecond Telemetry for Critical Production\n            '}
          </h2>
          <p className={'font-body-md text-body-md text-muted-text max-w-xl mt-3'}>
            {'\n              Real-time trace graphs, packet hops, and unified token meters accessible right within the developer dashboard.\n            '}
          </p>
        </div>
        <div className={'w-full bg-surface-panel rounded-xl border border-hairline overflow-hidden'}>
          <div className={'min-h-12 bg-surface-container-low px-4 py-3 border-b border-hairline flex flex-col items-start gap-3 sm:h-12 sm:flex-row sm:items-center sm:justify-between sm:py-0'}>
            <div className={'min-w-0 flex flex-wrap items-center gap-2'}>
              <div className={'w-3 h-3 rounded-full bg-hairline'} />
              <div className={'w-3 h-3 rounded-full bg-hairline'} />
              <div className={'w-3 h-3 rounded-full bg-hairline'} />
              <span className={'min-w-0 ml-2 sm:ml-4 break-all font-mono text-[12px] text-muted-text'}>
                {'telemetry.aihub.io/clusters/prod-global-mesh'}
              </span>
            </div>
            <div className={'flex items-center gap-3'}>
              <span className={'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[12px] font-mono text-primary-container bg-surface-container'}>
                <span className={'w-1.5 h-1.5 rounded-full bg-primary-container motion-safe:animate-pulse'} />
                {'\n                  Active Routing: 99.994% Availability\n                '}
              </span>
            </div>
          </div>
          <div className={'p-6 md:p-8 space-y-6'}>
            <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'}>
              <div className={'bg-surface-canvas p-4 rounded-lg border border-hairline'}>
                <div className={'text-caption font-caption text-muted-text'}>
                  {'Total Ingested Tokens (30d)'}
                </div>
                <div className={'font-headline-sm text-[20px] sm:text-[26px] text-cream-text font-mono mt-1 font-semibold'}>
                  {'1,842,910,240'}
                </div>
                <div className={'text-[12px] text-primary-container font-mono mt-1'}>
                  {'99.98% delivery rate'}
                </div>
              </div>
              <div className={'bg-surface-canvas p-4 rounded-lg border border-hairline'}>
                <div className={'text-caption font-caption text-muted-text'}>
                  {'Global p95 Latency'}
                </div>
                <div className={'font-headline-sm text-[20px] sm:text-[26px] text-cream-text font-mono mt-1 font-semibold'}>
                  {'168ms'}
                </div>
                <div className={'text-[12px] text-primary-container font-mono mt-1'}>
                  {'-32ms edge-cached'}
                </div>
              </div>
              <div className={'bg-surface-canvas p-4 rounded-lg border border-hairline'}>
                <div className={'text-caption font-caption text-muted-text'}>
                  {'Semantic Caching Saved'}
                </div>
                <div className={'font-headline-sm text-[20px] sm:text-[26px] text-primary font-mono mt-1 font-semibold'}>
                  {'$6,482.10'}
                </div>
                <div className={'text-[12px] text-muted-text font-mono mt-1'}>
                  {'44.1% queries deduplicated'}
                </div>
              </div>
              <div className={'bg-surface-canvas p-4 rounded-lg border border-hairline'}>
                <div className={'text-caption font-caption text-muted-text'}>
                  {'Active Model Pools'}
                </div>
                <div className={'font-headline-sm text-[20px] sm:text-[26px] text-cream-text font-mono mt-1 font-semibold'}>
                  {'18 / 240+'}
                </div>
                <div className={'text-[12px] text-muted-text font-mono mt-1'}>
                  {'Zero vendor locks'}
                </div>
              </div>
            </div>
            <div className={'grid grid-cols-1 lg:grid-cols-12 gap-6'} id={'playground'}>
              <div className={'min-w-0 lg:col-span-7 bg-surface-canvas p-6 rounded-lg border border-hairline flex flex-col justify-between'}>
                <div className={'flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between mb-4'}>
                  <span className={'font-button-text text-cream-text text-[15px]'}>
                    {'Edge Ingestion vs Provider Response'}
                  </span>
                  <div className={'flex flex-wrap items-center gap-3 text-[12px] font-mono'}>
                    <span className={'flex items-center gap-1.5 text-cream-text'}>
                      <span className={'w-2 h-2 rounded-full bg-primary-container'} />
                      {' Success 200\n                      '}
                    </span>
                    <span className={'flex items-center gap-1.5 text-muted-text'}>
                      <span className={'w-2 h-2 rounded-full bg-taxonomy-code-ui'} />
                      {' Semantic Hit\n                      '}
                    </span>
                  </div>
                </div>
                <figure className={'w-full h-44 my-2 flex items-end'}>
                  <svg className={'w-full h-full text-primary'} fill={'none'} preserveAspectRatio={'none'} viewBox={'0 0 500 120'} role={'img'} aria-labelledby={'telemetry-chart-title'} aria-describedby={'telemetry-chart-summary'}>
                    <title id={'telemetry-chart-title'}>
                      {'Illustrative edge-ingestion and semantic-cache trends.'}
                    </title>
                    <path d={'M0,90 C50,70 100,85 150,35 C200,15 250,55 300,25 C350,10 400,65 450,35 C480,18 495,12 500,8'} stroke={'currentColor'} strokeLinecap={'round'} strokeWidth={2} />
                    <path d={'M0,90 C50,70 100,85 150,35 C200,15 250,55 300,25 C350,10 400,65 450,35 C480,18 495,12 500,8 L500,120 L0,120 Z'} fill={'currentColor'} fillOpacity={'0.08'} />
                    <path d={'M0,105 C60,100 120,75 180,65 C240,60 300,45 360,50 C420,55 460,35 500,25'} stroke={'#00bae2'} strokeDasharray={'4 4'} strokeWidth={'1.5'} />
                  </svg>
                  <figcaption id={'telemetry-chart-summary'} className={'sr-only'}>
                    {'The line chart is illustrative; exact time-series values are not included in the source design. The related metrics shown above are 1,842,910,240 tokens ingested, 168 milliseconds p95 latency, 6,482 dollars and 10 cents saved through semantic caching, and 18 of 240-plus active model pools.'}
                  </figcaption>
                </figure>
                <div className={'flex flex-wrap justify-between items-center gap-2 text-caption font-caption text-muted-text border-t border-hairline pt-3 font-mono'}>
                  <span>
                    {'Edge: AWS us-east-1'}
                  </span>
                  <span>
                    {'Edge: GCP europe-west3'}
                  </span>
                  <span>
                    {'Edge: Cloudflare Tokyo'}
                  </span>
                  <span className={'text-primary-container'}>
                    {'Live'}
                  </span>
                </div>
              </div>
              <div className={'min-w-0 lg:col-span-5 bg-surface-canvas p-6 rounded-lg border border-hairline flex flex-col justify-between'}>
                <div>
                  <div className={'flex items-center justify-between pb-3 border-b border-hairline mb-3'}>
                    <span className={'text-caption font-mono text-cream-text'}>
                      {'Production Ingestion Sample'}
                    </span>
                    <span className={'text-[12px] font-mono text-taxonomy-code-ui'}>
                      {'Live Staging'}
                    </span>
                  </div>
                  <pre className={'font-mono text-[12px] text-cream-text/90 leading-relaxed overflow-x-auto'}>
                    <code>
                      <span className={'text-muted-text'}>
                        {'// Request with Hedged Outage Fallback'}
                      </span>
                      <span className={'text-taxonomy-text-llm'}>
                        {'POST'}
                      </span>
                      {' /v1/chat/completions\n{\n  '}
                      <span className={'text-cream-text'}>
                        {'"model"'}
                      </span>
                      {': '}
                      <span className={'text-primary-container'}>
                        {'"anthropic/claude-3-5-sonnet"'}
                      </span>
                      {',\n  '}
                      <span className={'text-cream-text'}>
                        {'"fallback"'}
                      </span>
                      {': ['}
                      <span className={'text-taxonomy-code-ui'}>
                        {'"openai/gpt-4o"'}
                      </span>
                      {', '}
                      <span className={'text-taxonomy-agent-svg'}>
                        {'"deepseek/v3"'}
                      </span>
                      {'],\n  '}
                      <span className={'text-cream-text'}>
                        {'"cache_threshold"'}
                      </span>
                      {': 0.92,\n  '}
                      <span className={'text-cream-text'}>
                        {'"stream"'}
                      </span>
                      {': true\n}'}
                    </code>
                  </pre>
                </div>
                <div className={'mt-4 pt-3 border-t border-hairline flex items-center justify-between text-caption font-caption'}>
                  <span className={'text-muted-text'}>
                    {'Zero wrapper dependencies'}
                  </span>
                  <span className={'text-primary-container font-mono'}>
                    {'200 Streaming Chunk OK'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
