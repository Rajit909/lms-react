import NavBar from "./(router)/_components/Navbar/NavBar";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import SideNav from "./(router)/_components/Navbar/SideNav";

export const metadata = {
  title: "Beaginner tech stack",
  description: "Learn to build!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <NavBar />
          <div className="lg:flex">
            <div className="lg:w-[15%] bg-white h-[full] mt-[1px] hidden lg:block">
            <SideNav />
            </div>
            <div className="lg:w-[85%]">
              <main className="relative overflow-hidden">{children}</main>
            </div>
          </div>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
