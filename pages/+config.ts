import vikeReact from "vike-react/config";
import Layout from "./Layout";
import type { Config } from "vike/types";

export const BASE_URL = "https://sexualidadenfoco.com.ar";

export default {
  extends: [vikeReact],
  ssr: true,
  Layout,
  prerender: true,
  lang: "es",
  title:
    "Terapia Sexual en Buenos Aires y Online | Lic. Viviana Baccarat",
  description:
    "Terapia sexual y de pareja en Buenos Aires y online con la Lic. Viviana Baccarat, psicóloga y sexóloga. Conocé cómo trabajo y pedí tu primera consulta.",
  favicon: "/favicon.svg",
  image: `${BASE_URL}/viviana_baccarat_square.jpg`,
} satisfies Config;
