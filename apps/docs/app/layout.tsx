import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "../src/components/Sidebar";

export const metadata: Metadata = {
  title: "@jixic/react-ui",
  description: "React UI component library documentation and playground.",
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
