export interface NativeColorScale {
  background: string;
  border: string;
  danger: string;
  dangerForeground: string;
  foreground: string;
  muted: string;
  mutedForeground: string;
  primary: string;
  primaryForeground: string;
  success: string;
  surface: string;
  surfaceRaised: string;
  warning: string;
}

export const nativeColors: NativeColorScale = {
  background: "#ffffff",
  border: "#d0d5dd",
  danger: "#b42318",
  dangerForeground: "#ffffff",
  foreground: "#101828",
  muted: "#f2f4f7",
  mutedForeground: "#475467",
  primary: "#175cd3",
  primaryForeground: "#ffffff",
  success: "#067647",
  surface: "#ffffff",
  surfaceRaised: "#f8fafc",
  warning: "#93370d",
} as const;

export const nativeDarkColors: NativeColorScale = {
  background: "#0b1220",
  border: "#475467",
  danger: "#f97066",
  dangerForeground: "#3b0a05",
  foreground: "#f8fafc",
  muted: "#1f2937",
  mutedForeground: "#d0d5dd",
  primary: "#84caff",
  primaryForeground: "#062c41",
  success: "#75e0a7",
  surface: "#111827",
  surfaceRaised: "#1f2937",
  warning: "#fdb022",
} as const;

export const nativeSpacing = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
} as const;

export const nativeTypography = {
  fontSizeSm: 14,
  fontSizeMd: 16,
  fontSizeLg: 18,
  lineHeight: 22,
} as const;

export const nativeRadii = {
  sm: 6,
  md: 8,
  lg: 12,
  pill: 999,
} as const;

export interface JixicNativeTheme {
  colors: NativeColorScale;
  radii: typeof nativeRadii;
  spacing: typeof nativeSpacing;
  typography: typeof nativeTypography;
}

export const lightNativeTheme: JixicNativeTheme = {
  colors: nativeColors,
  radii: nativeRadii,
  spacing: nativeSpacing,
  typography: nativeTypography,
};

export const darkNativeTheme: JixicNativeTheme = {
  colors: nativeDarkColors,
  radii: nativeRadii,
  spacing: nativeSpacing,
  typography: nativeTypography,
};
