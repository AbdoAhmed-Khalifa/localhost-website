import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'localHost',
  description:
    'Discover the best local rental properties that fits your every travel needs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <section>{children}</section>
        <Footer />
      </body>
    </html>
  );
}
