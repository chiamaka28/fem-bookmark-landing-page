import './globals.css';
import { rubik } from '@/components/ui/font';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${rubik.variable}`}>
      <head>
        <title>Bookmark Landing Page</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
