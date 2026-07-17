import type { StyleProp, ViewStyle } from "react-native";

export function mergeStyles<T extends ViewStyle>(...styles: Array<StyleProp<T> | undefined>) {
  return styles.filter(Boolean);
}
