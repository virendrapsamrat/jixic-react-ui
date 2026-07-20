# @jixic/react-ui

Accessible React UI components, TypeScript primitives, design tokens, and CSS themes for React and Next.js web applications.

## Links

- npm: [@jixic/react-ui](https://www.npmjs.com/package/@jixic/react-ui)
- GitHub: [virendrapsamrat/-jixic-react-ui](https://github.com/virendrapsamrat/-jixic-react-ui)

## Overview

Use `@jixic/react-ui` when you want a small, typed, accessible component library with a consistent visual system and no required app framework. The package is designed for discoverability on npm with clear keywords, public repository metadata, install examples, and package docs.

## Platform Support

| Platform  | Status    | Notes                                                                     |
| --------- | --------- | ------------------------------------------------------------------------- |
| React web | Supported | Uses DOM elements and the compiled stylesheet.                            |
| Next.js   | Supported | Import `@jixic/react-ui/styles.css` once in the root layout or app shell. |
| Vite      | Supported | Import `@jixic/react-ui/styles.css` once in your app entry file.          |

This npm package is for React DOM applications. It does not include React Native components or browserless native primitives.

## Install

Install the package with React and React DOM. They are peer dependencies and are not bundled.

```bash
npm install @jixic/react-ui react react-dom
```

Yarn and pnpm can also be used if your project prefers them.

## Package Size

This package is lightweight: about 31 KB packed and 160 KB unpacked. React and React DOM are peer dependencies and are not bundled.

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

## Components

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

## Props Reference

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

## Package Details

- Supports React `>=18.2.0` and React `>=19.0.0`.
- Includes components for actions, forms, feedback, overlays, navigation, loading states, and display surfaces.
- Includes TypeScript declarations.
- Provides ESM and CommonJS builds.
- Exposes the compiled stylesheet at `@jixic/react-ui/styles.css`.
- Ships only package files from `dist`, `README.md`, `CHANGELOG.md`, and `LICENSE`.
- Search-friendly metadata covers React UI, React components, TypeScript, accessibility, design systems, themes, CSS variables, and Next.js.
