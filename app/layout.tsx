// app/layout.tsx (or modify as needed depending on your Next.js version)

import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eisha Anwar | Full Stack Developer & Software Engineer",
  description:
    "Eisha Anwar is a full stack software engineer. View her portfolio, projects, skills, and contact details.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="keywords"
          content="Eisha Anwar, Software Engineer, Full Stack Developer, React, Node.js, Portfolio, eishaanwar.me"
        />
        <meta name="author" content="Eisha Anwar" />

        <meta
          property="og:title"
          content="Eisha Anwar | Full Stack Developer & Software Engineer"
        />
        <meta
          property="og:description"
          content="Visit the official portfolio of Eisha Anwar. Explore projects, skills, and contact info."
        />
        <meta property="og:url" content="https://eishaanwar.me" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eisha Anwar Portfolio" />
        <meta
          name="twitter:description"
          content="Eisha Anwar is a skilled full stack developer and software engineer."
        />

        <link rel="canonical" href="https://eishaanwar.me" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Eisha Anwar",
              url: "https://eishaanwar.me",
              sameAs: [
                "https://github.com/EishaAnwar",
                "https://linkedin.com/in/eisha-anwar",
              ],
              jobTitle: "Full Stack Developer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "UET, lahore",
              },
              worksFor: {
                "@type": "Organization",
                name: "Previously at Confiz",
              },
              description:
                "Full stack developer with experience in React, Node.js, REST APIs, and cross-platform solutions. Currently open to new opportunities.",
              image: "https://eishaanwar.me/images/profile.jpg",
            }),
          }}
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
