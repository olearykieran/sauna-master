// src/app/layout.js

import "../app/globals.css";

export const metadata = {
  title: "Sauna Master Services",
  description:
    "Professional Sauna Master offering exclusive in-home services including Aufguss ceremonies and guided breath work.",
  keywords: "Sauna Master, Aufguss Ceremony, Guided Breath Work, Luxury Sauna Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
