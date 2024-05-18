import "./globals.css";
import Nav from './component/sign'
import Navbar from "./component/navbar";


export const metadata = {
  title: "APPLE 2024",
  description: "APPLE ACADEMIC & ADMISSION",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/><br/><br/><br/><br className="max-sm:hidden"/>
        {children}
      </body>
    </html>
  );
}