# @jixic/react-ui

Accessible React UI components, TypeScript primitives, design tokens, and CSS themes for React and Next.js web applications.

## Links

- npm: [@jixic/react-ui](https://www.npmjs.com/package/@jixic/react-ui)
- React Native npm: [@jixic/react-native-ui](https://www.npmjs.com/package/@jixic/react-native-ui)
- GitHub: [virendrapsamrat/-jixic-react-ui](https://github.com/virendrapsamrat/-jixic-react-ui)

## Overview

Use `@jixic/react-ui` when you want a small, typed, accessible component library with a consistent visual system and no required app framework. The package is designed for discoverability on npm with clear keywords, public repository metadata, install examples, and package docs.

## Platform Support

| Platform     | Status           | Notes                                                                                    |
| ------------ | ---------------- | ---------------------------------------------------------------------------------------- |
| React web    | Supported        | Uses DOM elements and the compiled stylesheet.                                           |
| Next.js      | Supported        | Import `@jixic/react-ui/styles.css` once in the root layout or app shell.                |
| React Native | Separate package | Use `@jixic/react-native-ui`, built with React Native primitives and shared token ideas. |

This package is not a React Native package because it ships DOM components and CSS. React Native UI support lives in the sibling package `@jixic/react-native-ui`.

## React Native / Expo

Use the native package when building Expo, iOS, Android, React Native CLI, or React Native Web apps.

```bash
npm install @jixic/react-native-ui react react-native
```

```tsx
import { Button, Card, Input, JixicNativeThemeProvider, rpx } from "@jixic/react-native-ui";

export function ProfileForm() {
  return (
    <JixicNativeThemeProvider>
      <Card style={{ padding: rpx(20) }}>
        <Input label="Email" placeholder="person@example.com" />
        <Button onPress={() => {}}>Continue</Button>
      </Card>
    </JixicNativeThemeProvider>
  );
}
```

## Install

Install the package with React and React DOM. They are peer dependencies and are not bundled.

```bash
npm install @jixic/react-ui react react-dom
```

Yarn and pnpm can also be used if your project prefers them.

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
- Search-friendly metadata covers React UI, React components, TypeScript, accessibility, design systems, themes, CSS variables, and Next.js.
