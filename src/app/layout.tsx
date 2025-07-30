import { Header } from "./components/commom/Header";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
      >
      <Header />
        <main className="min-h-screen container mx-auto p-4 md:p-0 mb-30">
            {children}
        </main>
      </body>
    </html>
  );
}
