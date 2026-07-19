import Link from "next/link";
import { componentDocs } from "../src/content/components";

export default function HomePage() {
  return (
    <div className="docs-page">
      <section className="docs-hero">
        <div className="docs-eyebrow">React and TypeScript UI components</div>
        <h1>@jixic/react-ui</h1>
        <p>
          Accessible React UI components for web and Next.js applications, with TypeScript types,
          CSS variable themes, design tokens, tests, and a companion React Native UI package.
        </p>
      </section>
      <section className="docs-section">
        <h2>Why choose it</h2>
        <div className="docs-grid">
          <div className="docs-link-card">
            <strong>Search-friendly package</strong>
            <span>
              Clear npm metadata, useful keywords, repository links, package docs, and install
              examples for npm, Yarn, and pnpm.
            </span>
          </div>
          <div className="docs-link-card">
            <strong>Production-ready React web</strong>
            <span>
              Built for React 18, React 19, Next.js, Vite, Remix, Astro, and other DOM-based React
              apps.
            </span>
          </div>
          <div className="docs-link-card">
            <strong>React Native UI package</strong>
            <span>
              Native support ships as `@jixic/react-native-ui`, sharing tokens and component API
              ideas without depending on browser CSS.
            </span>
          </div>
        </div>
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
