import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "../src/components/Sidebar";

export const metadata: Metadata = {
  title: "@jixic/react-ui - Accessible React UI Components",
  description:
    "Accessible React UI component library with TypeScript types, design tokens, CSS themes, Next.js support, and a React Native UI roadmap.",
  keywords: [
    "React UI components",
    "React component library",
    "Next.js UI library",
    "TypeScript UI components",
    "accessible React components",
    "design system",
    "React Native UI roadmap",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="docs-shell">
          <Sidebar />
          <main className="docs-main">{children}</main>
        </div>
      </body>
    </html>
  );
}
