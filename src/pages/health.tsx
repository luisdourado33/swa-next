import React, { type CSSProperties } from "react";
import { Button } from "antd";

export default function Health() {
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
      <Button type="primary">Health page</Button>
    </div>
  );
}
