import { CopyButton } from "../../src/components/CopyButton";

const packageLinks = [
  { href: "https://www.npmjs.com/package/@jixic/react-ui", label: "React web npm package" },
  {
    href: "https://www.npmjs.com/package/@jixic/react-native-ui",
    label: "React Native npm package",
  },
  { href: "https://github.com/virendrapsamrat/-jixic-react-ui", label: "GitHub repository" },
];

const packageManagers = [
  { label: "npm", command: "npm install @jixic/react-ui react react-dom" },
];

const nativePackageManagers = [
  { label: "npm", command: "npm install @jixic/react-native-ui react react-native" },
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

const nativeUsage = `import { Button, Card, Input, JixicNativeThemeProvider, rpx } from "@jixic/react-native-ui";

export function ProfileForm() {
  return (
    <JixicNativeThemeProvider>
      <Card style={{ padding: rpx(20) }}>
        <Input label="Email" placeholder="person@example.com" />
        <Button onPress={() => {}}>Continue</Button>
      </Card>
    </JixicNativeThemeProvider>
  );
}`;

export default function InstallationPage() {
  return (
    <article className="docs-page">
      <section className="docs-hero">
        <div className="docs-eyebrow">Guide</div>
        <h1>Installation</h1>
        <p>
          Install the React web package for DOM apps, or the React Native package for Expo, iOS,
          Android, React Native CLI, and React Native Web.
        </p>
      </section>
      <section className="docs-section">
        <h2>React Web Package</h2>
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
        <p>Yarn and pnpm can also be used if your project prefers them.</p>
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
        <h2>React Native / Expo Package</h2>
        <p>
          `@jixic/react-native-ui` is the native companion package. It uses React Native primitives
          and does not require the web stylesheet.
        </p>
        <div className="docs-install-list">
          {nativePackageManagers.map((manager) => (
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
        <p>Yarn and pnpm can also be used if your project prefers them.</p>
      </section>
      <section className="docs-section">
        <div className="docs-code-header">
          <h2>React Native Usage</h2>
          <CopyButton value={nativeUsage} />
        </div>
        <pre className="docs-code">
          <code>{nativeUsage}</code>
        </pre>
      </section>
      <section className="docs-section">
        <h2>Package Details</h2>
        <table className="docs-table">
          <tbody>
            <tr>
              <th scope="row">Imports</th>
              <td>
                Use named web exports from `@jixic/react-ui` and named native exports from
                `@jixic/react-native-ui`.
              </td>
            </tr>
            <tr>
              <th scope="row">Styles</th>
              <td>
                Import `@jixic/react-ui/styles.css` for web apps. React Native apps use
                `StyleSheet` and do not import browser CSS.
              </td>
            </tr>
            <tr>
              <th scope="row">Types</th>
              <td>TypeScript declarations are included with the package.</td>
            </tr>
            <tr>
              <th scope="row">Responsive native sizing</th>
              <td>Use `rpx()` or `useRpx()` from `@jixic/react-native-ui`.</td>
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
