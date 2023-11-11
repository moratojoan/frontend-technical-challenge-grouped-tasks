import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lodgify Interview - Joan',
  description: 'Lodgify - FE Technical Challenge',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1>Lodgify Interview - Joan</h1>
          <h2>FE Technical Challenge</h2>
        </header>
        {children}
      </body>
    </html>
  );
}
