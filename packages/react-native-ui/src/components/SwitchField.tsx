import { type ReactElement, type ReactNode } from "react";
import {
  StyleSheet,
  Switch,
  Text,
  type SwitchProps,
  View,
  type ViewStyle,
  type StyleProp,
} from "react-native";
import { useJixicNativeTheme } from "../theme";

export interface SwitchFieldProps extends SwitchProps {
  description?: ReactNode;
  label: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function SwitchField({
  description,
  label,
  style,
  ...props
}: SwitchFieldProps): ReactElement {
  const theme = useJixicNativeTheme();

  return (
    <View style={[styles.row, style]}>
      <View style={styles.copy}>
        <Text style={[styles.label, { color: theme.colors.foreground }]}>{label}</Text>
        {description ? (
          <Text style={[styles.description, { color: theme.colors.mutedForeground }]}>
            {description}
          </Text>
        ) : null}
      </View>
      <Switch
        ios_backgroundColor={theme.colors.border}
        thumbColor={props.value ? theme.colors.primaryForeground : theme.colors.surface}
        trackColor={{ false: theme.colors.border, true: theme.colors.primary }}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  copy: {
    flex: 1,
    gap: 4,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
  },
});
