import './globals.css';
import { rubik } from '@/components/ui/font';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${rubik.variable}`}>
      <body>{children}</body>
    </html>
  );
}
