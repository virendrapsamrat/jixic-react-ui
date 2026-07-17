import { notFound } from "next/navigation";
import { CopyButton } from "../../../src/components/CopyButton";
import { componentDocs, getComponentDoc } from "../../../src/content/components";

export function generateStaticParams() {
  return componentDocs.map((component) => ({ slug: component.slug }));
}

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const component = getComponentDoc(slug);

  if (!component) {
    notFound();
  }

  return (
    <article className="docs-page">
      <section className="docs-hero">
        <div className="docs-eyebrow">Component</div>
        <h1>{component.name}</h1>
        <p>{component.description}</p>
      </section>
      <section className="docs-section">
        <h2>Live Preview</h2>
        <div className="docs-preview">
          <div className="docs-preview-surface">{component.preview}</div>
        </div>
      </section>
      <section className="docs-section">
        <div className="docs-code-header">
          <h2>Usage</h2>
          <CopyButton value={component.code} />
        </div>
        <pre className="docs-code">
          <code>{component.code}</code>
        </pre>
      </section>
      <section className="docs-section">
        <h2>Props</h2>
        <table className="docs-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Required</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {component.props.map((prop) => (
              <tr key={prop.name}>
                <td>
                  <code>{prop.name}</code>
                </td>
                <td>
                  <code>{prop.type}</code>
                </td>
                <td>{prop.required ? "Yes" : "No"}</td>
                <td>
                  <code>{prop.defaultValue}</code>
                </td>
                <td>{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="docs-section">
        <h2>Accessibility</h2>
        <ul className="docs-prose">
          {component.accessibility.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
