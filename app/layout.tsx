import Navebar from '@/components/Navebar';
import './globals.css';
import Footer from '@/components/footer';


export const metadata = {
  title: "Flexibble",
  description: "showcase and discover remarcable projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navebar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
