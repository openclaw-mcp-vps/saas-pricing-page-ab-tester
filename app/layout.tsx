import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PriceTest — A/B Test SaaS Pricing Pages Without Developers",
  description: "No-code tool to test different pricing strategies and measure conversion impact. Built for SaaS founders and growth marketers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8ed6e74e-4859-4657-8e19-598f106741fd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
