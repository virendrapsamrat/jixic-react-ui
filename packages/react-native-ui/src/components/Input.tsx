import { forwardRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  type StyleProp,
  type TextInputProps,
  type TextStyle,
  View,
  type ViewStyle,
} from "react-native";
import { useJixicNativeTheme } from "../theme";

export interface InputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  error?: string;
  helperText?: string;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
}

export const Input = forwardRef<TextInput, InputProps>(function Input(
  { containerStyle, error, helperText, label, labelStyle, style, ...props },
  ref,
) {
  const theme = useJixicNativeTheme();

  return (
    <View style={[styles.field, containerStyle]}>
      {label ? (
        <Text style={[styles.label, { color: theme.colors.foreground }, labelStyle]}>{label}</Text>
      ) : null}
      <TextInput
        accessibilityLabel={props.accessibilityLabel ?? label}
        accessibilityState={{ disabled: props.editable === false }}
        placeholderTextColor={theme.colors.mutedForeground}
        ref={ref}
        style={[
          styles.input,
          {
            backgroundColor: theme.colors.surface,
            borderColor: error ? theme.colors.danger : theme.colors.border,
            color: theme.colors.foreground,
          },
          style,
        ]}
        {...props}
      />
      {helperText ? (
        <Text style={[styles.help, { color: theme.colors.mutedForeground }]}>{helperText}</Text>
      ) : null}
      {error ? <Text style={[styles.error, { color: theme.colors.danger }]}>{error}</Text> : null}
    </View>
  );
});

const styles = StyleSheet.create({
  error: {
    fontSize: 14,
    lineHeight: 20,
  },
  field: {
    gap: 8,
    width: "100%",
  },
  help: {
    fontSize: 14,
    lineHeight: 20,
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    minHeight: 44,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
  },
});
