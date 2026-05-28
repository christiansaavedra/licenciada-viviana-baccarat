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
    "Terapia Sexual Online | Lic. Viviana Baccarat | Argentina e Internacional",
  description:
    "Terapia sexual y de pareja con la Lic. Viviana Baccarat (M.N. 56769). Especialista en disfunciones, falta de deseo, vínculos y gestión del estrés. Atención online para Argentina y el exterior. Recuperá tu bienestar sexual.",
  favicon: "/favicon.svg",
  image: `${BASE_URL}/viviana_baccarat_square.jpg`,
} satisfies Config;
