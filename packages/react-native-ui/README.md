# @jixic/react-native-ui

Accessible React Native and Expo UI primitives with TypeScript types and shared design tokens.

This package is the native companion to `@jixic/react-ui`. It is built with React Native primitives instead of DOM elements and browser CSS, so it can run in Expo, iOS, Android, and React Native Web.

## Install

```bash
npm install @jixic/react-native-ui react react-native
```

```bash
yarn add @jixic/react-native-ui react react-native
```

```bash
pnpm add @jixic/react-native-ui react react-native
```

For Expo apps, `react` and `react-native` are usually already installed by Expo.

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

- `Button`
- `Input`
- `Card`
- `Badge`
- `Avatar`
- `Spinner`
- `SwitchField`
- `JixicNativeThemeProvider`

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
- Shares naming, color, spacing, and typography ideas with `@jixic/react-ui`.
- Keeps `react` and `react-native` as peer dependencies.
