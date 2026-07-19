import { useMemo } from "react";
import { Dimensions, PixelRatio, useWindowDimensions } from "react-native";

export const DEFAULT_RPX_BASE_WIDTH = 375;

export interface RpxOptions {
  baseWidth?: number;
  maxScale?: number;
  minScale?: number;
  precision?: number;
  width?: number;
}

export interface RpxWindowValue {
  height: number;
  rpx: RpxConverter;
  scale: number;
  width: number;
}

export type RpxConverter = (value: number) => number;

function clamp(value: number, min?: number, max?: number) {
  const minValue = min ?? Number.NEGATIVE_INFINITY;
  const maxValue = max ?? Number.POSITIVE_INFINITY;

  return Math.min(Math.max(value, minValue), maxValue);
}

function roundToNearestPixel(value: number, precision?: number) {
  const rounded = PixelRatio.roundToNearestPixel(value);

  if (precision === undefined) {
    return rounded;
  }

  const factor = 10 ** precision;
  return Math.round(rounded * factor) / factor;
}

export function getRpxScale({
  baseWidth = DEFAULT_RPX_BASE_WIDTH,
  maxScale,
  minScale,
  width = Dimensions.get("window").width,
}: RpxOptions = {}) {
  if (baseWidth <= 0) {
    throw new Error("baseWidth must be greater than 0.");
  }

  return clamp(width / baseWidth, minScale, maxScale);
}

export function rpx(value: number, options?: RpxOptions) {
  return roundToNearestPixel(value * getRpxScale(options), options?.precision);
}

export function createRpx(options: RpxOptions = {}): RpxConverter {
  return (value) => rpx(value, options);
}

export function useRpx({
  baseWidth,
  maxScale,
  minScale,
  precision,
}: Omit<RpxOptions, "width"> = {}): RpxWindowValue {
  const { height, width } = useWindowDimensions();

  return useMemo(() => {
    const scale = getRpxScale({ baseWidth, maxScale, minScale, width });
    const converter: RpxConverter = (value) => roundToNearestPixel(value * scale, precision);

    return {
      height,
      rpx: converter,
      scale,
      width,
    };
  }, [baseWidth, height, maxScale, minScale, precision, width]);
}
