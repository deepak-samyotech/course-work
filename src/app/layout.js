import '../styles/globals.css'; // Import global CSS
import Navbar from '../components/ui/Navbar'; // Import the Navbar component
import RightBar from '../components/ui/RightBar';

export default function RootLayout({ children }) {
  console.log('children',children)
  return (
    <html lang="en">
      <body className="flex">
        <Navbar />
        <main className="flex-grow p-6">
          {children}
        </main>
        <RightBar/>
      </body>
    </html>
  );
}
