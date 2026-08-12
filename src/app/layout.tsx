import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Shihab Ahammed | Cybersecurity & Computer Science",
  description:
    "Personal portfolio of Shihab Ahammed — Computer Science Student, Cybersecurity Enthusiast, Linux User, and AI Explorer.",
  keywords: [
    "Shihab Ahammed",
    "Cybersecurity",
    "Computer Science",
    "Portfolio",
    "Linux",
    "AI",
    "Ethical Hacking",
    "C++",
    "Python",
    "Bangladesh",
  ],
  authors: [{ name: "Shihab Ahammed" }],
  openGraph: {
    title: "Shihab Ahammed | Cybersecurity & CS Student",
    description: "Root access to knowledge, one shell at a time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrains.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Ambient background mesh */}
          <div
            aria-hidden="true"
            className="fixed inset-0 z-[-1] pointer-events-none"
            style={{
              background: `
                radial-gradient(ellipse 80% 60% at 50% -10%, rgba(14,165,233,0.12) 0%, transparent 60%),
                radial-gradient(ellipse 50% 40% at 80% 80%, rgba(45,212,191,0.06) 0%, transparent 50%),
                #080808
              `,
            }}
          />
          <Navbar />
          <main className="flex min-h-screen flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
