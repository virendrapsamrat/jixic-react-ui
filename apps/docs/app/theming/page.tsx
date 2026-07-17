import { colors, spacing, typography } from "@jixic/react-ui";

export default function ThemingPage() {
  return (
    <article className="docs-page">
      <section className="docs-hero">
        <div className="docs-eyebrow">Guide</div>
        <h1>Theming and Tokens</h1>
        <p>
          The package ships CSS variables for color, spacing, typography, radius, and focus rings.
          Add
          <code> data-ui-theme=&quot;dark&quot;</code> to a parent element to switch themes.
        </p>
      </section>
      <section className="docs-section">
        <h2>Color Tokens</h2>
        <pre className="docs-code">
          <code>{JSON.stringify(colors, null, 2)}</code>
        </pre>
      </section>
      <section className="docs-section">
        <h2>Spacing Tokens</h2>
        <pre className="docs-code">
          <code>{JSON.stringify(spacing, null, 2)}</code>
        </pre>
      </section>
      <section className="docs-section">
        <h2>Typography Tokens</h2>
        <pre className="docs-code">
          <code>{JSON.stringify(typography, null, 2)}</code>
        </pre>
      </section>
    </article>
  );
}
