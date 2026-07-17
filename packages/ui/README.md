# @jixic/react-ui

A React and TypeScript UI component library for web and Next.js applications. The package is framework-agnostic and does not depend on Next.js APIs.

## Links

- npm: [@jixic/react-ui](https://www.npmjs.com/package/@jixic/react-ui)
- GitHub: [virendrapsamrat/-jixic-react-ui](https://github.com/virendrapsamrat/-jixic-react-ui)

## Install

Install the package with React and React DOM. They are peer dependencies and are not bundled.

```bash
npm install @jixic/react-ui react react-dom
```

```bash
yarn add @jixic/react-ui react react-dom
```

```bash
pnpm add @jixic/react-ui react react-dom
```

## Usage

Import the compiled stylesheet once in your application root, then import components from `@jixic/react-ui`.

```tsx
import { Button, Card, CardContent, Input } from "@jixic/react-ui";
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
}
```

Set `data-ui-theme="dark"` on any parent element to enable dark theme tokens.

## Package Details

- Supports React `>=18.2.0` and React `>=19.0.0`.
- Includes components for actions, forms, feedback, overlays, navigation, loading states, and display surfaces.
- Includes TypeScript declarations.
- Provides ESM and CommonJS builds.
- Exposes the compiled stylesheet at `@jixic/react-ui/styles.css`.
- Ships only package files from `dist`, `README.md`, `CHANGELOG.md`, and `LICENSE`.
