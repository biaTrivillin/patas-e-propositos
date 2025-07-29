import { Header } from "./components/commom/Header";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Header />
      <body
      >
        <main className="min-h-screen container mx-auto">
            {children}
        </main>
      </body>
    </html>
  );
}
