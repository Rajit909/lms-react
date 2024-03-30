import NavBar from "./(router)/_components/Navbar/NavBar";
import "./globals.css";




export const metadata = {
  title: "Beaginner tech stack",
  description: "Learn to build!",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
      <NavBar/>
      <main className="relative overflow-hidden">
        {children}
      </main>
        
        </body>
    </html>
  );
}