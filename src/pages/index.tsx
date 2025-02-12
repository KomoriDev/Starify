import { useState } from "react";

import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

import styles from "@/styles/home.module.css";
import { Input } from "@/components/ui/input";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Page() {
  const [repo, setRepo] = useState<string>();
  
  return (
    <>
      <Head>
        <title>Starify</title>
        <meta name="description" content="A tool to design attention-grabbing badges that increase the chances of users starring your project." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          
          <Input 
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            placeholder="Start with a GitHub repo" 
          />

          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href={`/api/starify?owner=${repo?.split('/')[0]}&repo=${repo?.split('/')[1]}`}
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Start now
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Read our docs
            </a>
          </div>
        </main>
        <footer className={styles.footer}>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            href="https://github.com/KomoriDev/Starify"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Github →
          </a>
        </footer>
      </div>
    </>
  );
}
