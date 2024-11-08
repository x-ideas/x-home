import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const env = process.env.NEXT_PUBLIC_RUN_ENV;
  return {
    name: `${env !== "prod" ? `x-home[${env}] ` : "x-home"}`,
    short_name: "x-home",
    description: "Home page for xjiaxiang",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
  };
}
