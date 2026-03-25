import type { Metadata } from 'next';
import { Tajawal, Playfair_Display } from 'next/font/google';
import './globals.css';

const tajawal = Tajawal({
  variable: '--font-tajawal',
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '700', '800'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'مطعم فارس | Farris Restaurant',
  description:
    'شباتي راشد - مطعم فارس - أصل الطبخ العراقي في الكويت. خدمة التوصيل مجاناً. Farris Restaurant — Authentic Iraqi cuisine in Kuwait with free delivery.',
  keywords: [
    'مطعم فارس',
    'شباتي راشد',
    'مطعم عراقي',
    'الكويت',
    'كباب',
    'مشاوي',
    'توصيل مجاني',
    'Farris Restaurant',
    'Iraqi food Kuwait',
  ],
  openGraph: {
    title: 'مطعم فارس | Farris Restaurant',
    description: 'أصل الطبخ العراقي في الكويت — خدمة التوصيل مجاناً',
    type: 'website',
    locale: 'ar_KW',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
