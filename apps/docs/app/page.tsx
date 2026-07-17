import Link from "next/link";
import { componentDocs } from "../src/content/components";

export default function HomePage() {
  return (
    <div className="docs-page">
      <section className="docs-hero">
        <div className="docs-eyebrow">React and TypeScript UI components</div>
        <h1>@jixic/react-ui</h1>
        <p>
          A public, framework-agnostic component library for React and Next.js web applications,
          with accessible primitives, design tokens, tests, and a documentation playground.
        </p>
      </section>
      <section className="docs-section">
        <h2>Components</h2>
        <div className="docs-grid">
          {componentDocs.map((component) => (
            <Link
              className="docs-link-card"
              href={`/components/${component.slug}`}
              key={component.slug}
            >
              <strong>{component.name}</strong>
              <span>{component.description}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
