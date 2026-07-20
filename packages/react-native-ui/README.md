# @jixic/react-native-ui

Accessible React Native and Expo UI primitives with TypeScript types, responsive helpers, and native design tokens.

This package is built with React Native primitives instead of DOM elements and browser CSS, so it can run in Expo, iOS, Android, React Native CLI, and React Native Web.

## Install

```bash
npm install @jixic/react-native-ui react react-native
```

Yarn and pnpm can also be used if your project prefers them.

For Expo apps, `react` and `react-native` are usually already installed by Expo.

## Package Size

This package is lightweight: about 16 KB packed and 104 KB unpacked. React and React Native are peer dependencies and are not bundled.

## Usage

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

## Responsive RPX Values

React Native styles use density-independent numbers, but mobile layouts often start from a
fixed design width. The package exports `rpx` helpers that capture the current window width and
scale a design value from a base width of `375` by default.

```tsx
import { StyleSheet, View } from "react-native";
import { rpx, useRpx } from "@jixic/react-native-ui";

const styles = StyleSheet.create({
  panel: {
    borderRadius: rpx(12),
    padding: rpx(16),
    width: rpx(320),
  },
});

export function ResponsivePanel() {
  const { rpx: liveRpx, width } = useRpx();

  return <View style={[styles.panel, { minHeight: liveRpx(120), maxWidth: width }]} />;
}
```

Use `rpx(value, { baseWidth: 390 })` when your design file uses a different mobile width.
`useRpx()` updates with orientation and window-size changes.

## Components

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

## Props Reference

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

## Platform Support

| Platform         | Status                             |
| ---------------- | ---------------------------------- |
| Expo iOS         | Supported                          |
| Expo Android     | Supported                          |
| React Native CLI | Supported                          |
| React Native Web | Supported through React Native Web |

## Design

- Uses React Native primitives such as `View`, `Text`, `Pressable`, `TextInput`, `Image`, `ActivityIndicator`, and `StyleSheet`.
- Does not import browser CSS.
- Shares consistent naming, color, spacing, and typography tokens across native components.
- Keeps `react` and `react-native` as peer dependencies.
