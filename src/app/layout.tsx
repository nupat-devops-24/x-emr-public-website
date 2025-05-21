import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../app/globals.css';

export const metadata: Metadata = {
  title: 'EMR Radiology Solution',
  description: 'Advanced AI-powered radiology solutions for faster, more accurate diagnoses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-100 font-sans text-gray-800">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}