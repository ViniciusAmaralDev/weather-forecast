import React from "react";
import MainRoutes from "./routes";
import Providers from "./providers";

export default function Main() {
  return (
    <Providers>
      <MainRoutes />
    </Providers>
  );
}
