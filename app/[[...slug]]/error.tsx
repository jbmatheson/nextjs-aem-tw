"use client";

// Assets
import "../globals.css";

import type { Metadata, Viewport } from "next";

import { renderError as Error } from "@/utils/renderError";

export const metadata: Metadata = {
  title: "Ansys",
  description: "Ansys",
  keywords: "Ansys",
  authors: {
    name: "Ansys",
    url: "https://www.ansys.com/",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default Error();
