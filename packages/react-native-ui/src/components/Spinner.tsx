import type { ReactElement } from "react";
import { ActivityIndicator, type ActivityIndicatorProps } from "react-native";
import { useJixicNativeTheme } from "../theme";

export interface SpinnerProps extends ActivityIndicatorProps {
  label?: string;
}

export function Spinner({ color, label = "Loading", ...props }: SpinnerProps): ReactElement {
  const theme = useJixicNativeTheme();

  return (
    <ActivityIndicator
      accessibilityLabel={label}
      accessibilityRole="progressbar"
      color={color ?? theme.colors.primary}
      {...props}
    />
  );
}
