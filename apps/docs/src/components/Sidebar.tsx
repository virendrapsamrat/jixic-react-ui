import Link from "next/link";
import { componentDocs } from "../content/components";
import { ThemeToggle } from "./ThemeToggle";

const primaryLinks = [
  { href: "/overview", label: "Overview" },
  { href: "/installation", label: "Installation" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/theming", label: "Theming" },
  { href: "/contributing", label: "Contributing" },
];

export function Sidebar() {
  return (
    <aside className="docs-sidebar">
      <Link className="docs-brand" href="/">
        @jixic/react-ui
      </Link>
      <ThemeToggle />
      <nav aria-label="Documentation" className="docs-nav">
        <div className="docs-nav-title">Guides</div>
        {primaryLinks.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
        <div className="docs-nav-title">Components</div>
        {componentDocs.map((component) => (
          <Link href={`/components/${component.slug}`} key={component.slug}>
            {component.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
