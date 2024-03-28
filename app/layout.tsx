import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
//import Navbar from "../components/Navbar";
import { Provider } from "./utils/Provider";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog With CMS - Next.js App",
  description: "Created with Next.js and Sanity.io for my YouTube channel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.className} h-full bg-amber-50 text-pink-900 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-pink-600`}
      >
        <Provider>
         
          <main className="h-full mx-auto max-w-5xl px-6">{children}</main>
        </Provider>
      </body>
    </html>
  );
}