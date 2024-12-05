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
  metadataBase: new URL('https://www.daamworld.com/'),
  title: 'Daam - Premium Bath Fittings for Modern Homes',
  keywords: [
    'daam',
    'daamworld',
    'bath fittings',
    'luxury bath fittings',
    'modern bathroom accessories',
    'high-quality bath fittings',
    'bathroom renovation essentials'
  ],
  description: 'Discover premium bath fittings and accessories at Daam World. Explore modern designs and high-quality solutions to elevate your bathroom experience.',
  openGraph: {
    title: 'Daam - The Future of Bath Fittings',
    description: 'Elevate your home with Daam’s cutting-edge bath fittings and modern bathroom accessories. Experience luxury and quality.',
    url: 'https://www.daamworld.com/',
    siteName: 'Daam World',
    type: 'website',
    images: [
      {
        url: 'https://www.daamworld.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Daam Bath Fittings',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daam - Premium Bath Fittings for Modern Homes',
    description: 'Upgrade your bathroom with Daam’s luxury bath fittings and accessories. Discover quality and style today.',
    images: ['https://www.daamworld.com/twitter-image.jpg'],
  },
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
