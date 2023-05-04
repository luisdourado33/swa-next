import React from "react";

import { Button } from "antd";
import type { CustomButtonProps } from "./types";

export default function CustomButton({ children }: CustomButtonProps) {
  return <Button>{children}</Button>;
}
