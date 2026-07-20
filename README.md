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

Package size: about 31 KB packed and 160 KB unpacked. React and React DOM are peer dependencies and are not bundled.

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
npm install @jixic/react-native-ui react react-native
```

Package size: about 16 KB packed and 104 KB unpacked. React and React Native are peer dependencies and are not bundled.

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

| Component | Purpose |
| --- | --- |
| `Alert` | Inline feedback for info, success, warning, and danger messages. |
| `Avatar` | Circular image or initials fallback for people and entities. |
| `Badge` | Compact status label for metadata and state. |
| `Button` | Tokenized action button with variants, sizes, and loading state. |
| `Card`, `CardHeader`, `CardContent`, `CardFooter` | Composable content container and layout slots. |
| `Checkbox` | Labeled native checkbox with description support. |
| `EmptyState` | Centered empty state with title, copy, optional icon, and action. |
| `Input` | Labeled native input with helper text and error state. |
| `Modal` | Accessible dialog with controlled open state. |
| `Radio`, `RadioGroup` | Semantic radio controls for single-choice groups. |
| `Select` | Labeled native select with option data and validation state. |
| `Skeleton` | Placeholder block for loading layouts. |
| `Spinner` | Accessible loading indicator. |
| `Switch` | Labeled on/off control. |
| `Tabs` | Tablist and panel switcher for related content. |
| `Textarea` | Multi-line form control with label and validation state. |
| `Tooltip` | Hover/focus hint wrapper for short supporting text. |

## React Web Props

| Component | Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- | --- |
| `Alert` | `variant` | `"info" \| "success" \| "warning" \| "danger"` | No | `"info"` | Message tone. |
| `Alert` | `title` | `ReactNode` | No | `-` | Optional message heading. |
| `Avatar` | `alt` | `string` | Yes | `-` | Accessible image text and initials source. |
| `Avatar` | `fallback` | `string` | No | initials from `alt` | Text fallback when no image source is supplied. |
| `Avatar` | `size` | `"sm" \| "md" \| "lg"` | No | `"md"` | Avatar size. |
| `Avatar` | `src` | `string` | No | `-` | Image URL. |
| `Badge` | `variant` | `"neutral" \| "success" \| "warning" \| "danger"` | No | `"neutral"` | Badge status variant. |
| `Button` | `variant` | `"primary" \| "secondary" \| "ghost" \| "danger"` | No | `"primary"` | Visual treatment for the action. |
| `Button` | `size` | `"sm" \| "md" \| "lg"` | No | `"md"` | Button size. |
| `Button` | `isLoading` | `boolean` | No | `false` | Shows a spinner and disables the button. |
| `Button` | `leftIcon` | `ReactNode` | No | `-` | Icon or element shown before the label. |
| `Button` | `rightIcon` | `ReactNode` | No | `-` | Icon or element shown after the label. |
| `Card` | `CardProps` | `HTMLAttributes<HTMLDivElement>` | No | `-` | Accepts native div props. |
| `Checkbox` | `label` | `string` | Yes | `-` | Visible label for the checkbox. |
| `Checkbox` | `description` | `string` | No | `-` | Supporting text below the label. |
| `Checkbox` | `error` | `string` | No | `-` | Validation message for the checkbox. |
| `EmptyState` | `title` | `ReactNode` | Yes | `-` | Primary heading. |
| `EmptyState` | `description` | `ReactNode` | No | `-` | Supporting copy. |
| `EmptyState` | `icon` | `ReactNode` | No | `-` | Decorative icon shown above the title. |
| `EmptyState` | `action` | `ReactNode` | No | `-` | Primary follow-up action. |
| `Input` | `label` | `string` | No | `-` | Visible label for the control. |
| `Input` | `helperText` | `string` | No | `-` | Supplementary field guidance. |
| `Input` | `error` | `string` | No | `-` | Validation message. |
| `Modal` | `isOpen` | `boolean` | Yes | `-` | Controls whether the dialog is visible. |
| `Modal` | `onOpenChange` | `(isOpen: boolean) => void` | Yes | `-` | Called when the modal requests open state changes. |
| `Modal` | `title` | `ReactNode` | Yes | `-` | Accessible dialog title. |
| `Modal` | `children` | `ReactNode` | Yes | `-` | Dialog body content. |
| `Modal` | `closeLabel` | `string` | No | `"Close dialog"` | Accessible label for the close button. |
| `Radio` | `label` | `string` | Yes | `-` | Visible label for the radio option. |
| `Radio` | `description` | `string` | No | `-` | Supporting text below the option label. |
| `RadioGroup` | `label` | `string` | Yes | `-` | Group label rendered as the fieldset legend. |
| `RadioGroup` | `children` | `ReactNode` | Yes | `-` | Radio options. |
| `RadioGroup` | `error` | `string` | No | `-` | Validation message for the group. |
| `Select` | `options` | `SelectOption[]` | Yes | `-` | Options rendered in the native select. |
| `Select` | `label` | `string` | No | `-` | Visible label for the select. |
| `Select` | `placeholder` | `string` | No | `-` | Placeholder option with empty value. |
| `Select` | `helperText` | `string` | No | `-` | Supplementary field guidance. |
| `Select` | `error` | `string` | No | `-` | Validation message. |
| `Skeleton` | `height` | `number \| string` | No | `"1rem"` | CSS height. |
| `Skeleton` | `width` | `number \| string` | No | `"100%"` | CSS width. |
| `Spinner` | `label` | `string` | No | `"Loading"` | Accessible status label. |
| `Spinner` | `size` | `"sm" \| "md" \| "lg"` | No | `"md"` | Spinner size. |
| `Switch` | `label` | `string` | Yes | `-` | Visible label for the switch. |
| `Switch` | `description` | `string` | No | `-` | Supporting text below the label. |
| `Tabs` | `items` | `TabItem[]` | Yes | `-` | Tab labels, values, and panel content. |
| `Tabs` | `value` | `string` | No | `-` | Controlled selected tab value. |
| `Tabs` | `defaultValue` | `string` | No | first enabled tab | Initial selected tab for uncontrolled usage. |
| `Tabs` | `onValueChange` | `(value: string) => void` | No | `-` | Called when the selected tab changes. |
| `Tabs` | `aria-label` | `string` | No | `-` | Accessible label for the tab list. |
| `Textarea` | `label` | `string` | No | `-` | Visible label for the textarea. |
| `Textarea` | `helperText` | `string` | No | `-` | Supplementary field guidance. |
| `Textarea` | `rows` | `number` | No | `4` | Visible row count. |
| `Textarea` | `error` | `string` | No | `-` | Validation message. |
| `Tooltip` | `children` | `ReactNode` | Yes | `-` | Trigger element. |
| `Tooltip` | `content` | `ReactNode` | Yes | `-` | Tooltip body. |

## React Native Components

`@jixic/react-native-ui` includes native primitives and responsive helpers for Expo, iOS, Android, React Native CLI, and React Native Web.

| Component | Purpose |
| --- | --- |
| `Avatar` | Circular image or initials fallback using React Native `Image`, `Text`, and `View`. |
| `Badge` | Compact native status label for metadata and state. |
| `Button` | Pressable action control with variants, sizes, disabled state, and loading state. |
| `Card` | Native `View` container with tokenized border, surface, radius, gap, and padding. |
| `Input` | Labeled `TextInput` with helper text and error state. |
| `Spinner` | Accessible `ActivityIndicator` loading indicator. |
| `SwitchField` | Labeled native `Switch` with optional description. |
| `JixicNativeThemeProvider` | Theme provider for light, dark, or custom native tokens. |
| `rpx`, `createRpx`, `useRpx` | Responsive pixel helpers for scaling mobile layout values. |

## React Native Props

| Component | Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- | --- |
| `Avatar` | `alt` | `string` | Yes | `-` | Accessible label and initials source. |
| `Avatar` | `fallback` | `string` | No | initials from `alt` | Text fallback when no image source is supplied. |
| `Avatar` | `size` | `"sm" \| "md" \| "lg"` | No | `"md"` | Avatar dimension. |
| `Avatar` | `source` | `ImageSourcePropType` | No | `-` | React Native image source. |
| `Badge` | `children` | `ReactNode` | Yes | `-` | Badge content. |
| `Badge` | `variant` | `"neutral" \| "success" \| "warning" \| "danger"` | No | `"neutral"` | Badge status variant. |
| `Button` | `children` | `ReactNode` | Yes | `-` | Button label/content. |
| `Button` | `variant` | `"primary" \| "secondary" \| "ghost" \| "danger"` | No | `"primary"` | Visual treatment for the action. |
| `Button` | `size` | `"sm" \| "md" \| "lg"` | No | `"md"` | Button size. |
| `Button` | `isLoading` | `boolean` | No | `false` | Shows an activity indicator and disables presses. |
| `Button` | `style` | `StyleProp<ViewStyle>` | No | `-` | Pressable container style override. |
| `Button` | `textStyle` | `StyleProp<TextStyle>` | No | `-` | Text style override. |
| `Card` | `children` | `ReactNode` | Yes | `-` | Card content. |
| `Card` | `style` | `StyleProp<ViewStyle>` | No | `-` | Container style override. |
| `Input` | `label` | `string` | No | `-` | Visible field label. |
| `Input` | `helperText` | `string` | No | `-` | Supplementary guidance below the field. |
| `Input` | `error` | `string` | No | `-` | Validation message and danger border state. |
| `Input` | `containerStyle` | `StyleProp<ViewStyle>` | No | `-` | Outer field wrapper style override. |
| `Input` | `labelStyle` | `StyleProp<TextStyle>` | No | `-` | Label text style override. |
| `Spinner` | `label` | `string` | No | `"Loading"` | Accessible loading label. |
| `SwitchField` | `label` | `ReactNode` | Yes | `-` | Visible switch label. |
| `SwitchField` | `description` | `ReactNode` | No | `-` | Supporting text below the label. |
| `SwitchField` | `style` | `StyleProp<ViewStyle>` | No | `-` | Row container style override. |
| `JixicNativeThemeProvider` | `children` | `ReactNode` | Yes | `-` | React tree receiving the theme. |
| `JixicNativeThemeProvider` | `colorScheme` | `"dark" \| "light"` | No | `"light"` | Built-in theme selection. |
| `JixicNativeThemeProvider` | `theme` | `JixicNativeTheme` | No | `-` | Custom native theme override. |
| `rpx` | `value` | `number` | Yes | `-` | Design value to scale from the base width. |
| `rpx` | `options` | `RpxOptions` | No | `-` | Base width, current width, scale limits, and precision. |
| `useRpx` | `options` | `Omit<RpxOptions, "width">` | No | `-` | Responsive scaling options from current window dimensions. |

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
npm run publish:ui
npm run publish:native-ui
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

Publish each npm package separately:

```bash
npm run publish:ui
npm run publish:native-ui
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

## React Web Package Design

- React and React DOM are peer dependencies and are not bundled.
- Consumers import only from the root package.
- Included components cover buttons, inputs, textarea, select, checkbox, switch, radio groups, cards, badges, alerts, modal, tabs, tooltip, avatar, spinner, skeleton, and empty states.
- Styles are shipped as `@jixic/react-ui/styles.css`.
- Theme tokens use CSS variables and support light and dark themes.
- Type declarations and source maps are generated during build.
- Package metadata includes npm and GitHub links so npmjs.com can show the repository, issue tracker, homepage, license, and keywords.
- Search positioning focuses on React UI components, TypeScript UI library, accessible components, design system tokens, Next.js UI, and CSS variable themes.

## React Native Package Design

- React and React Native are peer dependencies and are not bundled.
- Consumers import only from the root package.
- Included components cover buttons, inputs, cards, badges, avatars, spinners, switch fields, theme providers, and responsive `rpx` helpers.
- Components are built with React Native primitives, not browser DOM elements or CSS.
- Type declarations and source maps are generated during build.
- Package metadata includes npm and GitHub links so npmjs.com can show the repository, issue tracker, homepage, license, and keywords.

## License

MIT. See [LICENSE](./LICENSE).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).
