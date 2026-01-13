import type { ReactNode } from "react";
import Header from "../components/layout/Header"; 
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <main style={{ padding: "1rem" }}>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
