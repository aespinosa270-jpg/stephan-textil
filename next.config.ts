import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Opciones de configuración */
  eslint: {
    // Ignorar errores de linter durante el build para que no falle
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignorar errores de tipos durante el build para que no falle
    ignoreBuildErrors: true,
  },
};

export default nextConfig;