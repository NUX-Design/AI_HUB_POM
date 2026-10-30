export default function ModelMatrixSection() {
  return (
    <section className={'w-full py-24 px-margin-mobile md:px-margin border-b border-hairline bg-surface-canvas'} id={'model-matrix'}>
      <div className={'max-w-[1360px] mx-auto'}>
        <div className={'flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6'}>
          <div>
            <div className={'font-section-eyebrow text-section-eyebrow text-muted-text mb-space-xs font-mono'}>
              {'\n                { Model Directory & Spec Sheet }\n              '}
            </div>
            <h2 className={'font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-cream-text tracking-tight font-semibold'}>
              {'\n                Universal Model Matrix\n              '}
            </h2>
          </div>
          <p className={'font-body-md text-body-md text-muted-text max-w-md'}>
            {'\n              Comprehensive telemetry, token unit economics, and architectural specifications for active frontier models.\n            '}
          </p>
        </div>
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>
          <div className={'bg-surface-panel p-7 rounded-xl border border-hairline flex flex-col justify-between hover:border-hairline/90 motion-safe:transition-all group'}>
            <div>
              <div className={'flex items-center justify-between mb-4'}>
                <span className={'inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-semibold border border-taxonomy-text-llm text-taxonomy-text-llm'}>
                  {'\n                    Anthropic\n                  '}
                </span>
                <span className={'text-caption font-mono text-primary-container'}>
                  {'164ms p50'}
                </span>
              </div>
              <h3 className={'font-headline-sm text-[26px] text-cream-text font-semibold mb-1'}>
                {'Claude 3.5 Sonnet'}
              </h3>
              <p className={'text-caption font-caption text-muted-text mb-5 font-mono'}>
                {'claude-3-5-sonnet-20241022'}
              </p>
              <div className={'space-y-2.5 mb-6'}>
                <div>
                  <div className={'flex justify-between text-[12px] font-mono mb-1'}>
                    <span className={'text-muted-text'}>
                      {'Coding & Logic'}
                    </span>
                    <span className={'text-cream-text font-semibold'}>
                      {'93.7%'}
                    </span>
                  </div>
                  <div className={'w-full h-1.5 bg-surface-canvas rounded-full overflow-hidden'}>
                    <div className={'bg-taxonomy-text-llm h-full rounded-full'} />
                  </div>
                </div>
                <div>
                  <div className={'flex justify-between text-[12px] font-mono mb-1'}>
                    <span className={'text-muted-text'}>
                      {'Tool Use & Agents'}
                    </span>
                    <span className={'text-cream-text font-semibold'}>
                      {'96.2%'}
                    </span>
                  </div>
                  <div className={'w-full h-1.5 bg-surface-canvas rounded-full overflow-hidden'}>
                    <div className={'bg-primary-container h-full rounded-full'} />
                  </div>
                </div>
              </div>
              <div className={'grid grid-cols-2 gap-2 p-3 rounded-lg bg-surface-canvas border border-hairline font-mono text-[12px]'}>
                <div>
                  <span className={'text-muted-text block text-[12px]'}>
                    {'Input / 1M'}
                  </span>
                  <span className={'text-cream-text font-semibold'}>
                    {'$3.00'}
                  </span>
                </div>
                <div>
                  <span className={'text-muted-text block text-[12px]'}>
                    {'Output / 1M'}
                  </span>
                  <span className={'text-cream-text font-semibold'}>
                    {'$15.00'}
                  </span>
                </div>
                <div className={'col-span-2 pt-2 border-t border-hairline/60 flex justify-between'}>
                  <span className={'text-muted-text'}>
                    {'Context Window:'}
                  </span>
                  <span className={'text-cream-text'}>
                    {'200,000 tokens'}
                  </span>
                </div>
              </div>
            </div>
            <div className={'mt-6 pt-4 border-t border-hairline flex items-center justify-between'}>
              <a className={'text-caption font-mono text-primary hover:underline inline-flex items-center gap-1'} href={'#playground'}>
                <span>
                  {'Read Spec'}
                </span>
                <span className={'material-symbols-outlined text-[14px]'} aria-hidden={'true'}>
                  {'arrow_forward'}
                </span>
              </a>
              <a className={'min-h-11 px-4 rounded-full border border-cream-text/70 text-cream-text text-[13px] hover:bg-cream-text/10 motion-safe:transition-colors'} href={'#telemetry'}>
                {'\n                  Benchmark\n                '}
              </a>
            </div>
          </div>
          <div className={'bg-surface-panel p-7 rounded-xl border border-hairline flex flex-col justify-between hover:border-hairline/90 motion-safe:transition-all group'}>
            <div>
              <div className={'flex items-center justify-between mb-4'}>
                <span className={'inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-semibold border border-taxonomy-multimodal-scroll text-taxonomy-multimodal-scroll'}>
                  {'\n                    OpenAI\n                  '}
                </span>
                <span className={'text-caption font-mono text-primary-container'}>
                  {'188ms p50'}
                </span>
              </div>
              <h3 className={'font-headline-sm text-[26px] text-cream-text font-semibold mb-1'}>
                {'GPT-4o Omnimodal'}
              </h3>
              <p className={'text-caption font-caption text-muted-text mb-5 font-mono'}>
                {'gpt-4o-2024-08-06'}
              </p>
              <div className={'space-y-2.5 mb-6'}>
                <div>
                  <div className={'flex justify-between text-[12px] font-mono mb-1'}>
                    <span className={'text-muted-text'}>
                      {'Vision & Audio IO'}
                    </span>
                    <span className={'text-cream-text font-semibold'}>
                      {'95.4%'}
                    </span>
                  </div>
                  <div className={'w-full h-1.5 bg-surface-canvas rounded-full overflow-hidden'}>
                    <div className={'bg-taxonomy-multimodal-scroll h-full rounded-full'} />
                  </div>
                </div>
                <div>
                  <div className={'flex justify-between text-[12px] font-mono mb-1'}>
                    <span className={'text-muted-text'}>
                      {'Multilingual Reasoning'}
                    </span>
                    <span className={'text-cream-text font-semibold'}>
                      {'91.8%'}
                    </span>
                  </div>
                  <div className={'w-full h-1.5 bg-surface-canvas rounded-full overflow-hidden'}>
                    <div className={'bg-primary-container h-full rounded-full'} />
                  </div>
                </div>
              </div>
              <div className={'grid grid-cols-2 gap-2 p-3 rounded-lg bg-surface-canvas border border-hairline font-mono text-[12px]'}>
                <div>
                  <span className={'text-muted-text block text-[12px]'}>
                    {'Input / 1M'}
                  </span>
                  <span className={'text-cream-text font-semibold'}>
                    {'$2.50'}
                  </span>
                </div>
                <div>
                  <span className={'text-muted-text block text-[12px]'}>
                    {'Output / 1M'}
                  </span>
                  <span className={'text-cream-text font-semibold'}>
                    {'$10.00'}
                  </span>
                </div>
                <div className={'col-span-2 pt-2 border-t border-hairline/60 flex justify-between'}>
                  <span className={'text-muted-text'}>
                    {'Context Window:'}
                  </span>
                  <span className={'text-cream-text'}>
                    {'128,000 tokens'}
                  </span>
                </div>
              </div>
            </div>
            <div className={'mt-6 pt-4 border-t border-hairline flex items-center justify-between'}>
              <a className={'text-caption font-mono text-primary hover:underline inline-flex items-center gap-1'} href={'#playground'}>
                <span>
                  {'Read Spec'}
                </span>
                <span className={'material-symbols-outlined text-[14px]'} aria-hidden={'true'}>
                  {'arrow_forward'}
                </span>
              </a>
              <a className={'min-h-11 px-4 rounded-full border border-cream-text/70 text-cream-text text-[13px] hover:bg-cream-text/10 motion-safe:transition-colors'} href={'#telemetry'}>
                {'\n                  Benchmark\n                '}
              </a>
            </div>
          </div>
          <div className={'bg-surface-panel p-7 rounded-xl border border-hairline flex flex-col justify-between hover:border-hairline/90 motion-safe:transition-all group'}>
            <div>
              <div className={'flex items-center justify-between mb-4'}>
                <span className={'inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-semibold border border-taxonomy-code-ui text-taxonomy-code-ui'}>
                  {'\n                    Google DeepMind\n                  '}
                </span>
                <span className={'text-caption font-mono text-primary-container'}>
                  {'98ms p50'}
                </span>
              </div>
              <h3 className={'font-headline-sm text-[26px] text-cream-text font-semibold mb-1'}>
                {'Gemini 1.5 Flash'}
              </h3>
              <p className={'text-caption font-caption text-muted-text mb-5 font-mono'}>
                {'gemini-1.5-flash-002'}
              </p>
              <div className={'space-y-2.5 mb-6'}>
                <div>
                  <div className={'flex justify-between text-[12px] font-mono mb-1'}>
                    <span className={'text-muted-text'}>
                      {'Long-Context Retrieval'}
                    </span>
                    <span className={'text-cream-text font-semibold'}>
                      {'99.1%'}
                    </span>
                  </div>
                  <div className={'w-full h-1.5 bg-surface-canvas rounded-full overflow-hidden'}>
                    <div className={'bg-taxonomy-code-ui h-full rounded-full'} />
                  </div>
                </div>
                <div>
                  <div className={'flex justify-between text-[12px] font-mono mb-1'}>
                    <span className={'text-muted-text'}>
                      {'Cost Efficiency Score'}
                    </span>
                    <span className={'text-cream-text font-semibold'}>
                      {'98.5%'}
                    </span>
                  </div>
                  <div className={'w-full h-1.5 bg-surface-canvas rounded-full overflow-hidden'}>
                    <div className={'bg-primary-container h-full rounded-full'} />
                  </div>
                </div>
              </div>
              <div className={'grid grid-cols-2 gap-2 p-3 rounded-lg bg-surface-canvas border border-hairline font-mono text-[12px]'}>
                <div>
                  <span className={'text-muted-text block text-[12px]'}>
                    {'Input / 1M'}
                  </span>
                  <span className={'text-cream-text font-semibold'}>
                    {'$0.075'}
                  </span>
                </div>
                <div>
                  <span className={'text-muted-text block text-[12px]'}>
                    {'Output / 1M'}
                  </span>
                  <span className={'text-cream-text font-semibold'}>
                    {'$0.30'}
                  </span>
                </div>
                <div className={'col-span-2 pt-2 border-t border-hairline/60 flex justify-between'}>
                  <span className={'text-muted-text'}>
                    {'Context Window:'}
                  </span>
                  <span className={'text-primary'}>
                    {'1,000,000 tokens'}
                  </span>
                </div>
              </div>
            </div>
            <div className={'mt-6 pt-4 border-t border-hairline flex items-center justify-between'}>
              <a className={'text-caption font-mono text-primary hover:underline inline-flex items-center gap-1'} href={'#playground'}>
                <span>
                  {'Read Spec'}
                </span>
                <span className={'material-symbols-outlined text-[14px]'} aria-hidden={'true'}>
                  {'arrow_forward'}
                </span>
              </a>
              <a className={'min-h-11 px-4 rounded-full border border-cream-text/70 text-cream-text text-[13px] hover:bg-cream-text/10 motion-safe:transition-colors'} href={'#telemetry'}>
                {'\n                  Benchmark\n                '}
              </a>
            </div>
          </div>
          <div className={'bg-surface-panel p-7 rounded-xl border border-hairline flex flex-col justify-between hover:border-hairline/90 motion-safe:transition-all group'}>
            <div>
              <div className={'flex items-center justify-between mb-4'}>
                <span className={'inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-semibold border border-taxonomy-agent-svg text-taxonomy-agent-svg'}>
                  {'\n                    DeepSeek AI\n                  '}
                </span>
                <span className={'text-caption font-mono text-primary-container'}>
                  {'128ms p50'}
                </span>
              </div>
              <h3 className={'font-headline-sm text-[26px] text-cream-text font-semibold mb-1'}>
                {'DeepSeek-V3 MoE'}
              </h3>
              <p className={'text-caption font-caption text-muted-text mb-5 font-mono'}>
                {'deepseek-chat-v3-671b'}
              </p>
              <div className={'space-y-2.5 mb-6'}>
                <div>
                  <div className={'flex justify-between text-[12px] font-mono mb-1'}>
                    <span className={'text-muted-text'}>
                      {'Open Math & Code'}
                    </span>
                    <span className={'text-cream-text font-semibold'}>
                      {'92.6%'}
                    </span>
                  </div>
                  <div className={'w-full h-1.5 bg-surface-canvas rounded-full overflow-hidden'}>
                    <div className={'bg-taxonomy-agent-svg h-full rounded-full'} />
                  </div>
                </div>
                <div>
                  <div className={'flex justify-between text-[12px] font-mono mb-1'}>
                    <span className={'text-muted-text'}>
                      {'MoE Sparsity Balance'}
                    </span>
                    <span className={'text-cream-text font-semibold'}>
                      {'94.0%'}
                    </span>
                  </div>
                  <div className={'w-full h-1.5 bg-surface-canvas rounded-full overflow-hidden'}>
                    <div className={'bg-primary-container h-full rounded-full'} />
                  </div>
                </div>
              </div>
              <div className={'grid grid-cols-2 gap-2 p-3 rounded-lg bg-surface-canvas border border-hairline font-mono text-[12px]'}>
                <div>
                  <span className={'text-muted-text block text-[12px]'}>
                    {'Input / 1M'}
                  </span>
                  <span className={'text-cream-text font-semibold'}>
                    {'$0.14'}
                  </span>
                </div>
                <div>
                  <span className={'text-muted-text block text-[12px]'}>
                    {'Output / 1M'}
                  </span>
                  <span className={'text-cream-text font-semibold'}>
                    {'$0.28'}
                  </span>
                </div>
                <div className={'col-span-2 pt-2 border-t border-hairline/60 flex justify-between'}>
                  <span className={'text-muted-text'}>
                    {'Context Window:'}
                  </span>
                  <span className={'text-cream-text'}>
                    {'64,000 tokens'}
                  </span>
                </div>
              </div>
            </div>
            <div className={'mt-6 pt-4 border-t border-hairline flex items-center justify-between'}>
              <a className={'text-caption font-mono text-primary hover:underline inline-flex items-center gap-1'} href={'#playground'}>
                <span>
                  {'Read Spec'}
                </span>
                <span className={'material-symbols-outlined text-[14px]'} aria-hidden={'true'}>
                  {'arrow_forward'}
                </span>
              </a>
              <a className={'min-h-11 px-4 rounded-full border border-cream-text/70 text-cream-text text-[13px] hover:bg-cream-text/10 motion-safe:transition-colors'} href={'#telemetry'}>
                {'\n                  Benchmark\n                '}
              </a>
            </div>
          </div>
          <div className={'bg-surface-panel p-7 rounded-xl border border-hairline flex flex-col justify-between hover:border-hairline/90 motion-safe:transition-all group'}>
            <div>
              <div className={'flex items-center justify-between mb-4'}>
                <span className={'inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-semibold border border-taxonomy-code-ui text-taxonomy-code-ui'}>
                  {'\n                    Alibaba Cloud\n                  '}
                </span>
                <span className={'text-caption font-mono text-primary-container'}>
                  {'132ms p50'}
                </span>
              </div>
              <h3 className={'font-headline-sm text-[26px] text-cream-text font-semibold mb-1'}>
                {'Qwen 2.5 Coder 32B'}
              </h3>
              <p className={'text-caption font-caption text-muted-text mb-5 font-mono'}>
                {'qwen-2.5-coder-32b-instruct'}
              </p>
              <div className={'space-y-2.5 mb-6'}>
                <div>
                  <div className={'flex justify-between text-[12px] font-mono mb-1'}>
                    <span className={'text-muted-text'}>
                      {'Frontend & DOM Parsing'}
                    </span>
                    <span className={'text-cream-text font-semibold'}>
                      {'90.2%'}
                    </span>
                  </div>
                  <div className={'w-full h-1.5 bg-surface-canvas rounded-full overflow-hidden'}>
                    <div className={'bg-taxonomy-code-ui h-full rounded-full'} />
                  </div>
                </div>
                <div>
                  <div className={'flex justify-between text-[12px] font-mono mb-1'}>
                    <span className={'text-muted-text'}>
                      {'FIM (Fill-in-Middle)'}
                    </span>
                    <span className={'text-cream-text font-semibold'}>
                      {'93.8%'}
                    </span>
                  </div>
                  <div className={'w-full h-1.5 bg-surface-canvas rounded-full overflow-hidden'}>
                    <div className={'bg-primary-container h-full rounded-full'} />
                  </div>
                </div>
              </div>
              <div className={'grid grid-cols-2 gap-2 p-3 rounded-lg bg-surface-canvas border border-hairline font-mono text-[12px]'}>
                <div>
                  <span className={'text-muted-text block text-[12px]'}>
                    {'Input / 1M'}
                  </span>
                  <span className={'text-cream-text font-semibold'}>
                    {'$0.20'}
                  </span>
                </div>
                <div>
                  <span className={'text-muted-text block text-[12px]'}>
                    {'Output / 1M'}
                  </span>
                  <span className={'text-cream-text font-semibold'}>
                    {'$0.60'}
                  </span>
                </div>
                <div className={'col-span-2 pt-2 border-t border-hairline/60 flex justify-between'}>
                  <span className={'text-muted-text'}>
                    {'Context Window:'}
                  </span>
                  <span className={'text-cream-text'}>
                    {'128,000 tokens'}
                  </span>
                </div>
              </div>
            </div>
            <div className={'mt-6 pt-4 border-t border-hairline flex items-center justify-between'}>
              <a className={'text-caption font-mono text-primary hover:underline inline-flex items-center gap-1'} href={'#playground'}>
                <span>
                  {'Read Spec'}
                </span>
                <span className={'material-symbols-outlined text-[14px]'} aria-hidden={'true'}>
                  {'arrow_forward'}
                </span>
              </a>
              <a className={'min-h-11 px-4 rounded-full border border-cream-text/70 text-cream-text text-[13px] hover:bg-cream-text/10 motion-safe:transition-colors'} href={'#telemetry'}>
                {'\n                  Benchmark\n                '}
              </a>
            </div>
          </div>
          <div className={'bg-surface-panel p-7 rounded-xl border border-hairline flex flex-col justify-between hover:border-hairline/90 motion-safe:transition-all group'}>
            <div>
              <div className={'flex items-center justify-between mb-4'}>
                <span className={'inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-semibold border border-taxonomy-text-llm text-taxonomy-text-llm'}>
                  {'\n                    Meta AI\n                  '}
                </span>
                <span className={'text-caption font-mono text-primary-container'}>
                  {'119ms p50'}
                </span>
              </div>
              <h3 className={'font-headline-sm text-[26px] text-cream-text font-semibold mb-1'}>
                {'Llama 3.3 70B'}
              </h3>
              <p className={'text-caption font-caption text-muted-text mb-5 font-mono'}>
                {'meta-llama-3.3-70b-instruct'}
              </p>
              <div className={'space-y-2.5 mb-6'}>
                <div>
                  <div className={'flex justify-between text-[12px] font-mono mb-1'}>
                    <span className={'text-muted-text'}>
                      {'Open Weight Generalist'}
                    </span>
                    <span className={'text-cream-text font-semibold'}>
                      {'88.5%'}
                    </span>
                  </div>
                  <div className={'w-full h-1.5 bg-surface-canvas rounded-full overflow-hidden'}>
                    <div className={'bg-taxonomy-text-llm h-full rounded-full'} />
                  </div>
                </div>
                <div>
                  <div className={'flex justify-between text-[12px] font-mono mb-1'}>
                    <span className={'text-muted-text'}>
                      {'Throughput Saturation'}
                    </span>
                    <span className={'text-cream-text font-semibold'}>
                      {'96.7%'}
                    </span>
                  </div>
                  <div className={'w-full h-1.5 bg-surface-canvas rounded-full overflow-hidden'}>
                    <div className={'bg-primary-container h-full rounded-full'} />
                  </div>
                </div>
              </div>
              <div className={'grid grid-cols-2 gap-2 p-3 rounded-lg bg-surface-canvas border border-hairline font-mono text-[12px]'}>
                <div>
                  <span className={'text-muted-text block text-[12px]'}>
                    {'Input / 1M'}
                  </span>
                  <span className={'text-cream-text font-semibold'}>
                    {'$0.18'}
                  </span>
                </div>
                <div>
                  <span className={'text-muted-text block text-[12px]'}>
                    {'Output / 1M'}
                  </span>
                  <span className={'text-cream-text font-semibold'}>
                    {'$0.54'}
                  </span>
                </div>
                <div className={'col-span-2 pt-2 border-t border-hairline/60 flex justify-between'}>
                  <span className={'text-muted-text'}>
                    {'Context Window:'}
                  </span>
                  <span className={'text-cream-text'}>
                    {'128,000 tokens'}
                  </span>
                </div>
              </div>
            </div>
            <div className={'mt-6 pt-4 border-t border-hairline flex items-center justify-between'}>
              <a className={'text-caption font-mono text-primary hover:underline inline-flex items-center gap-1'} href={'#playground'}>
                <span>
                  {'Read Spec'}
                </span>
                <span className={'material-symbols-outlined text-[14px]'} aria-hidden={'true'}>
                  {'arrow_forward'}
                </span>
              </a>
              <a className={'min-h-11 px-4 rounded-full border border-cream-text/70 text-cream-text text-[13px] hover:bg-cream-text/10 motion-safe:transition-colors'} href={'#telemetry'}>
                {'\n                  Benchmark\n                '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
