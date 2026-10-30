export default function ChaptersSection() {
  return (
    <section className={'w-full py-24 px-margin-mobile md:px-margin border-b border-hairline bg-surface-canvas'} id={'chapters'}>
      <div className={'max-w-[1360px] mx-auto'}>
        <div className={'flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-hairline pb-8'}>
          <div>
            <div className={'font-section-eyebrow text-section-eyebrow text-muted-text mb-space-xs font-mono'}>
              {'\n                { Magazine Serial — Infrastructure Monograph }\n              '}
            </div>
            <h2 className={'font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-cream-text tracking-tight font-semibold'}>
              {'\n                Anatomy of the Neural Switchboard\n              '}
            </h2>
          </div>
          <p className={'font-body-md text-body-md text-muted-text max-w-md'}>
            {'\n              A deep-dive editorial into how our low-overhead edge mesh resolves, caches, and routes token traffic in under 8 milliseconds.\n            '}
          </p>
        </div>
        <div className={'space-y-24'}>
          <div className={'grid grid-cols-1 lg:grid-cols-12 gap-10 items-center'}>
            <div className={'min-w-0 lg:col-span-5 flex flex-col'}>
              <span className={'text-caption font-mono text-primary uppercase tracking-widest mb-3'}>
                {'{ 01 / Architectural Superiority }'}
              </span>
              <h3 className={'font-headline-md text-[36px] lg:text-[42px] text-cream-text font-semibold leading-tight mb-4'}>
                {'\n                  Deterministic Multi-Region Packet Routing\n                '}
              </h3>
              <p className={'font-body-md text-muted-text leading-relaxed mb-6'}>
                {'\n                  Traditional proxies introduce cascading TLS handshakes and opaque buffering delays. AI Hub deploys Rust-native edge daemons co-located with OpenAI, Anthropic, and Google Cloud availability zones.\n                '}
              </p>
              <ul className={'space-y-3 font-body-sm text-cream-text/90 border-t border-hairline pt-5'}>
                <li className={'flex items-center gap-3'}>
                  <span className={'w-1.5 h-1.5 rounded-full bg-primary-container'} />
                  <span>
                    {'Sub-8ms protocol translation to unified SSE chunk format'}
                  </span>
                </li>
                <li className={'flex items-center gap-3'}>
                  <span className={'w-1.5 h-1.5 rounded-full bg-primary-container'} />
                  <span>
                    {'Zero-disk prompt transit with zero retention guarantees'}
                  </span>
                </li>
                <li className={'flex items-center gap-3'}>
                  <span className={'w-1.5 h-1.5 rounded-full bg-primary-container'} />
                  <span>
                    {'Autonomous bypass routing around tier-1 upstream outages'}
                  </span>
                </li>
              </ul>
            </div>
            <div className={'min-w-0 lg:col-span-7 bg-surface-panel rounded-xl border border-hairline p-6 lg:p-8'}>
              <div className={'flex items-center justify-between pb-4 border-b border-hairline text-caption font-mono text-muted-text'}>
                <span className={'flex items-center gap-2'}>
                  <span className={'w-2 h-2 rounded-full bg-primary-container motion-safe:animate-pulse'} />
                  {'\n                    EDGE ROUTING TOPOLOGY\n                  '}
                </span>
                <span>
                  {'JITTER < 0.4ms'}
                </span>
              </div>
              <div className={'py-8'}>
                <svg className={'w-full h-48'} fill={'none'} viewBox={'0 0 700 180'} role={'img'} aria-labelledby={'routing-diagram-title'}>
                  <title id={'routing-diagram-title'}>
                    {'Routing requests from a client through AI Hub to Anthropic, OpenAI, and Google, with a failover path.'}
                  </title>
                  <circle cx={'60'} cy={'90'} fill={'#191919'} r={'28'} stroke={'#fffce1'} strokeWidth={'1.5'} />
                  <text fill={'#fffce1'} fontFamily={'DM Sans'} fontSize={12} fontWeight={600} textAnchor={'middle'} x={'60'} y={'94'}>
                    {'CLIENT'}
                  </text>
                  <circle cx={'280'} cy={'90'} fill={'#191919'} r={'34'} stroke={'#0ae448'} strokeWidth={2} />
                  <text fill={'#0ae448'} fontFamily={'DM Sans'} fontSize={12} fontWeight={600} textAnchor={'middle'} x={'280'} y={'87'}>
                    {'AI HUB'}
                  </text>
                  <text fill={'#9a9b91'} fontFamily={'DM Sans'} fontSize={12} textAnchor={'middle'} x={'280'} y={'103'}>
                    {'GATEWAY'}
                  </text>
                  <rect fill={'#1e201f'} height={'36'} rx={'6'} stroke={'#9d95ff'} strokeWidth={'1.2'} width={'140'} x={'520'} y={'20'} />
                  <text fill={'#fffce1'} fontFamily={'DM Sans'} fontSize={12} textAnchor={'middle'} x={'590'} y={'42'}>
                    {'Anthropic (Claude)'}
                  </text>
                  <rect fill={'#1e201f'} height={'36'} rx={'6'} stroke={'#00bae2'} strokeWidth={'1.2'} width={'140'} x={'520'} y={'72'} />
                  <text fill={'#fffce1'} fontFamily={'DM Sans'} fontSize={12} textAnchor={'middle'} x={'590'} y={'94'}>
                    {'OpenAI (GPT-4o)'}
                  </text>
                  <rect fill={'#1e201f'} height={'36'} rx={'6'} stroke={'#a3f67c'} strokeWidth={'1.2'} width={'140'} x={'520'} y={'124'} />
                  <text fill={'#fffce1'} fontFamily={'DM Sans'} fontSize={12} textAnchor={'middle'} x={'590'} y={'146'}>
                    {'Google (Gemini)'}
                  </text>
                  <path d={'M88 90 L246 90'} stroke={'#fffce1'} strokeDasharray={'4 4'} strokeWidth={'1.5'} />
                  <path d={'M314 80 L520 38'} stroke={'#9d95ff'} strokeWidth={'1.5'} />
                  <path d={'M314 90 L520 90'} stroke={'#00bae2'} strokeWidth={'1.5'} />
                  <path d={'M314 100 L520 142'} stroke={'#a3f67c'} strokeDasharray={'2 3'} strokeWidth={'1.5'} />
                  <path d={'M660 38 C685 38 685 90 660 90'} stroke={'#ff8709'} strokeDasharray={'3 3'} strokeWidth={'1.2'} />
                  <text fill={'#ff8709'} fontFamily={'DM Sans'} fontSize={12} textAnchor={'start'} x={'686'} y={'68'}>
                    {'Failover'}
                  </text>
                </svg>
              </div>
              <div className={'flex items-center justify-between text-caption font-caption text-muted-text border-t border-hairline pt-3 font-mono'}>
                <span>
                  {'Policy: Latency-Weighted Hedged Requests'}
                </span>
                <span className={'text-primary-container'}>
                  {'Active Failover Node: Oregon-US-West'}
                </span>
              </div>
            </div>
          </div>
          <div className={'grid grid-cols-1 lg:grid-cols-12 gap-10 items-center'}>
            <div className={'min-w-0 lg:col-span-7 order-2 lg:order-1 bg-surface-panel rounded-xl border border-hairline p-6 lg:p-8'}>
              <div className={'flex items-center justify-between pb-4 border-b border-hairline text-caption font-mono text-muted-text'}>
                <span className={'flex items-center gap-2'}>
                  <span className={'w-2 h-2 rounded-full bg-taxonomy-code-ui motion-safe:animate-pulse'} />
                  {'\n                    BENCHMARK TELEMETRY CONSOLE\n                  '}
                </span>
                <span>
                  {'SAMPLING: 50,000 RUNS/HR'}
                </span>
              </div>
              <div className={'py-6 space-y-4'}>
                <div>
                  <div className={'flex justify-between text-caption font-mono mb-1'}>
                    <span className={'text-cream-text'}>
                      {'Claude 3.5 Sonnet (TTFT)'}
                    </span>
                    <span className={'text-taxonomy-text-llm'}>
                      {'162ms p50 • 248ms p95'}
                    </span>
                  </div>
                  <div className={'w-full h-3 bg-surface-canvas rounded-full overflow-hidden p-0.5 border border-hairline'}>
                    <div className={'h-full bg-taxonomy-text-llm rounded-full'} />
                  </div>
                </div>
                <div>
                  <div className={'flex justify-between text-caption font-mono mb-1'}>
                    <span className={'text-cream-text'}>
                      {'GPT-4o Omnimodal (TTFT)'}
                    </span>
                    <span className={'text-taxonomy-multimodal-scroll'}>
                      {'184ms p50 • 290ms p95'}
                    </span>
                  </div>
                  <div className={'w-full h-3 bg-surface-canvas rounded-full overflow-hidden p-0.5 border border-hairline'}>
                    <div className={'h-full bg-taxonomy-multimodal-scroll rounded-full'} />
                  </div>
                </div>
                <div>
                  <div className={'flex justify-between text-caption font-mono mb-1'}>
                    <span className={'text-cream-text'}>
                      {'Gemini 1.5 Flash (TTFT)'}
                    </span>
                    <span className={'text-taxonomy-code-ui'}>
                      {'98ms p50 • 140ms p95'}
                    </span>
                  </div>
                  <div className={'w-full h-3 bg-surface-canvas rounded-full overflow-hidden p-0.5 border border-hairline'}>
                    <div className={'h-full bg-taxonomy-code-ui rounded-full'} />
                  </div>
                </div>
                <div>
                  <div className={'flex justify-between text-caption font-mono mb-1'}>
                    <span className={'text-cream-text'}>
                      {'Semantic Cache Re-hit'}
                    </span>
                    <span className={'text-primary-container'}>
                      {'4ms p50 • 8ms p95'}
                    </span>
                  </div>
                  <div className={'w-full h-3 bg-surface-canvas rounded-full overflow-hidden p-0.5 border border-hairline'}>
                    <div className={'h-full bg-primary-container rounded-full'} />
                  </div>
                </div>
              </div>
              <div className={'flex items-center justify-between text-caption font-caption text-muted-text border-t border-hairline pt-3 font-mono'}>
                <span>
                  {'Standardized MMLU-Pro & HumanEval'}
                </span>
                <span className={'text-cream-text'}>
                  {'Updated 4 mins ago'}
                </span>
              </div>
            </div>
            <div className={'min-w-0 lg:col-span-5 order-1 lg:order-2 flex flex-col'}>
              <span className={'text-caption font-mono text-taxonomy-code-ui uppercase tracking-widest mb-3'}>
                {'{ 02 / Telemetry & Benchmarks }'}
              </span>
              <h3 className={'font-headline-md text-[36px] lg:text-[42px] text-cream-text font-semibold leading-tight mb-4'}>
                {'\n                  Unbiased Observability Without Vendor Fog\n                '}
              </h3>
              <p className={'font-body-md text-muted-text leading-relaxed mb-6'}>
                {'\n                  Provider status pages frequently conceal silent queueing delays and token-bucket throttling. Our distributed synthetic canary network continuously benchmarks real payload latency across Tokyo, Frankfurt, and Virginia.\n                '}
              </p>
              <div className={'p-4 rounded-lg bg-surface-panel border border-hairline font-mono text-caption text-cream-text/90 break-all'}>
                <div className={'text-muted-text'}>
                  {'// Evaluator assertion'}
                </div>
                <div>
                  {'curl -H "X-AIHUB-AUDIT: true" https://api.aihub.io/v1/benchmarks'}
                </div>
              </div>
            </div>
          </div>
          <div className={'grid grid-cols-1 lg:grid-cols-12 gap-10 items-center'}>
            <div className={'min-w-0 lg:col-span-5 flex flex-col'}>
              <span className={'text-caption font-mono text-taxonomy-multimodal-scroll uppercase tracking-widest mb-3'}>
                {'{ 03 / Frictionless Integration }'}
              </span>
              <h3 className={'font-headline-md text-[36px] lg:text-[42px] text-cream-text font-semibold leading-tight mb-4'}>
                {'\n                  Zero Client-Side Refactoring\n                '}
              </h3>
              <p className={'font-body-md text-muted-text leading-relaxed mb-6'}>
                {'\n                  Maintain complete code compatibility. You do not need to install another heavy vendor abstraction or proprietary orchestrator. Swap your baseURL and plug your existing OpenAI-compatible SDK directly into production.\n                '}
              </p>
              <div className={'flex flex-wrap items-center gap-4 text-caption font-mono text-muted-text'}>
                <span className={'px-2.5 py-1 rounded bg-surface-panel border border-hairline text-cream-text'}>
                  {'Python'}
                </span>
                <span className={'px-2.5 py-1 rounded bg-surface-panel border border-hairline text-cream-text'}>
                  {'TypeScript'}
                </span>
                <span className={'px-2.5 py-1 rounded bg-surface-panel border border-hairline text-cream-text'}>
                  {'Go'}
                </span>
                <span className={'px-2.5 py-1 rounded bg-surface-panel border border-hairline text-cream-text'}>
                  {'Rust'}
                </span>
              </div>
            </div>
            <div className={'min-w-0 lg:col-span-7 bg-surface-panel rounded-xl border border-hairline p-6 lg:p-8'}>
              <div className={'flex items-center justify-between pb-4 border-b border-hairline text-caption font-mono text-cream-text'}>
                <span>
                  {'main.py — OpenAI SDK Plug & Play'}
                </span>
                <span className={'text-primary-container font-mono text-[12px]'}>
                  {'Zero Changes Needed'}
                </span>
              </div>
              <pre className={'font-mono text-[13px] text-cream-text/90 leading-relaxed overflow-x-auto py-4'}>
                <code>
                  <span className={'text-taxonomy-text-llm'}>
                    {'from'}
                  </span>
                  {' openai '}
                  <span className={'text-taxonomy-text-llm'}>
                    {'import'}
                  </span>
                  {' OpenAI\n\nclient = OpenAI(\n    base_url='}
                  <span className={'text-primary-container'}>
                    {'"https://api.aihub.io/v1"'}
                  </span>
                  {',\n    api_key='}
                  <span className={'text-taxonomy-code-ui'}>
                    {'"YOUR_API_KEY"'}
                  </span>
                  {'\n)\n\nresponse = client.chat.completions.create(\n    model='}
                  <span className={'text-taxonomy-multimodal-scroll'}>
                    {'"anthropic/claude-3-5-sonnet"'}
                  </span>
                  {', '}
                  <span className={'text-muted-text'}>
                    {'# or "openai/gpt-4o", "deepseek/v3"'}
                  </span>
                  {'\n    messages=[{'}
                  <span className={'text-cream-text'}>
                    {'"role"'}
                  </span>
                  {': '}
                  <span className={'text-cream-text'}>
                    {'"user"'}
                  </span>
                  {', '}
                  <span className={'text-cream-text'}>
                    {'"content"'}
                  </span>
                  {': '}
                  <span className={'text-primary'}>
                    {'"Synthesize research"'}
                  </span>
                  {'}],\n    extra_body={'}
                  <span className={'text-cream-text'}>
                    {'"fallback_models"'}
                  </span>
                  {': ['}
                  <span className={'text-taxonomy-code-ui'}>
                    {'"google/gemini-1.5-flash"'}
                  </span>
                  {']}\n)'}
                </code>
              </pre>
              <div className={'flex justify-between items-center text-caption font-caption text-muted-text border-t border-hairline pt-3 font-mono'}>
                <span>
                  {'Streaming chunks & Tool Calling schemas match 100%'}
                </span>
                <span className={'text-primary-container'}>
                  {'Validated 200 OK'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
