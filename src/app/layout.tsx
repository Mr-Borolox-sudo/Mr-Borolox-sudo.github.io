import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shihab Ahammed | Cybersecurity & Computer Science",
  description: "Personal portfolio of Shihab Ahammed - Computer Science Student, Cybersecurity Enthusiast, and Linux User.",
  keywords: ["Shihab Ahammed", "Cybersecurity", "Computer Science", "Portfolio", "Linux", "AI", "Ethical Hacking", "C++", "Python"],
  authors: [{ name: "Shihab Ahammed" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary-500/30 selection:text-primary-400 overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="fixed inset-0 z-[-1] bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))]"></div>
          <Navbar />
          <main className="flex min-h-screen flex-col items-center justify-between">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
