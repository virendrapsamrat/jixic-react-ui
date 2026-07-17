import type { ReactElement } from "react";
import { Image, StyleSheet, Text, View, type ImageSourcePropType } from "react-native";
import { useJixicNativeTheme } from "../theme";

export interface AvatarProps {
  alt: string;
  fallback?: string;
  size?: "sm" | "md" | "lg";
  source?: ImageSourcePropType;
}

export function Avatar({ alt, fallback, size = "md", source }: AvatarProps): ReactElement {
  const theme = useJixicNativeTheme();
  const dimension = size === "sm" ? 32 : size === "lg" ? 52 : 40;
  const initials =
    fallback ??
    alt
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("");

  return (
    <View
      accessibilityLabel={alt}
      accessibilityRole="image"
      style={[
        styles.avatar,
        {
          backgroundColor: theme.colors.muted,
          borderColor: theme.colors.border,
          height: dimension,
          width: dimension,
        },
      ]}
    >
      {source ? (
        <Image accessibilityIgnoresInvertColors source={source} style={styles.image} />
      ) : (
        <Text style={[styles.initials, { color: theme.colors.foreground }]}>{initials}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: "center",
    borderRadius: 999,
    borderWidth: 1,
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  initials: {
    fontSize: 14,
    fontWeight: "800",
  },
});
