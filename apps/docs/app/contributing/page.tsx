export default function ContributingPage() {
  return (
    <article className="docs-page">
      <section className="docs-hero">
        <div className="docs-eyebrow">Guide</div>
        <h1>Contributing</h1>
        <p>
          Use npm, add tests with component changes, and include a changeset for public package
          updates.
        </p>
      </section>
      <section className="docs-section docs-prose">
        <h2>Local Workflow</h2>
        <p>
          Run <code>npm install</code>, <code>npm run dev</code>, <code>npm run test</code>, and{" "}
          <code>npm run build</code>.
        </p>
        <p>
          Yarn and pnpm can also be used if your project prefers them.
        </p>
        <p>
          Run <code>npm run changeset</code> for changes that should appear in the package
          changelog.
        </p>
      </section>
    </article>
  );
}
