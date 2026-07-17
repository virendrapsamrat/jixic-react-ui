import { type ReactElement, type ReactNode } from "react";
import { StyleSheet, Text, type TextStyle, View, type ViewStyle } from "react-native";
import { useJixicNativeTheme } from "../theme";

export interface BadgeProps {
  children: ReactNode;
  variant?: "neutral" | "success" | "warning" | "danger";
}

export function Badge({ children, variant = "neutral" }: BadgeProps): ReactElement {
  const theme = useJixicNativeTheme();
  const variantStyle = getBadgeVariant(theme, variant);

  return (
    <View style={[styles.badge, variantStyle.container]}>
      <Text style={[styles.text, variantStyle.text]}>{children}</Text>
    </View>
  );
}

function getBadgeVariant(
  theme: ReturnType<typeof useJixicNativeTheme>,
  variant: NonNullable<BadgeProps["variant"]>,
) {
  const variants = {
    danger: {
      container: { backgroundColor: "#fef3f2", borderColor: theme.colors.danger },
      text: { color: theme.colors.danger },
    },
    neutral: {
      container: { backgroundColor: theme.colors.muted, borderColor: theme.colors.border },
      text: { color: theme.colors.foreground },
    },
    success: {
      container: { backgroundColor: "#ecfdf3", borderColor: theme.colors.success },
      text: { color: theme.colors.success },
    },
    warning: {
      container: { backgroundColor: "#fffaeb", borderColor: theme.colors.warning },
      text: { color: theme.colors.warning },
    },
  } satisfies Record<string, { container: ViewStyle; text: TextStyle }>;

  return variants[variant];
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  text: {
    fontSize: 12,
    fontWeight: "800",
    lineHeight: 14,
  },
});
