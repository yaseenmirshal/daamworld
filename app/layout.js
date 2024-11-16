import { Montserrat } from 'next/font/google'; // Import Montserrat from Google Fonts
import localFont from 'next/font/local'; 
import './globals.css'; // Import your global styles

// Import custom fonts
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

// Google Font - Montserrat with valid weights
const montserrat = Montserrat({
  weight: ['100', '400', '700'], // Use valid weights
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Daam World',
  description: 'The Future Flow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`} // Apply fonts globally
      >
        {children} {/* Render children */}
      </body>
    </html>
  );
}