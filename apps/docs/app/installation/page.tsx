import { CopyButton } from "../../src/components/CopyButton";

const install = "pnpm add @jixic/react-ui react react-dom";
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
        <p>Install the package, import the stylesheet once, and use named exports from the root.</p>
      </section>
      <section className="docs-section">
        <div className="docs-code-header">
          <h2>Package</h2>
          <CopyButton value={install} />
        </div>
        <pre className="docs-code">
          <code>{install}</code>
        </pre>
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
    </article>
  );
}
