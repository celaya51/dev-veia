import { defineConfig } from "astro/config";

const base = process.env.ASTRO_BASE || "/";
const site = process.env.SITE_URL || "https://dev.veia.com.mx";

export default defineConfig({
  output: "static",
  site,
  base,
});
