import { forwardRef, type ReactNode } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  type PressableProps,
  type StyleProp,
  type TextStyle,
  type View,
  type ViewStyle,
} from "react-native";
import { useJixicNativeTheme } from "../theme";

export interface ButtonProps extends Omit<PressableProps, "children" | "style"> {
  children: ReactNode;
  isLoading?: boolean;
  size?: "sm" | "md" | "lg";
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  variant?: "primary" | "secondary" | "ghost" | "danger";
}

export const Button = forwardRef<View, ButtonProps>(function Button(
  {
    accessibilityRole = "button",
    children,
    disabled,
    isLoading = false,
    size = "md",
    style,
    textStyle,
    variant = "primary",
    ...props
  },
  ref,
) {
  const theme = useJixicNativeTheme();
  const isDisabled = disabled || isLoading;
  const variantStyle = getButtonVariant(theme, variant);
  const sizeStyle = getButtonSize(size);

  return (
    <Pressable
      accessibilityRole={accessibilityRole}
      accessibilityState={{ disabled: isDisabled, busy: isLoading }}
      disabled={isDisabled}
      ref={ref}
      style={({ pressed }) => [
        styles.button,
        sizeStyle.container,
        variantStyle.container,
        pressed && !isDisabled ? styles.pressed : null,
        isDisabled ? styles.disabled : null,
        style,
      ]}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={variantStyle.text.color} size="small" />
      ) : (
        <Text style={[styles.buttonText, sizeStyle.text, variantStyle.text, textStyle]}>
          {children}
        </Text>
      )}
    </Pressable>
  );
});

function getButtonVariant(
  theme: ReturnType<typeof useJixicNativeTheme>,
  variant: NonNullable<ButtonProps["variant"]>,
) {
  const variants = {
    danger: {
      container: { backgroundColor: theme.colors.danger, borderColor: theme.colors.danger },
      text: { color: theme.colors.dangerForeground },
    },
    ghost: {
      container: { backgroundColor: "transparent", borderColor: "transparent" },
      text: { color: theme.colors.foreground },
    },
    primary: {
      container: { backgroundColor: theme.colors.primary, borderColor: theme.colors.primary },
      text: { color: theme.colors.primaryForeground },
    },
    secondary: {
      container: { backgroundColor: theme.colors.surface, borderColor: theme.colors.border },
      text: { color: theme.colors.foreground },
    },
  } satisfies Record<string, { container: ViewStyle; text: TextStyle }>;

  return variants[variant];
}

function getButtonSize(size: NonNullable<ButtonProps["size"]>) {
  const sizes = {
    lg: {
      container: { minHeight: 48, paddingHorizontal: 20, paddingVertical: 12 },
      text: { fontSize: 18 },
    },
    md: {
      container: { minHeight: 40, paddingHorizontal: 16, paddingVertical: 10 },
      text: { fontSize: 16 },
    },
    sm: {
      container: { minHeight: 32, paddingHorizontal: 12, paddingVertical: 6 },
      text: { fontSize: 14 },
    },
  } satisfies Record<string, { container: ViewStyle; text: TextStyle }>;

  return sizes[size];
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "700",
    lineHeight: 22,
  },
  disabled: {
    opacity: 0.62,
  },
  pressed: {
    opacity: 0.86,
  },
});
