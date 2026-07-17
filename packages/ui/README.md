# @jixic/react-ui

A React and TypeScript UI component library for web and Next.js applications. The package is framework-agnostic and does not depend on Next.js APIs.

## Install

```bash
pnpm add @jixic/react-ui react react-dom
```

## Usage

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
