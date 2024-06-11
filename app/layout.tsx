import type { Metadata } from 'next';
import { roboto, orbitron } from '@/app/ui/fonts';
import '@/app/globals.css';
import Header from '@/app/ui/header';

export const metadata: Metadata = {
  title: 'Cycles Hurlant',
  description: 'Classic and custom bike rebuilds',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${roboto.variable} ${orbitron.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
