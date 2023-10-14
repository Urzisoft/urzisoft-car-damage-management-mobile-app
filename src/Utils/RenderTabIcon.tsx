import React from "react";
import { ColorValue } from "react-native";

const RenderTabIcon = (
  width: number,
  height: number,
  stroke: ColorValue,
  IconComponent: any
) => <IconComponent width={width} height={height} stroke={stroke} />;

export default RenderTabIcon;
