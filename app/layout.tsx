import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white overflow-x-hidden">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}