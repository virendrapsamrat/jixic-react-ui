# Jixic UI

Accessible UI components, TypeScript primitives, and design tokens for React web and React Native applications.

This monorepo contains two public packages:

- `@jixic/react-ui` for React web, Next.js, Vite, Remix, Astro, and other DOM-based React stacks.
- `@jixic/react-native-ui` for Expo, iOS, Android, React Native CLI, and React Native Web.

## Package Links

- npm: [@jixic/react-ui](https://www.npmjs.com/package/@jixic/react-ui)
- npm: [@jixic/react-native-ui](https://www.npmjs.com/package/@jixic/react-native-ui)

The package READMEs are intentionally scoped for npm:

- `packages/ui/README.md` shows only React web usage for the `@jixic/react-ui` npm page.
- `packages/react-native-ui/README.md` shows only React Native usage for the `@jixic/react-native-ui` npm page.
- This root README is the GitHub overview and contains the combined documentation for both libraries.

## Overview

Jixic UI is designed as a cross-platform UI system: easy to find on npm, easy to install, and easy to adopt in real apps.

- Accessible components with native semantics where possible.
- TypeScript declarations included in the package.
- ESM and CommonJS builds for modern React tooling.
- Theme tokens powered by CSS variables.
- Components for actions, forms, feedback, overlays, navigation, loading states, and display surfaces.
- Documentation pages with examples, props, accessibility notes, and copyable install commands.

## Platform Support

| Platform     | Status    | Notes                                                                                    |
| ------------ | --------- | ---------------------------------------------------------------------------------------- |
| React web    | Supported | Uses DOM elements and `@jixic/react-ui/styles.css`.                                      |
| Next.js      | Supported | Import the stylesheet once in the app shell or root layout.                              |
| React Native | Started   | Use `@jixic/react-native-ui`, built with React Native primitives and shared token ideas. |

React Native support ships from a separate package because React Native does not use browser DOM nodes or CSS files. The native package uses `View`, `Text`, `Pressable`, `TextInput`, `Switch`, `ActivityIndicator`, and `StyleSheet`.

## React Web Installation

Install the UI package with React and React DOM. They are peer dependencies, so your application owns the React version while `@jixic/react-ui` provides the components, tokens, TypeScript types, and compiled stylesheet.

```bash
npm install @jixic/react-ui react react-dom
```

Yarn and pnpm can also be used if your project prefers them.

Import the stylesheet once near your app root, then import components from the package root.

Package size: about 30 KB packed and 155 KB unpacked. React and React DOM are peer dependencies and are not bundled.

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

The package supports React `>=18.2.0` and React `>=19.0.0`. It publishes ESM, CommonJS, and TypeScript declarations, with styles available from `@jixic/react-ui/styles.css`.

## React Native / Expo

Install the native package in an Expo or React Native app:

```bash
npm install @jixic/react-native-ui
```

Package size: about 13 KB packed and 88 KB unpacked. React and React Native are peer dependencies and are not bundled.

```tsx
import { Button, Card, Input, JixicNativeThemeProvider } from "@jixic/react-native-ui";

export function ProfileForm() {
  return (
    <JixicNativeThemeProvider>
      <Card>
        <Input label="Email" placeholder="person@example.com" />
        <Button onPress={() => {}}>Continue</Button>
      </Card>
    </JixicNativeThemeProvider>
  );
}
```

## React Web Components

`@jixic/react-ui` includes DOM-based React components and ships the compiled stylesheet at `@jixic/react-ui/styles.css`.

- `Button`
- `Input`
- `Textarea`
- `Checkbox`
- `Switch`
- `Select`
- `RadioGroup`
- `Card`
- `Badge`
- `Avatar`
- `Alert`
- `Modal`
- `Tabs`
- `Tooltip`
- `Spinner`
- `Skeleton`
- `EmptyState`

## React Native Components

`@jixic/react-native-ui` includes native primitives and responsive helpers for Expo, iOS, Android, React Native CLI, and React Native Web.

- `Button`
- `Input`
- `Card`
- `Badge`
- `Avatar`
- `Spinner`
- `SwitchField`
- `JixicNativeThemeProvider`
- `rpx`
- `useRpx`

## Local Development

```bash
npm install
npm run dev
```

Useful commands:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run build:ui
npm run build:native-ui
npm run build:docs
```

The repo is configured for pnpm workspaces in CI/deploy. npm commands can still be used locally when dependencies are already installed, but pnpm is the lockfile source of truth.

## Versioning

Create a changeset for public package changes:

```bash
npm run changeset
```

Then version packages:

```bash
npm run version-packages
```

## Publishing to npm

Before publishing, confirm your npm account owns the `@jixic` scope and update author, repository, and license ownership fields.

Local package verification:

```bash
npm install
npm run lint
npm run typecheck
npm run test
npm run build
cd packages/ui
npm pack --dry-run
cd ../react-native-ui
npm pack --dry-run
```

The release workflow is configured for npm trusted publishing through GitHub OIDC. It publishes both `packages/ui` and `packages/react-native-ui` with `npm publish --access public` and does not require an npm token.

Required trusted publishing configuration:

- Enable GitHub Actions for the repository.
- Push this repository to GitHub.
- On npmjs.com, configure trusted publishers for `@jixic/react-ui` and `@jixic/react-native-ui`.
- Use workflow filename `release.yml`.
- Use environment name `npm-production`.
- Allow `npm publish`.
- Configure the `npm-production` environment in GitHub if you want manual approval before publish.

If npm does not allow trusted publishing before the first version exists, publish `@jixic/react-ui@0.1.0` and `@jixic/react-native-ui@0.1.0` once manually with a one-time password or a granular access token with publish permission, then enable trusted publishing for future releases.

## Package Design

- React and React DOM are peer dependencies and are not bundled.
- Consumers import only from the root package.
- Included components cover buttons, inputs, textarea, select, checkbox, switch, radio groups, cards, badges, alerts, modal, tabs, tooltip, avatar, spinner, skeleton, and empty states.
- Styles are shipped as `@jixic/react-ui/styles.css`.
- Theme tokens use CSS variables and support light and dark themes.
- Type declarations and source maps are generated during build.
- Package metadata includes npm and GitHub links so npmjs.com can show the repository, issue tracker, homepage, license, and keywords.
- Search positioning focuses on React UI components, TypeScript UI library, accessible components, design system tokens, Next.js UI, and CSS variable themes.

## License

MIT. See [LICENSE](./LICENSE).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).
