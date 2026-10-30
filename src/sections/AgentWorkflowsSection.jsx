export default function AgentWorkflowsSection() {
  return (
    <section className={'w-full py-24 px-margin-mobile md:px-margin border-b border-hairline bg-surface-canvas'} id={'agent-workflows'}>
      <div className={'max-w-[1360px] mx-auto'}>
        <div className={'flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6'}>
          <div>
            <div className={'font-section-eyebrow text-section-eyebrow text-muted-text mb-space-xs font-mono'}>
              {'\n                { Autonomous Agent Ecosystem }\n              '}
            </div>
            <h2 className={'font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-cream-text tracking-tight font-semibold'}>
              {'\n                Multi-Agent Pipelines in Motion\n              '}
            </h2>
          </div>
          <p className={'font-body-md text-body-md text-muted-text max-w-md'}>
            {'\n              Inspect step-by-step pipeline executions, deterministic sandboxed memory trees, and multi-model collaboration topologies.\n            '}
          </p>
        </div>
        <div className={'grid grid-cols-1 lg:grid-cols-3 gap-8'}>
          <div className={'bg-surface-panel rounded-xl border border-hairline overflow-hidden flex flex-col justify-between'}>
            <div className={'p-6'}>
              <div className={'flex items-center justify-between mb-3'}>
                <span className={'px-2.5 py-0.5 rounded-full text-[12px] font-mono font-semibold border border-taxonomy-agent-svg text-taxonomy-agent-svg'}>
                  {'\n                    Pipeline #01\n                  '}
                </span>
                <span className={'text-caption font-mono text-muted-text'}>
                  {'3 Nodes'}
                </span>
              </div>
              <h3 className={'font-headline-sm text-[22px] text-cream-text font-semibold mb-2'}>
                {'Systems Architect Agent'}
              </h3>
              <p className={'text-body-sm text-muted-text mb-6'}>
                {'\n                  Ingests GitHub issues, runs static analysis, generates structural RFC proposals, and outputs unified PR diffs.\n                '}
              </p>
              <div className={'space-y-3 p-4 rounded-lg bg-surface-canvas border border-hairline font-mono text-[12px]'}>
                <div className={'flex items-center gap-2'}>
                  <span className={'w-4 h-4 rounded-full bg-primary-container/20 text-primary-container flex items-center justify-center text-[10px]'}>
                    {'1'}
                  </span>
                  <span className={'text-cream-text'}>
                    {'AST Parse'}
                  </span>
                  <span className={'ml-auto text-muted-text'}>
                    {'Claude 3.5'}
                  </span>
                </div>
                <div className={'w-0.5 h-2 bg-hairline ml-2'} />
                <div className={'flex items-center gap-2'}>
                  <span className={'w-4 h-4 rounded-full bg-taxonomy-code-ui/20 text-taxonomy-code-ui flex items-center justify-center text-[10px]'}>
                    {'2'}
                  </span>
                  <span className={'text-cream-text'}>
                    {'Logic Synthesis'}
                  </span>
                  <span className={'ml-auto text-muted-text'}>
                    {'o1-mini'}
                  </span>
                </div>
                <div className={'w-0.5 h-2 bg-hairline ml-2'} />
                <div className={'flex items-center gap-2'}>
                  <span className={'w-4 h-4 rounded-full bg-taxonomy-agent-svg/20 text-taxonomy-agent-svg flex items-center justify-center text-[10px]'}>
                    {'3'}
                  </span>
                  <span className={'text-cream-text'}>
                    {'Test Validation'}
                  </span>
                  <span className={'ml-auto text-primary'}>
                    {'0 Errors'}
                  </span>
                </div>
              </div>
            </div>
            <div className={'p-6 pt-0'}>
              <a className={'w-full inline-flex items-center justify-center h-[46px] rounded-full border border-cream-text text-cream-text text-button-text font-button-text text-[15px] hover:bg-cream-text/10 motion-safe:transition-colors'} href={'#get-started'}>
                {'\n                  Run Execution Sandbox\n                '}
              </a>
            </div>
          </div>
          <div className={'bg-surface-panel rounded-xl border border-hairline overflow-hidden flex flex-col justify-between'}>
            <div className={'p-6'}>
              <div className={'flex items-center justify-between mb-3'}>
                <span className={'px-2.5 py-0.5 rounded-full text-[12px] font-mono font-semibold border border-taxonomy-multimodal-scroll text-taxonomy-multimodal-scroll'}>
                  {'\n                    Pipeline #02\n                  '}
                </span>
                <span className={'text-caption font-mono text-muted-text'}>
                  {'4 Nodes'}
                </span>
              </div>
              <h3 className={'font-headline-sm text-[22px] text-cream-text font-semibold mb-2'}>
                {'Multimodal Data Synthesizer'}
              </h3>
              <p className={'text-body-sm text-muted-text mb-6'}>
                {'\n                  Downloads financial PDF earnings, executes OCR with bounding boxes, computes rolling EBITDA, and formats charts.\n                '}
              </p>
              <div className={'space-y-3 p-4 rounded-lg bg-surface-canvas border border-hairline font-mono text-[12px]'}>
                <div className={'flex items-center gap-2'}>
                  <span className={'w-4 h-4 rounded-full bg-taxonomy-multimodal-scroll/20 text-taxonomy-multimodal-scroll flex items-center justify-center text-[10px]'}>
                    {'1'}
                  </span>
                  <span className={'text-cream-text'}>
                    {'Vision Vectorize'}
                  </span>
                  <span className={'ml-auto text-muted-text'}>
                    {'GPT-4o'}
                  </span>
                </div>
                <div className={'w-0.5 h-2 bg-hairline ml-2'} />
                <div className={'flex items-center gap-2'}>
                  <span className={'w-4 h-4 rounded-full bg-taxonomy-code-ui/20 text-taxonomy-code-ui flex items-center justify-center text-[10px]'}>
                    {'2'}
                  </span>
                  <span className={'text-cream-text'}>
                    {'Pandas Sandbox'}
                  </span>
                  <span className={'ml-auto text-muted-text'}>
                    {'Pyodide'}
                  </span>
                </div>
                <div className={'w-0.5 h-2 bg-hairline ml-2'} />
                <div className={'flex items-center gap-2'}>
                  <span className={'w-4 h-4 rounded-full bg-primary-container/20 text-primary-container flex items-center justify-center text-[10px]'}>
                    {'3'}
                  </span>
                  <span className={'text-cream-text'}>
                    {'Briefing Output'}
                  </span>
                  <span className={'ml-auto text-primary'}>
                    {'Markdown'}
                  </span>
                </div>
              </div>
            </div>
            <div className={'p-6 pt-0'}>
              <a className={'w-full inline-flex items-center justify-center h-[46px] rounded-full border border-cream-text text-cream-text text-button-text font-button-text text-[15px] hover:bg-cream-text/10 motion-safe:transition-colors'} href={'#get-started'}>
                {'\n                  Run Execution Sandbox\n                '}
              </a>
            </div>
          </div>
          <div className={'bg-surface-panel rounded-xl border border-hairline overflow-hidden flex flex-col justify-between'}>
            <div className={'p-6'}>
              <div className={'flex items-center justify-between mb-3'}>
                <span className={'px-2.5 py-0.5 rounded-full text-[12px] font-mono font-semibold border border-taxonomy-code-ui text-taxonomy-code-ui'}>
                  {'\n                    Pipeline #03\n                  '}
                </span>
                <span className={'text-caption font-mono text-muted-text'}>
                  {'2 Nodes'}
                </span>
              </div>
              <h3 className={'font-headline-sm text-[22px] text-cream-text font-semibold mb-2'}>
                {'Autonomous UI Transformer'}
              </h3>
              <p className={'text-body-sm text-muted-text mb-6'}>
                {'\n                  Converts design tokens and screenshot mockups into semantic, responsive Tailwind CSS with complete ARIA attributes.\n                '}
              </p>
              <div className={'space-y-3 p-4 rounded-lg bg-surface-canvas border border-hairline font-mono text-[12px]'}>
                <div className={'flex items-center gap-2'}>
                  <span className={'w-4 h-4 rounded-full bg-taxonomy-code-ui/20 text-taxonomy-code-ui flex items-center justify-center text-[10px]'}>
                    {'1'}
                  </span>
                  <span className={'text-cream-text'}>
                    {'Visual Segmentation'}
                  </span>
                  <span className={'ml-auto text-muted-text'}>
                    {'Gemini 1.5'}
                  </span>
                </div>
                <div className={'w-0.5 h-2 bg-hairline ml-2'} />
                <div className={'flex items-center gap-2'}>
                  <span className={'w-4 h-4 rounded-full bg-primary-container/20 text-primary-container flex items-center justify-center text-[10px]'}>
                    {'2'}
                  </span>
                  <span className={'text-cream-text'}>
                    {'Code Emit'}
                  </span>
                  <span className={'ml-auto text-muted-text'}>
                    {'Qwen 2.5 Coder'}
                  </span>
                </div>
                <div className={'w-0.5 h-2 bg-hairline ml-2'} />
                <div className={'flex items-center gap-2'}>
                  <span className={'w-4 h-4 rounded-full bg-taxonomy-text-llm/20 text-taxonomy-text-llm flex items-center justify-center text-[10px]'}>
                    {'3'}
                  </span>
                  <span className={'text-cream-text'}>
                    {'Accessibility Linter'}
                  </span>
                  <span className={'ml-auto text-primary'}>
                    {'Passed WCAG'}
                  </span>
                </div>
              </div>
            </div>
            <div className={'p-6 pt-0'}>
              <a className={'w-full inline-flex items-center justify-center h-[46px] rounded-full border border-cream-text text-cream-text text-button-text font-button-text text-[15px] hover:bg-cream-text/10 motion-safe:transition-colors'} href={'#get-started'}>
                {'\n                  Run Execution Sandbox\n                '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
