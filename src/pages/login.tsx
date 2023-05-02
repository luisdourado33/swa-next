import React, { type CSSProperties } from "react";
import { Button } from "antd";

export default function Login() {
  const styles: CSSProperties = {
    display: "flex",
    width: "100%",
    height: "100vh",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={styles}>
      <Button type="dashed">Login page</Button>
    </div>
  );
}
