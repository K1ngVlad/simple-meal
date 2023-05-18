import { Categories, Header, Hero } from './components';
import { SidebarProvider } from './contexts';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Simple meal',
  description: 'Collection of various meals',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <Header />
          <Hero />
          {children}
          <Categories />
        </SidebarProvider>
      </body>
    </html>
  );
}
