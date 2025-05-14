import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BBook",
  description: "회의실 방 예약 시스템",
  openGraph: {
    title: "회의실 방 예약 시스템",
    description: "회의실 방 예약 시스템",
    images: ["https://bang-book.vercel.app/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
