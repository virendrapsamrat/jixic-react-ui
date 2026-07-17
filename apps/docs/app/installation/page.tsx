import { CopyButton } from "../../src/components/CopyButton";

const packageLinks = [
  { href: "https://www.npmjs.com/package/@jixic/react-ui", label: "npm package" },
  { href: "https://github.com/virendrapsamrat/-jixic-react-ui", label: "GitHub repository" },
];

const packageManagers = [
  { label: "npm", command: "npm install @jixic/react-ui react react-dom" },
  { label: "Yarn", command: "yarn add @jixic/react-ui react react-dom" },
  { label: "pnpm", command: "pnpm add @jixic/react-ui react react-dom" },
];

const usage = `import { Button, Card, CardContent, Input } from "@jixic/react-ui";
import "@jixic/react-ui/styles.css";

export function Example() {
  return (
    <Card>
      <CardContent>
        <Input label="Email" type="email" />
        <Button>Continue</Button>
      </CardContent>
    </Card>
  );
}`;

export default function InstallationPage() {
  return (
    <article className="docs-page">
      <section className="docs-hero">
        <div className="docs-eyebrow">Guide</div>
        <h1>Installation</h1>
        <p>
          Install the package with your preferred package manager, import the stylesheet once, and
          use named exports from the root.
        </p>
      </section>
      <section className="docs-section">
        <h2>Package</h2>
        <p>
          `@jixic/react-ui` supports React 18 and React 19. React and React DOM are peer
          dependencies, so install them in the app that consumes the library.
        </p>
        <div className="docs-install-list">
          {packageManagers.map((manager) => (
            <div className="docs-install-item" key={manager.label}>
              <div className="docs-code-header">
                <h3>{manager.label}</h3>
                <CopyButton value={manager.command} />
              </div>
              <pre className="docs-code">
                <code>{manager.command}</code>
              </pre>
            </div>
          ))}
        </div>
      </section>
      <section className="docs-section">
        <div className="docs-code-header">
          <h2>Usage</h2>
          <CopyButton value={usage} />
        </div>
        <pre className="docs-code">
          <code>{usage}</code>
        </pre>
      </section>
      <section className="docs-section">
        <h2>Package Details</h2>
        <table className="docs-table">
          <tbody>
            <tr>
              <th scope="row">Imports</th>
              <td>Use named component exports from `@jixic/react-ui`.</td>
            </tr>
            <tr>
              <th scope="row">Styles</th>
              <td>Import `@jixic/react-ui/styles.css` once in your app shell or root layout.</td>
            </tr>
            <tr>
              <th scope="row">Types</th>
              <td>TypeScript declarations are included with the package.</td>
            </tr>
            <tr>
              <th scope="row">Builds</th>
              <td>ESM and CommonJS entry points are published from `dist`.</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="docs-section">
        <h2>References</h2>
        <div className="docs-reference-links">
          {packageLinks.map((link) => (
            <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </article>
  );
}
