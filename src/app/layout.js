import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Heli",
  description: "Helping everyopne learn interactively!",
  openGraph: {
    title: "Heli",
    description: "Helping everyone learn interactively!",
    type: "website",
    url: "https://wk-12-group-project.vercel.app/",
    images: ["src/assets/src/assets/logo-white-bg.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        >
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
              <Navbar />
            </SignedIn>
          </header>
          <main className="grow flex items-center justify-center">
            {children}
          </main>

          <div className="footerPlacement">
            <div
              style={{
                border: "2px solid #2BD872",
                borderRadius: "10px",
                textAlign: "center",
                maxWidth: "800px",
                margin: "20px auto",
                padding: "20px",
              }}
            >
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
