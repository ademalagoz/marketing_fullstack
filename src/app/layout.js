import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "../context/ThemeContext";
import AuthProvider from "../components/AuthProvider/AuthProvider";
export const metadata = {
  title: "Adam Marketing App",
  description: "Generated by next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
