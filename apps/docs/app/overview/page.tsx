import Link from "next/link";

const searchItems = [
  "Accessible React UI components",
  "TypeScript component library",
  "Next.js UI library",
  "CSS variable design tokens",
  "React 18 and React 19 support",
  "npm, Yarn, and pnpm installation",
];

const roadmapItems = [
  {
    title: "Current package",
    value:
      "@jixic/react-ui supports React web apps. It uses DOM elements, browser events, and a compiled CSS file.",
  },
  {
    title: "React Native UI support",
    value:
      "React Native support has started in @jixic/react-native-ui, sharing design tokens and component API patterns while using native View, Text, Pressable, TextInput, Switch, and StyleSheet primitives.",
  },
  {
    title: "Shared foundation",
    value:
      "Colors, spacing, typography, naming, accessibility guidance, and component behavior can stay consistent across web and native packages.",
  },
];

export default function OverviewPage() {
  return (
    <article className="docs-page">
      <section className="docs-hero">
        <div className="docs-eyebrow">Overview</div>
        <h1>Top-level package positioning</h1>
        <p>
          `@jixic/react-ui` is positioned as an accessible, typed React UI library for teams that
          need clean primitives, theme tokens, documentation, and a path toward cross-platform UI.
        </p>
      </section>

      <section className="docs-section">
        <h2>Search Positioning</h2>
        <p>
          The package should be discoverable for common React UI searches while staying honest about
          the platforms it supports today.
        </p>
        <div className="docs-grid">
          {searchItems.map((item) => (
            <div className="docs-link-card" key={item}>
              <strong>{item}</strong>
              <span>Included in package copy, docs language, or npm metadata.</span>
            </div>
          ))}
        </div>
      </section>

      <section className="docs-section">
        <h2>Platform Support</h2>
        <table className="docs-table">
          <tbody>
            <tr>
              <th scope="row">React web</th>
              <td>Supported today through DOM components and `@jixic/react-ui/styles.css`.</td>
            </tr>
            <tr>
              <th scope="row">Next.js</th>
              <td>Supported. Import the stylesheet once in the app shell or root layout.</td>
            </tr>
            <tr>
              <th scope="row">React Native</th>
              <td>
                Started as `@jixic/react-native-ui`. The web package is not a drop-in React Native
                package because React Native does not use DOM elements or CSS files.
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="docs-section">
        <h2>React Native Package</h2>
        <div className="docs-grid">
          {roadmapItems.map((item) => (
            <div className="docs-link-card" key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="docs-section">
        <h2>Next Steps</h2>
        <p>
          Keep improving both packages together: finish more web primitives, expand native
          primitives, and move shared colors, spacing, and typography into a dedicated token package
          when the API is stable.
        </p>
        <div className="docs-reference-links">
          <Link href="/installation">Install package</Link>
          <Link href="/components/button">View components</Link>
        </div>
      </section>
    </article>
  );
}
