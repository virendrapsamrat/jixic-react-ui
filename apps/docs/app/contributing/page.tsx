export default function ContributingPage() {
  return (
    <article className="docs-page">
      <section className="docs-hero">
        <div className="docs-eyebrow">Guide</div>
        <h1>Contributing</h1>
        <p>
          Use pnpm, add tests with component changes, and include a changeset for public package
          updates.
        </p>
      </section>
      <section className="docs-section docs-prose">
        <h2>Local Workflow</h2>
        <p>
          Run <code>pnpm install</code>, <code>pnpm dev</code>, <code>pnpm test</code>, and{" "}
          <code>pnpm build</code>.
        </p>
        <p>
          Run <code>pnpm changeset</code> for changes that should appear in the package changelog.
        </p>
      </section>
    </article>
  );
}
