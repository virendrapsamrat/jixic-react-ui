import { type ReactElement, type ReactNode } from "react";
import { StyleSheet, type StyleProp, View, type ViewProps, type ViewStyle } from "react-native";
import { useJixicNativeTheme } from "../theme";

export interface CardProps extends ViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function Card({ children, style, ...props }: CardProps): ReactElement {
  const theme = useJixicNativeTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderWidth: 1,
    gap: 16,
    padding: 20,
  },
});
