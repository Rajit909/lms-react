import NavBar from "./(router)/_components/Navbar/NavBar";
import "./globals.css";

import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "@/components/ui/sonner"


export const metadata = {
  title: "Beaginner tech stack",
  description: "Learn to build!",
};

export default function RootLayout({ children }) {
  
  return (
  <ClerkProvider>
    <html lang="en">
      <body>
      <NavBar/>
      <main className="relative overflow-hidden">
        {children}
      </main>
      <Toaster />
        
        </body>
    </html>
   </ClerkProvider>
  );
}