export default function AccessibilityPage() {
  return (
    <article className="docs-page">
      <section className="docs-hero">
        <div className="docs-eyebrow">Guide</div>
        <h1>Accessibility</h1>
        <p>
          Components are built on native HTML where possible and include focus states, semantic
          roles, keyboard behavior, and accessible names.
        </p>
      </section>
      <section className="docs-section docs-prose">
        <h2>Baseline</h2>
        <p>Colors are selected for WCAG 2.1 AA contrast in light and dark themes.</p>
        <p>
          Form controls connect labels, helper text, and validation errors with ARIA attributes.
        </p>
        <p>Modal focus is moved into the dialog, trapped while open, and restored when closed.</p>
      </section>
    </article>
  );
}
