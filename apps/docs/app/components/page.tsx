import Link from "next/link";
import { componentDocs } from "../../src/content/components";

export default function ComponentsPage() {
  return (
    <article className="docs-page">
      <section className="docs-hero">
        <div className="docs-eyebrow">Reference</div>
        <h1>Components</h1>
        <p>
          Browse every React UI component in one place, with descriptions and the documented props
          exposed by each component.
        </p>
      </section>

      <section className="docs-section">
        <h2>Component Index</h2>
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

      <section className="docs-section">
        <h2>Props Reference</h2>
        {componentDocs.map((component) => (
          <section className="docs-props-group" key={component.slug}>
            <div className="docs-props-heading">
              <h3>{component.name}</h3>
              <Link href={`/components/${component.slug}`}>View details</Link>
            </div>
            <div className="docs-table-wrap">
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
            </div>
          </section>
        ))}
      </section>
    </article>
  );
}
